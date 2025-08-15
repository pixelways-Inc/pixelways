import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';
import { NextResponse } from 'next/server';

// Configure Mistral AI (Codestral) using OpenAI-compatible provider
const mistral = createOpenAICompatible({
  name: 'mistral',
  apiKey: 'Vtgwkhm6Tzj12tWhaemsNvHhteto826z',
  baseURL: 'https://codestral.mistral.ai/v1',
});

// Search/Replace constants
export const SEARCH_START = "<<<<<<< SEARCH";
export const DIVIDER = "=======";
export const REPLACE_END = ">>>>>>> REPLACE";

// System prompt for precise editing
const EDIT_SYSTEM_PROMPT = `You are an expert web developer making precise modifications to existing HTML, CSS, and JavaScript files.

CRITICAL RULES:
1. Output ONLY search/replace blocks for the requested changes
2. Do NOT output explanations or full file content
3. Search blocks must match existing code EXACTLY (including whitespace and indentation)
4. Maintain proper navigation between HTML pages (use relative links like "about.html")
5. Preserve TailwindCSS classes and existing structure
6. Keep navigation consistent across all pages

FORMAT REQUIREMENTS:
Use this exact format for each change:

${SEARCH_START}
[exact code to find - must match perfectly]
${DIVIDER}
[replacement code]
${REPLACE_END}

EXAMPLES:

To change text:
${SEARCH_START}
    <h1>Old Title</h1>
${DIVIDER}
    <h1>New Title</h1>
${REPLACE_END}

To add code after existing line:
${SEARCH_START}
  </head>
${DIVIDER}
    <script src="new-script.js"></script>
  </head>
${REPLACE_END}

To delete code:
${SEARCH_START}
  <p>This paragraph will be removed.</p>
${DIVIDER}
${REPLACE_END}

For navigation changes, update ALL pages consistently:
${SEARCH_START}
<a href="services.html">Services</a>
${DIVIDER}
<a href="products.html">Products</a>
${REPLACE_END}

IMPORTANT: 
- Only use HTML, CSS, and JavaScript
- Import icon libraries if needed (<script src="https://cdn.tailwindcss.com"></script>)
- Make responsive using TailwindCSS
- If multiple files need changes, provide separate search/replace blocks for each
- Search text must be EXACT match including spaces and line breaks`;

export async function POST(request) {
  try {
    const { 
      prompt, 
      targetFile, 
      fileContent, 
      allFiles = [] 
    } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Edit prompt is required' }, { status: 400 });
    }

    if (!targetFile || !fileContent) {
      return NextResponse.json({ error: 'Target file and content are required' }, { status: 400 });
    }

    console.log('Processing edit request:', { 
      prompt, 
      targetFile, 
      contentLength: fileContent.length,
      hasAllFiles: allFiles.length > 0
    });

    // Build context about the file and project
    let contextInfo = `TARGET FILE: ${targetFile}\n\n`;
    contextInfo += `CURRENT FILE CONTENT:\n${fileContent}\n\n`;
    
    if (allFiles.length > 0) {
      contextInfo += `PROJECT FILES:\n`;
      allFiles.forEach(file => {
        contextInfo += `- ${file.path}\n`;
      });
      contextInfo += '\n';
    }

    // Generate search/replace blocks
    const { text: editResponse } = await generateText({
      model: mistral('codestral-latest'),
      messages: [
        {
          role: 'system',
          content: EDIT_SYSTEM_PROMPT
        },
        {
          role: 'user',
          content: `${contextInfo}USER REQUEST: ${prompt}\n\nProvide search/replace blocks to implement the requested changes to ${targetFile}.`
        }
      ],
      temperature: 0.1, // Low temperature for precise code editing
      maxTokens: 4000,
    });

    console.log('AI edit response received:', editResponse.substring(0, 200) + '...');

    // Parse search/replace blocks
    const editBlocks = parseSearchReplaceBlocks(editResponse);
    
    if (editBlocks.length === 0) {
      return NextResponse.json({ 
        error: 'No valid search/replace blocks found in AI response',
        aiResponse: editResponse
      }, { status: 400 });
    }

    // Apply edits to the file content
    const { modifiedContent, appliedEdits, failedEdits } = applySearchReplaceEdits(fileContent, editBlocks);

    console.log('Edit results:', {
      totalBlocks: editBlocks.length,
      appliedEdits: appliedEdits.length,
      failedEdits: failedEdits.length
    });

    return NextResponse.json({
      success: true,
      modifiedContent,
      originalContent: fileContent,
      appliedEdits,
      failedEdits,
      aiResponse: editResponse,
      stats: {
        totalBlocks: editBlocks.length,
        appliedCount: appliedEdits.length,
        failedCount: failedEdits.length
      }
    });

  } catch (error) {
    console.error('AI edit error:', error);
    return NextResponse.json({ 
      error: 'Failed to process edit request',
      details: error.message 
    }, { status: 500 });
  }
}

// Parse AI response into search/replace blocks
function parseSearchReplaceBlocks(aiResponse) {
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
        replace: currentBlock.replace.join('\n')
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

// Apply search/replace edits to content
function applySearchReplaceEdits(content, blocks) {
  let modifiedContent = content;
  const appliedEdits = [];
  const failedEdits = [];
  
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const searchText = block.search;
    const replaceText = block.replace;
    
    if (modifiedContent.includes(searchText)) {
      modifiedContent = modifiedContent.replace(searchText, replaceText);
      appliedEdits.push({
        blockIndex: i,
        search: searchText,
        replace: replaceText,
        status: 'applied'
      });
    } else {
      failedEdits.push({
        blockIndex: i,
        search: searchText,
        replace: replaceText,
        status: 'failed',
        reason: 'Search text not found in content'
      });
    }
  }
  
  return { modifiedContent, appliedEdits, failedEdits };
}

// Handle GET requests for testing
export async function GET() {
  return NextResponse.json({
    message: 'PixelWays AI Edit API',
    status: 'active',
    accepts: 'POST requests with edit instructions',
    format: {
      prompt: 'Description of changes to make',
      targetFile: 'filename.html',
      fileContent: 'current file content',
      allFiles: 'array of all project files (optional)'
    },
    timestamp: new Date().toISOString()
  });
}
