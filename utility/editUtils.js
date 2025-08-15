// Utility functions for handling search/replace operations

export const SEARCH_START = "<<<<<<< SEARCH";
export const DIVIDER = "=======";
export const REPLACE_END = ">>>>>>> REPLACE";

/**
 * Parse search/replace blocks from AI response
 * @param {string} aiResponse - Raw AI response containing search/replace blocks
 * @returns {Array} Array of {search, replace} objects
 */
export function parseSearchReplaceBlocks(aiResponse) {
  const blocks = [];
  const lines = aiResponse.split('\n');
  
  let currentBlock = null;
  let mode = 'none'; // 'search' | 'replace'
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim() === SEARCH_START) {
      currentBlock = { search: [], replace: [] };
      mode = 'search';
    } else if (line.trim() === DIVIDER && currentBlock) {
      mode = 'replace';
    } else if (line.trim() === REPLACE_END && currentBlock) {
      blocks.push({
        search: currentBlock.search.join('\n'),
        replace: currentBlock.replace.join('\n'),
        searchLines: currentBlock.search,
        replaceLines: currentBlock.replace
      });
      currentBlock = null;
      mode = 'none';
    } else if (mode === 'search' && currentBlock) {
      currentBlock.search.push(line);
    } else if (mode === 'replace' && currentBlock) {
      currentBlock.replace.push(line);
    }
  }
  
  return blocks;
}

/**
 * Apply search/replace edits to content
 * @param {string} content - Original file content
 * @param {Array} blocks - Array of search/replace blocks
 * @returns {Object} Result with modified content and applied/failed edits
 */
export function applySearchReplaceEdits(content, blocks) {
  let modifiedContent = content;
  const appliedEdits = [];
  const failedEdits = [];
  
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const searchText = block.search;
    const replaceText = block.replace;
    
    // Check if search text exists
    if (modifiedContent.includes(searchText)) {
      // Apply the replacement
      modifiedContent = modifiedContent.replace(searchText, replaceText);
      appliedEdits.push({
        blockIndex: i,
        search: searchText,
        replace: replaceText,
        status: 'applied',
        searchPreview: truncateText(searchText, 100),
        replacePreview: truncateText(replaceText, 100)
      });
    } else {
      // Find similar text for better error reporting
      const similarText = findSimilarText(content, searchText);
      failedEdits.push({
        blockIndex: i,
        search: searchText,
        replace: replaceText,
        status: 'failed',
        reason: 'Search text not found',
        searchPreview: truncateText(searchText, 100),
        similarText: similarText ? truncateText(similarText, 100) : null
      });
    }
  }
  
  return { modifiedContent, appliedEdits, failedEdits };
}

/**
 * Apply edits to multiple files
 * @param {Array} files - Array of file objects {path, content}
 * @param {Object} editsByFile - Object mapping file paths to edit blocks
 * @returns {Object} Results for all files
 */
export function applyEditsToMultipleFiles(files, editsByFile) {
  const results = {};
  
  for (const file of files) {
    const edits = editsByFile[file.path];
    if (edits && edits.length > 0) {
      const result = applySearchReplaceEdits(file.content, edits);
      results[file.path] = {
        ...result,
        originalContent: file.content
      };
    }
  }
  
  return results;
}

/**
 * Preview changes without applying them
 * @param {string} content - Original content
 * @param {Array} blocks - Search/replace blocks
 * @returns {Array} Preview of changes
 */
export function previewChanges(content, blocks) {
  const previews = [];
  
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const searchText = block.search;
    const replaceText = block.replace;
    
    if (content.includes(searchText)) {
      const startIndex = content.indexOf(searchText);
      const endIndex = startIndex + searchText.length;
      
      previews.push({
        blockIndex: i,
        status: 'will-apply',
        startIndex,
        endIndex,
        before: searchText,
        after: replaceText,
        context: getContextAround(content, startIndex, endIndex, 50)
      });
    } else {
      previews.push({
        blockIndex: i,
        status: 'will-fail',
        reason: 'Search text not found',
        searchText: truncateText(searchText, 100),
        similarText: findSimilarText(content, searchText)
      });
    }
  }
  
  return previews;
}

/**
 * Validate search/replace blocks
 * @param {Array} blocks - Search/replace blocks to validate
 * @returns {Object} Validation results
 */
export function validateEditBlocks(blocks) {
  const errors = [];
  const warnings = [];
  
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    
    // Check for empty search text
    if (!block.search || block.search.trim() === '') {
      errors.push(`Block ${i + 1}: Search text is empty`);
    }
    
    // Check for very long search text (might be too specific)
    if (block.search && block.search.length > 1000) {
      warnings.push(`Block ${i + 1}: Search text is very long (${block.search.length} chars)`);
    }
    
    // Check for search and replace being identical
    if (block.search === block.replace) {
      warnings.push(`Block ${i + 1}: Search and replace text are identical`);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    blockCount: blocks.length
  };
}

// Helper functions

function truncateText(text, maxLength) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

function findSimilarText(content, searchText) {
  // Simple similarity check - find text with similar length and some matching words
  const searchWords = searchText.toLowerCase().split(/\s+/).filter(w => w.length > 2);
  if (searchWords.length === 0) return null;
  
  const lines = content.split('\n');
  let bestMatch = null;
  let bestScore = 0;
  
  for (const line of lines) {
    const lineWords = line.toLowerCase().split(/\s+/);
    const matchingWords = searchWords.filter(word => lineWords.some(lw => lw.includes(word)));
    const score = matchingWords.length / searchWords.length;
    
    if (score > bestScore && score > 0.3) {
      bestScore = score;
      bestMatch = line.trim();
    }
  }
  
  return bestMatch;
}

function getContextAround(content, startIndex, endIndex, contextLength) {
  const before = content.substring(Math.max(0, startIndex - contextLength), startIndex);
  const after = content.substring(endIndex, Math.min(content.length, endIndex + contextLength));
  
  return {
    before: before,
    target: content.substring(startIndex, endIndex),
    after: after
  };
}

// Export for use in components
export default {
  parseSearchReplaceBlocks,
  applySearchReplaceEdits,
  applyEditsToMultipleFiles,
  previewChanges,
  validateEditBlocks,
  SEARCH_START,
  DIVIDER,
  REPLACE_END
};
