# Search/Replace System Implementation Analysis

## 🎯 What This System Does

This is a **precise code editing system** that allows AI to make targeted modifications to existing HTML/CSS/JS files instead of regenerating everything from scratch.

### 🔧 How It Works

```javascript
// System constants for parsing
export const SEARCH_START = "<<<<<<< SEARCH";
export const DIVIDER = "=======";
export const REPLACE_END = ">>>>>>> REPLACE";
```

### 📝 Format Example
```
<<<<<<< SEARCH
    <h1>Old Title</h1>
=======
    <h1>New Updated Title</h1>
>>>>>>> REPLACE
```

## ✅ Implementation Strategy for Your System

### 1. **Add to AI Generation Route**
You can extend your existing AI system to support both:
- **Initial Generation**: Full HTML files (current system)
- **Follow-up Edits**: Search/replace modifications

### 2. **Integration Points**

#### Option A: Extend Current AI Route
```javascript
// In app/api/ai/generate/route.js
export async function POST(request) {
  const { prompt, projectType, isFollowup, existingWebsite, editMode } = await request.json();
  
  if (editMode === 'search-replace') {
    // Use FOLLOW_UP_SYSTEM_PROMPT
    return handleSearchReplaceEdit(prompt, existingWebsite);
  } else {
    // Use current full generation system
    return handleFullGeneration(prompt, projectType);
  }
}
```

#### Option B: Create Dedicated Edit Route
```javascript
// New file: app/api/ai/edit/route.js
export async function POST(request) {
  const { prompt, targetFile, fileContent } = await request.json();
  
  // Use FOLLOW_UP_SYSTEM_PROMPT to generate search/replace blocks
  const edits = await generateSearchReplaceEdits(prompt, fileContent);
  
  // Apply edits and return modified content
  return applySearchReplaceEdits(fileContent, edits);
}
```

### 3. **Parser Implementation**

```javascript
// Utility functions for parsing search/replace blocks
export function parseSearchReplaceBlocks(aiResponse) {
  const blocks = [];
  const lines = aiResponse.split('\n');
  
  let currentBlock = null;
  let mode = 'none'; // 'search' | 'replace'
  
  for (const line of lines) {
    if (line.includes(SEARCH_START)) {
      currentBlock = { search: [], replace: [] };
      mode = 'search';
    } else if (line.includes(DIVIDER)) {
      mode = 'replace';
    } else if (line.includes(REPLACE_END)) {
      if (currentBlock) {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      mode = 'none';
    } else if (mode === 'search') {
      currentBlock.search.push(line);
    } else if (mode === 'replace') {
      currentBlock.replace.push(line);
    }
  }
  
  return blocks;
}

export function applySearchReplaceEdits(content, blocks) {
  let modifiedContent = content;
  
  for (const block of blocks) {
    const searchText = block.search.join('\n');
    const replaceText = block.replace.join('\n');
    
    if (modifiedContent.includes(searchText)) {
      modifiedContent = modifiedContent.replace(searchText, replaceText);
    }
  }
  
  return modifiedContent;
}
```

### 4. **UI Integration**

#### Add Edit Mode to Workspace
```javascript
// In workspace component
const [editMode, setEditMode] = useState(false);

const handleFileEdit = async (fileName, editPrompt) => {
  const response = await fetch('/api/ai/edit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: editPrompt,
      targetFile: fileName,
      fileContent: getCurrentFileContent(fileName)
    })
  });
  
  const { modifiedContent } = await response.json();
  updateFileInWebsite(fileName, modifiedContent);
};
```

#### Code Editor Integration
```javascript
// In DesignMode component
const [selectedFileForEdit, setSelectedFileForEdit] = useState(null);
const [editPrompt, setEditPrompt] = useState('');

const handleQuickEdit = () => {
  if (selectedFileForEdit && editPrompt) {
    handleFileEdit(selectedFileForEdit.path, editPrompt);
  }
};

// UI for quick edits
<div className="edit-panel">
  <textarea 
    value={editPrompt}
    onChange={(e) => setEditPrompt(e.target.value)}
    placeholder="Describe what you want to change..."
  />
  <button onClick={handleQuickEdit}>Apply Edit</button>
</div>
```

## 🚀 Benefits for Your System

### ✅ **Precise Modifications**
- Change specific elements without regenerating entire files
- Maintain existing code structure and styling
- Faster iterations for small changes

### ✅ **Better User Experience**  
- "Change the header color to blue" → Targeted CSS modification
- "Add a contact form to contact.html" → Specific HTML insertion
- "Make navigation mobile-responsive" → Precise CSS/JS updates

### ✅ **Preserve Context**
- Keeps existing navigation structure
- Maintains consistent styling across pages
- Preserves custom modifications users made

## 🎯 Integration with Your Current System

### Phase 1: Basic Implementation
1. Add edit mode flag to AI generation route
2. Implement search/replace parser
3. Add edit UI to code viewer

### Phase 2: Advanced Features
1. Visual diff showing changes
2. Undo/redo functionality
3. Multi-file editing support

### Phase 3: Smart Editing
1. Context-aware suggestions
2. Auto-detect edit targets
3. Preview changes before applying

## 💡 Example Usage in Your System

### Current Flow:
```
User: "Generate a business website"
AI: Generates 5 HTML files
User: Deploys and previews
```

### Enhanced Flow with Edits:
```
User: "Generate a business website"  
AI: Generates 5 HTML files
User: Deploys and previews
User: "Change the hero background to gradient blue"
AI: Returns search/replace blocks
System: Applies changes to index.html
User: Sees updated preview
```

## 🔧 Implementation Code

```javascript
// Add to your AI route
const EDIT_SYSTEM_PROMPT = `You are an expert web developer modifying existing HTML files.
Output ONLY search/replace blocks for the requested changes.
Use this format:

<<<<<<< SEARCH
[exact code to find]
=======
[replacement code]
>>>>>>> REPLACE

IMPORTANT: 
- Search blocks must match existing code exactly
- Use relative file links (about.html, not #about)
- Maintain consistent navigation across all pages
- Preserve TailwindCSS classes and structure`;
```

This system would make your AI website builder much more powerful by allowing precise, iterative improvements rather than full regenerations! 🚀
