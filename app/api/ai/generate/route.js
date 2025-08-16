import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateObject } from 'ai';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';

// Configure Mistral AI (Codestral) using OpenAI-compatible provider
const mistral = createOpenAICompatible({
  name: 'mistral',
  apiKey: 'Vtgwkhm6Tzj12tWhaemsNvHhteto826z',
  baseURL: 'https://codestral.mistral.ai/v1',
});

// Schema for generated website files
const WebsiteSchema = z.object({
  projectType: z.enum(['react-vite', 'next', 'static']),
  files: z.array(z.object({
    path: z.string(),
    content: z.string(),
    action: z.enum(['create', 'modify', 'delete']).optional(),
    searchReplace: z.object({
      filePath: z.string(),
      oldString: z.string(),
      newString: z.string(),
      lineNumbers: z.object({
        start: z.number(),
        end: z.number()
      }).optional()
    }).optional()
  })),
  description: z.string(),
  instructions: z.string().optional(),
});

// Function to get React-Vite template structure
function getReactViteTemplateStructure() {
  const templatePath = path.join(process.cwd(), 'data', 'react-vite');
  const structure = {
    configFiles: {},
    components: {},
    pages: {},
    utils: {},
    styles: {}
  };

  try {
    // Read configuration files
    const configFiles = [
      'package.json',
      'vite.config.ts',
      'tailwind.config.js',
      'tsconfig.json',
      'postcss.config.js',
      '.eslintrc.cjs'
    ];

    configFiles.forEach(file => {
      const filePath = path.join(templatePath, file);
      if (fs.existsSync(filePath)) {
        structure.configFiles[file] = {
          path: file,
          content: fs.readFileSync(filePath, 'utf-8'),
          lineCount: fs.readFileSync(filePath, 'utf-8').split('\n').length
        };
      }
    });

    // Read source files
    const srcPath = path.join(templatePath, 'src');
    if (fs.existsSync(srcPath)) {
      // Read main files
      const mainFiles = ['main.tsx', 'App.tsx', 'index.css', 'tailwind.css', 'vite-env.d.ts'];
      mainFiles.forEach(file => {
        const filePath = path.join(srcPath, file);
        if (fs.existsSync(filePath)) {
          structure.pages[file] = {
            path: `src/${file}`,
            content: fs.readFileSync(filePath, 'utf-8'),
            lineCount: fs.readFileSync(filePath, 'utf-8').split('\n').length
          };
        }
      });

      // Read components
      const componentsPath = path.join(srcPath, 'components');
      if (fs.existsSync(componentsPath)) {
        const componentDirs = ['ui', 'shared', 'HOC', 'hooks', 'config'];
        componentDirs.forEach(dir => {
          const dirPath = path.join(componentsPath, dir);
          if (fs.existsSync(dirPath)) {
            structure.components[dir] = {};
            const files = fs.readdirSync(dirPath, { recursive: true });
            files.forEach(file => {
              if (typeof file === 'string' && (file.endsWith('.tsx') || file.endsWith('.ts'))) {
                const filePath = path.join(dirPath, file);
                const content = fs.readFileSync(filePath, 'utf-8');
                structure.components[dir][file] = {
                  path: `src/components/${dir}/${file}`,
                  content: content,
                  lineCount: content.split('\n').length
                };
              }
            });
          }
        });
      }

      // Read utils
      const utilsPath = path.join(srcPath, 'utils');
      if (fs.existsSync(utilsPath)) {
        const utils = fs.readdirSync(utilsPath);
        utils.forEach(file => {
          if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            const filePath = path.join(utilsPath, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            structure.utils[file] = {
              path: `src/utils/${file}`,
              content: content,
              lineCount: content.split('\n').length
            };
          }
        });
      }

      // Read assets
      const assetsPath = path.join(srcPath, 'assets');
      if (fs.existsSync(assetsPath)) {
        structure.styles = {};
        const styleFiles = fs.readdirSync(assetsPath, { recursive: true });
        styleFiles.forEach(file => {
          if (typeof file === 'string' && file.endsWith('.css')) {
            const filePath = path.join(assetsPath, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            structure.styles[file] = {
              path: `src/assets/${file}`,
              content: content,
              lineCount: content.split('\n').length
            };
          }
        });
      }
    } else {
      console.log('✗ Source directory not found');
    }

    // Read public files
    const publicPath = path.join(templatePath, 'public');
    if (fs.existsSync(publicPath)) {
      structure.public = {};
      const publicFiles = fs.readdirSync(publicPath);
      publicFiles.forEach(file => {
        if (file === 'index.html') {
          const filePath = path.join(publicPath, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          structure.public[file] = {
            path: file,
            content: content,
            lineCount: content.split('\n').length
          };
        }
      });
    }

  } catch (error) {
    console.error('Error reading template structure:', error);
  }

  return structure;
}

// Function to get static site template structure
function getStaticSiteTemplateStructure() {
  const templatePath = path.join(process.cwd(), 'data', 'static-templates');
  const structure = {
    baseTemplate: {},
    javascript: {},
    config: {}
  };

  try {
    // Read base HTML template
    const baseTemplatePath = path.join(templatePath, 'index.html');
    if (fs.existsSync(baseTemplatePath)) {
      structure.baseTemplate = {
        path: 'index.html',
        content: fs.readFileSync(baseTemplatePath, 'utf-8'),
        lineCount: fs.readFileSync(baseTemplatePath, 'utf-8').split('\n').length
      };
    }

    // Read JavaScript template
    const scriptPath = path.join(templatePath, 'script.js');
    if (fs.existsSync(scriptPath)) {
      structure.javascript = {
        path: 'script.js',
        content: fs.readFileSync(scriptPath, 'utf-8'),
        lineCount: fs.readFileSync(scriptPath, 'utf-8').split('\n').length
      };
    }

    // Read configuration
    const configPath = path.join(templatePath, 'TEMPLATE_CONFIG.md');
    if (fs.existsSync(configPath)) {
      structure.config = {
        path: 'TEMPLATE_CONFIG.md',
        content: fs.readFileSync(configPath, 'utf-8'),
        lineCount: fs.readFileSync(configPath, 'utf-8').split('\n').length
      };
    }

  } catch (error) {
    console.error('Error reading static template structure:', error);
  }

  return structure;
}

export async function POST(request) {
  try {
    const { prompt, projectType = 'static', isFollowup = false, existingWebsite = null } = await request.json();
    
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    console.log('Generating website with Mistral AI:', { prompt, projectType, isFollowup, hasExistingWebsite: !!existingWebsite });

    // Get React-Vite template structure if needed
    let templateStructure = null;
    let staticTemplateStructure = null;
    
    if (projectType === 'react-vite') {
      templateStructure = getReactViteTemplateStructure();
      console.log('React-Vite template structure loaded:', Object.keys(templateStructure));
    } else if (projectType === 'static') {
      staticTemplateStructure = getStaticSiteTemplateStructure();
      console.log('Static site template structure loaded:', Object.keys(staticTemplateStructure));
    }

    // Build context-aware system prompt
    let contextInfo = '';
    if (isFollowup && existingWebsite) {
      contextInfo = `
🔄 FOLLOWUP MODE: You are modifying an existing website project.

📁 EXISTING WEBSITE CONTEXT:
Project Type: ${existingWebsite.projectType}
Description: ${existingWebsite.description}

Current Files:
${existingWebsite.files.map(file => `- ${file.path} (${Math.round(file.content.length / 100)} lines)`).join('\n')}

🎯 MODIFICATION TASK: Based on the user's request, intelligently modify, enhance, or rebuild the existing website while maintaining quality and consistency.

IMPORTANT RULES FOR MODIFICATIONS:
- Keep the same project structure and file organization
- Maintain the overall design language and branding
- Preserve any good existing functionality
- Only change what the user specifically requests
- If adding new pages/components, follow the existing patterns
- Ensure all modifications are cohesive with the existing design
`;
    }

    const systemPrompt = `You are a world-class web developer and UI/UX designer who creates STUNNING, PROFESSIONAL, and MODERN websites that rival the best designs on the internet.

${contextInfo}

🎯 MISSION: ${isFollowup ? 'Intelligently modify and enhance the existing website based on the user\'s feedback.' : 'Create breathtaking, pixel-perfect websites that users will absolutely love.'}

IMPORTANT: You must return a JSON object with this EXACT structure:
{
  "projectType": "${projectType}",
  "description": "Brief description of the website",
  "instructions": "Step-by-step instructions for implementation",
  "files": [
    {
      "path": "file/path/here",
      "content": "full file content here",
      "action": "create|modify|delete",
      "searchReplace": {
        "filePath": "path/to/file",
        "oldString": "exact text to replace",
        "newString": "new text to insert",
        "lineNumbers": {
          "start": 10,
          "end": 15
        }
      }
    }
  ]
}

🚀 DESIGN PRINCIPLES FOR ALL PROJECTS:

1. **USE TAILWIND CSS** - Always use Tailwind CSS for styling
2. **STUNNING VISUAL DESIGN:**
   - Modern gradients and sophisticated color schemes
   - Beautiful typography with perfect spacing
   - Eye-catching hero sections with compelling CTAs
   - Professional layouts that guide user attention
   - Subtle shadows, rounded corners, and premium aesthetics

3. **INTERACTIVE & ENGAGING:**
   - Smooth hover effects and micro-interactions
   - Animated elements that feel premium
   - Interactive components (buttons, cards, forms)
   - Scroll-triggered animations
   - Loading states and smooth transitions

4. **MOBILE-FIRST RESPONSIVE:**
   - Perfect on mobile, tablet, and desktop
   - Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
   - Touch-friendly interface elements
   - Optimized layouts for all screen sizes

5. **PROFESSIONAL CONTENT:**
   - Compelling headlines and copy
   - Realistic placeholder content
   - Professional imagery suggestions
   - Clear value propositions
   - Strong call-to-action buttons

For ${projectType} projects:

${projectType === 'static' ? `
🌟 STATIC WEBSITE REQUIREMENTS:

🎯 IMPORTANT: You are working with an EXISTING Static Site template that already has:
- Complete HTML structure with navigation, header, and footer
- Pre-built JavaScript functionality (mobile menu, forms, animations)
- Tailwind CSS styling with custom classes
- Responsive design and mobile-first approach
- SEO optimization and accessibility features

📁 EXISTING TEMPLATE STRUCTURE:
${staticTemplateStructure ? `
BASE TEMPLATE (REUSE THIS - do not recreate):
- ${staticTemplateStructure.baseTemplate.path} (${staticTemplateStructure.baseTemplate.lineCount} lines) - Complete HTML structure with placeholders

JAVASCRIPT TEMPLATE (REUSE THIS - do not recreate):
- ${staticTemplateStructure.javascript.path} (${staticTemplateStructure.javascript.lineCount} lines) - Complete functionality (mobile menu, forms, animations)

CONFIGURATION (REFERENCE THIS):
- ${staticTemplateStructure.config.path} (${staticTemplateStructure.config.lineCount} lines) - Template variables and usage guide
` : 'Template structure not available'}

🎨 YOUR TASK: Create page content using the existing template structure

🔧 TEMPLATE USAGE PATTERNS:
- Use the base HTML template as a foundation
- Replace placeholder variables: {{SITE_TITLE}}, {{SITE_DESCRIPTION}}, {{MAIN_CONTENT}}
- Create content for each page (index.html, about.html, services.html, contact.html, portfolio.html)
- Each page should use the same navigation and footer structure
- Leverage existing CSS classes: .gradient-bg, .text-gradient, .hover-lift, .animate-on-scroll

📝 FILE CREATION RULES:
1. Use the base template structure for all pages
2. Replace {{MAIN_CONTENT}} with page-specific content
3. Keep navigation and footer identical across all pages
4. Use existing CSS classes and JavaScript functionality
5. Create 5 separate HTML files as required

🎯 TEMPLATE VARIABLES TO USE:
- {{SITE_TITLE}} - Website title
- {{SITE_DESCRIPTION}} - Website description  
- {{SITE_KEYWORDS}} - SEO keywords
- {{SITE_LOGO}} - Company/brand name
- {{CURRENT_YEAR}} - Current year
- {{MAIN_CONTENT}} - Page-specific content

💡 CONTENT CREATION GUIDELINES:
- Create compelling hero sections with gradient backgrounds
- Use service cards with hover effects
- Include portfolio items with filtering
- Add testimonials and team sections
- Create professional contact forms
- Use existing JavaScript functionality

📁 MANDATORY FILE STRUCTURE (must generate ALL files):
* index.html - Homepage with hero, features, CTA + navigation to all pages
* about.html - About page with team/story + navigation to all pages  
* services.html - Service cards with hover effects + navigation to all pages
* portfolio.html - Project showcase with filters + navigation to all pages
* contact.html - Beautiful contact form + info + navigation to all pages
* script.js - JavaScript functionality (reuse template)

⚠️ VALIDATION: Your response must contain exactly 5 HTML files with proper cross-linking navigation

🔧 TECHNICAL REQUIREMENTS:
- Use existing template structure and CSS classes
- Maintain consistent navigation across all pages
- Include all required JavaScript functionality
- Ensure responsive design and mobile compatibility
- Follow SEO best practices with proper meta tags

💡 EXAMPLE: If generating a business website, you MUST create:
1. index.html (with <a href="about.html">About</a> links)
2. about.html (with <a href="services.html">Services</a> links)  
3. services.html (with <a href="contact.html">Contact</a> links)
4. contact.html (with <a href="portfolio.html">Portfolio</a> links)
5. portfolio.html (with <a href="index.html">Home</a> links)

Each file must use the template structure and include navigation to ALL other files.
` : projectType === 'react-vite' ? `
⚛️ REACT + VITE REQUIREMENTS:

🎯 IMPORTANT: You are working with an EXISTING React-Vite template that already has:
- Complete project configuration (package.json, vite.config.ts, tailwind.config.js, etc.)
- Pre-built UI component library with 20+ components
- TypeScript configuration and ESLint setup
- Tailwind CSS with custom animations
- Form handling with react-hook-form and zod validation

📁 EXISTING TEMPLATE STRUCTURE:
${templateStructure ? `
CONFIG FILES (DO NOT MODIFY - these are already perfect):
${Object.entries(templateStructure.configFiles).map(([file, info]) => 
  `- ${info.path} (${info.lineCount} lines) - ${file === 'package.json' ? 'Dependencies and scripts' : 
    file === 'vite.config.ts' ? 'Vite configuration' :
    file === 'tailwind.config.js' ? 'Tailwind CSS configuration' :
    file === 'tsconfig.json' ? 'TypeScript configuration' :
    'Configuration file'}`).join('\n')}

EXISTING COMPONENTS (REUSE THESE - do not recreate):
${Object.entries(templateStructure.components).map(([category, components]) => 
  `${category.toUpperCase()}:
${Object.entries(components).map(([file, info]) => 
  `  - ${info.path} (${info.lineCount} lines)`).join('\n')}`).join('\n\n')}

EXISTING PAGES (MODIFY THESE):
${Object.entries(templateStructure.pages).map(([file, info]) => 
  `- ${info.path} (${info.lineCount} lines) - ${file === 'App.tsx' ? 'Main application component' : 
    file === 'main.tsx' ? 'Application entry point' :
    file === 'index.css' ? 'Global styles' :
    'Page file'}`).join('\n')}

EXISTING UTILITIES (REUSE THESE):
${Object.entries(templateStructure.utils).map(([file, info]) => 
  `- ${info.path} (${info.lineCount} lines)`).join('\n')}

EXISTING STYLES (REUSE THESE):
${Object.entries(templateStructure.styles).map(([file, info]) => 
  `- ${info.path} (${info.lineCount} lines)`).join('\n')}
` : 'Template structure not available'}

🎨 YOUR TASK: Create new pages and components using the existing template structure

🔧 COMPONENT USAGE PATTERNS:
- Import components from "@Components/ui" (already configured)
- Use existing Button, Container, Flex, Typography, etc.
- Follow the existing design patterns in App.tsx
- Use Tailwind CSS classes (already configured)
- Maintain TypeScript types (already configured)

📝 FILE CREATION RULES:
1. ONLY create NEW files that don't exist
2. DO NOT modify existing config files (package.json, vite.config.ts, etc.)
3. DO NOT recreate existing components
4. Use the existing component library and patterns
5. Create new pages in src/pages/ directory
6. Create new components in src/components/ if needed

🎯 COMPONENT IMPORT PATTERN:
import {
  Container,
  Button,
  Flex,
  Typography,
  Model,
  Accordion,
  // ... other components as needed
} from "@Components/ui";

🎨 DESIGN INSPIRATION - Create websites that look like:
- Apple.com (clean, minimal, premium)
- Stripe.com (professional, trustworthy)
- Linear.app (modern, sleek)
- Vercel.com (developer-focused, elegant)
- Figma.com (creative, innovative)

💡 CONTENT GUIDELINES:
- Write compelling, professional copy
- Use action-oriented language
- Include realistic business information
- Create clear value propositions
- Add testimonials and social proof

🎯 QUALITY STANDARDS:
- Every element should be pixel-perfect
- Smooth animations and interactions
- Professional typography hierarchy
- Consistent spacing and alignment
- Beautiful color combinations
- Premium look and feel

📋 RESPONSE FORMAT:
For each new file you create, specify:
- "action": "create"
- "path": "src/pages/NewPage.tsx" (or appropriate path)
- "content": "Complete file content"

For modifications to existing files, specify:
- "action": "modify"
- "searchReplace": {
  "filePath": "src/App.tsx",
  "oldString": "exact text to replace (use exact whitespace and formatting)",
  "newString": "new text to insert",
  "lineNumbers": { "start": 10, "end": 15 }
}

⚠️ CRITICAL MODIFICATION RULES:
1. **EXACT MATCHING**: The oldString must match EXACTLY including spaces, tabs, and line breaks
2. **LINE NUMBERS**: Use lineNumbers when possible for precise targeting
3. **CONTEXT**: Include enough context in oldString to ensure unique matching
4. **WHITESPACE**: Preserve exact whitespace formatting from the original file
5. **FALLBACK**: If exact match fails, the system will try fuzzy matching automatically

💡 BEST PRACTICES:
- Copy the exact text from the file you want to modify
- Include 2-3 lines of context before and after your target
- Use lineNumbers for precise line-based replacements
- Test your oldString against the actual file content
- Keep modifications focused and specific

Return ONLY the JSON object with the files array format. Make this website absolutely STUNNING! 🚀
` : `
🔗 NEXT.JS REQUIREMENTS:

- Modern Next.js App Router structure
- Server and client components
- Tailwind CSS integration
- Optimized performance
- SEO-friendly structure

📁 STRUCTURE:
* app/layout.tsx - Root layout
* app/page.tsx - Homepage
* app/about/page.tsx - About page
* components/ - Reusable components
* tailwind.config.js - Configuration
`}

🎨 DESIGN INSPIRATION - Create websites that look like:
- Apple.com (clean, minimal, premium)
- Stripe.com (professional, trustworthy)
- Linear.app (modern, sleek)
- Vercel.com (developer-focused, elegant)
- Figma.com (creative, innovative)

💡 CONTENT GUIDELINES:
- Write compelling, professional copy
- Use action-oriented language
- Include realistic business information
- Create clear value propositions
- Add testimonials and social proof

🎯 QUALITY STANDARDS:
- Every element should be pixel-perfect
- Smooth animations and interactions
- Professional typography hierarchy
- Consistent spacing and alignment
- Beautiful color combinations
- Premium look and feel

Return ONLY the JSON object with the files array format. Make this website absolutely STUNNING! 🚀`;

    // Build context-aware prompt
    let fullPrompt = '';
    if (isFollowup && existingWebsite) {
      fullPrompt = `EXISTING WEBSITE CODEBASE:

${existingWebsite.files.map(file => `=== ${file.path} ===
${file.content}

`).join('\n')}

USER REQUEST: ${prompt}

Please modify the above website according to the user's request. Return the complete updated website with all files.`;
    } else if (projectType === 'react-vite') {
      fullPrompt = `Create a complete React-Vite website using the existing template: ${prompt}

IMPORTANT: Use the existing React-Vite template structure and components. Only create new files that don't exist. Reuse existing components from @Components/ui.`;
    } else {
      fullPrompt = `Create a complete ${projectType} website: ${prompt}`;
    }

    // Add timeout handling for AI generation
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('AI generation timed out after 4 minutes')), 240000); // 4 minutes
    });

    const aiGenerationPromise = generateObject({
      model: mistral('codestral-latest'),
      schema: WebsiteSchema,
      system: systemPrompt,
      prompt: fullPrompt,
      temperature: 0.7,
    });

    // Race between AI generation and timeout
    const result = await Promise.race([aiGenerationPromise, timeoutPromise]);

    console.log('Generated website:', result.object);

    return NextResponse.json({
      success: true,
      website: result.object,
      message: 'Website generated successfully',
      templateStructure: projectType === 'react-vite' ? templateStructure : 
                        projectType === 'static' ? staticTemplateStructure : null
    });

  } catch (error) {
    console.error('Error generating website:', error);
    
    // Check if it's a timeout error
    if (error.message.includes('timed out') || error.message.includes('timeout')) {
      console.log('AI generation timed out, using fallback website');
      
      // Create a fallback website based on the prompt
      const fallbackWebsite = createFallbackWebsite(prompt, projectType);
      
      return NextResponse.json({
        success: true,
        website: fallbackWebsite,
        message: 'Website generated using fallback (AI timed out)',
        usedFallback: true
      });
    }
    
    // Fallback to a multi-page static website if AI fails for other reasons
    const fallbackWebsite = {
      projectType: 'static',
      description: `A complete multi-page website based on your request`,
      files: [
        {
          path: 'index.html',
          content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Generated Website</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            text-align: center;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            color: #666;
        }
        
        .cta-button {
            display: inline-block;
            padding: 12px 24px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: transform 0.2s ease;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
            .container {
                margin: 1rem;
                padding: 1.5rem;
            }
            
            h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Your AI Website</h1>
        <p>This website was generated by AI based on your request. The AI service is currently processing your request, so this is a beautiful placeholder for now.</p>
        <a href="#" class="cta-button">Get Started</a>
    </div>
    
    <script>
        // Add some interactivity
        document.querySelector('.cta-button').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Welcome to your AI-generated website!');
        });
        
        // Add some animation
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.container');
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                container.style.transition = 'all 0.6s ease';
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 100);
        });
    </script>
</body>
</html>`
        }
      ]
    };

    return NextResponse.json({
      success: true,
      website: fallbackWebsite,
      message: 'Generated fallback website (AI service unavailable)',
      error: error.message
    });
  }
}

// Fallback website creation function for when AI times out
function createFallbackWebsite(prompt, projectType) {
  const basePrompt = prompt.toLowerCase();
  
  // Determine website type based on prompt keywords
  let websiteType = 'business';
  if (basePrompt.includes('startup') || basePrompt.includes('business')) websiteType = 'startup';
  else if (basePrompt.includes('portfolio') || basePrompt.includes('personal')) websiteType = 'portfolio';
  else if (basePrompt.includes('restaurant') || basePrompt.includes('food')) websiteType = 'restaurant';
  else if (basePrompt.includes('ecommerce') || basePrompt.includes('shop')) websiteType = 'ecommerce';
  
  if (projectType === 'static') {
    return {
      projectType: 'static',
      description: `A modern ${websiteType} website based on your request`,
      files: [
        {
          path: 'index.html',
          content: createIndexHTML(websiteType)
        },
        {
          path: 'about.html',
          content: createAboutHTML(websiteType)
        },
        {
          path: 'services.html',
          content: createServicesHTML(websiteType)
        },
        {
          path: 'contact.html',
          content: createContactHTML(websiteType)
        },
        {
          path: 'portfolio.html',
          content: createPortfolioHTML(websiteType)
        },
        {
          path: 'script.js',
          content: createScriptJS()
        }
      ]
    };
  } else if (projectType === 'react-vite') {
    return {
      projectType: 'react-vite',
      description: `A modern React ${websiteType} website`,
      files: [
        {
          path: 'package.json',
          content: createPackageJSON()
        },
        {
          path: 'src/App.jsx',
          content: createReactAppJSX(websiteType)
        },
        {
          path: 'src/index.css',
          content: createReactCSS()
        },
        {
          path: 'index.html',
          content: createReactIndexHTML()
        }
      ]
    };
  }
  
  // Default static fallback
  return {
    projectType: 'static',
    description: 'A modern website based on your request',
    files: [
      {
        path: 'index.html',
        content: createIndexHTML('business')
      }
    ]
  };
}

// Helper functions to create HTML content
function createIndexHTML(type) {
  const titles = {
    startup: 'Innovative Startup Solutions',
    portfolio: 'Creative Portfolio',
    restaurant: 'Delicious Dining Experience',
    ecommerce: 'Premium Online Store',
    business: 'Professional Business Solutions'
  };
  
  const descriptions = {
    startup: 'We provide cutting-edge technology solutions to help your business grow and succeed in the digital age.',
    portfolio: 'Showcasing creative work and innovative projects that demonstrate expertise and passion.',
    restaurant: 'Experience exceptional cuisine in a warm and welcoming atmosphere.',
    ecommerce: 'Discover quality products with seamless shopping experience and fast delivery.',
    business: 'Professional services tailored to meet your business needs and drive success.'
  };
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titles[type]}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="text-2xl font-bold text-blue-600">${titles[type].split(' ')[0]}</div>
                <div class="hidden md:flex space-x-8">
                    <a href="index.html" class="text-gray-700 hover:text-blue-600">Home</a>
                    <a href="about.html" class="text-gray-700 hover:text-blue-600">About</a>
                    <a href="services.html" class="text-gray-700 hover:text-blue-600">Services</a>
                    <a href="portfolio.html" class="text-gray-700 hover:text-blue-600">Portfolio</a>
                    <a href="contact.html" class="text-gray-700 hover:text-blue-600">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h1 class="text-5xl font-bold mb-6">${titles[type]}</h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto">${descriptions[type]}</p>
            <a href="contact.html" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">Get Started</a>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center p-6 bg-white rounded-lg shadow-md">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Fast Performance</h3>
                    <p class="text-gray-600">Lightning-fast loading times and smooth user experience.</p>
                </div>
                <div class="text-center p-6 bg-white rounded-lg shadow-md">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Quality Assured</h3>
                    <p class="text-gray-600">Built with the latest technologies and best practices.</p>
                </div>
                <div class="text-center p-6 bg-white rounded-lg shadow-md">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Mobile First</h3>
                    <p class="text-gray-600">Optimized for all devices and screen sizes.</p>
                </div>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>`;
}

function createAboutHTML(type) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - ${type.charAt(0).toUpperCase() + type.slice(1)}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <!-- Navigation (same as index.html) -->
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="text-2xl font-bold text-blue-600">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
                <div class="hidden md:flex space-x-8">
                    <a href="index.html" class="text-gray-700 hover:text-blue-600">Home</a>
                    <a href="about.html" class="text-gray-700 hover:text-blue-600">About</a>
                    <a href="services.html" class="text-gray-700 hover:text-blue-600">Services</a>
                    <a href="portfolio.html" class="text-gray-700 hover:text-blue-600">Portfolio</a>
                    <a href="contact.html" class="text-gray-700 hover:text-blue-600">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
            <h1 class="text-4xl font-bold text-center mb-12">About Us</h1>
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-2xl font-semibold mb-4">Our Story</h2>
                    <p class="text-gray-600 mb-6">We are passionate about delivering exceptional value to our clients through innovative solutions and dedicated service.</p>
                    <p class="text-gray-600 mb-6">Founded with a vision to transform the industry, we've grown from a small startup to a trusted partner for businesses worldwide.</p>
                    <div class="flex space-x-4">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-blue-600">100+</div>
                            <div class="text-gray-600">Happy Clients</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-green-600">500+</div>
                            <div class="text-gray-600">Projects Completed</div>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center">
                    <h3 class="text-2xl font-semibold mb-4">Our Mission</h3>
                    <p>To empower businesses with innovative solutions that drive growth and success in the digital age.</p>
                </div>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>`;
}

function createServicesHTML(type) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services - ${type.charAt(0).toUpperCase() + type.slice(1)}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="text-2xl font-bold text-blue-600">${type.charAt(0).toUpperCase() + type.slice(1)}</title>
                <div class="hidden md:flex space-x-8">
                    <a href="index.html" class="text-gray-700 hover:text-blue-600">Home</a>
                    <a href="about.html" class="text-gray-700 hover:text-blue-600">About</a>
                    <a href="services.html" class="text-gray-700 hover:text-blue-600">Services</a>
                    <a href="portfolio.html" class="text-gray-700 hover:text-blue-600">Portfolio</a>
                    <a href="contact.html" class="text-gray-700 hover:text-blue-600">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
            <h1 class="text-4xl font-bold text-center mb-12">Our Services</h1>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Web Development</h3>
                    <p class="text-gray-600 mb-4">Custom websites and web applications built with modern technologies.</p>
                    <a href="contact.html" class="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</a>
                </div>
                <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Mobile Apps</h3>
                    <p class="text-gray-600 mb-4">Native and cross-platform mobile applications for iOS and Android.</p>
                    <a href="contact.html" class="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</a>
                </div>
                <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Digital Marketing</h3>
                    <p class="text-gray-600 mb-4">Strategic digital marketing campaigns to grow your online presence.</p>
                    <a href="contact.html" class="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</a>
                </div>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>`;
}

function createContactHTML(type) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - ${type.charAt(0).toUpperCase() + type.slice(1)}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="text-2xl font-bold text-blue-600">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
                <div class="hidden md:flex space-x-8">
                    <a href="index.html" class="text-gray-700 hover:text-blue-600">Home</a>
                    <a href="about.html" class="text-gray-700 hover:text-blue-600">About</a>
                    <a href="services.html" class="text-gray-700 hover:text-blue-600">Services</a>
                    <a href="portfolio.html" class="text-gray-700 hover:text-blue-600">Portfolio</a>
                    <a href="contact.html" class="text-gray-700 hover:text-blue-600">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <section class="py-20">
        <div class="max-w-4xl mx-auto px-4">
            <h1 class="text-4xl font-bold text-center mb-12">Contact Us</h1>
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-2xl font-semibold mb-6">Get in Touch</h2>
                    <p class="text-gray-600 mb-6">Ready to start your project? We'd love to hear from you.</p>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <span class="text-gray-600">+1 (555) 123-4567</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span class="text-gray-600">info@example.com</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span class="text-gray-600">123 Business St, City, Country</span>
                        </div>
                    </div>
                </div>
                <div>
                    <form class="space-y-6">
                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">Name</label>
                            <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name">
                        </div>
                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">Email</label>
                            <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your email">
                        </div>
                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>`;
}

function createPortfolioHTML(type) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - ${type.charAt(0).toUpperCase() + type.slice(1)}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="text-2xl font-bold text-blue-600">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
                <div class="hidden md:flex space-x-8">
                    <a href="index.html" class="text-gray-700 hover:text-blue-600">Home</a>
                    <a href="about.html" class="text-gray-700 hover:text-blue-600">About</a>
                    <a href="services.html" class="text-gray-700 hover:text-blue-600">Services</a>
                    <a href="portfolio.html" class="text-gray-700 hover:text-blue-600">Portfolio</a>
                    <a href="contact.html" class="text-gray-700 hover:text-blue-600">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
            <h1 class="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Project One</h3>
                        <p class="text-gray-600 mb-4">A modern web application built with cutting-edge technologies.</p>
                        <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">View Project →</a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <div class="h-48 bg-gradient-to-br from-green-500 to-blue-600"></div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Project Two</h3>
                        <p class="text-gray-600 mb-4">Mobile-first responsive design with exceptional user experience.</p>
                        <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">View Project →</a>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-600"></div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Project Three</h3>
                        <p class="text-gray-600 mb-4">E-commerce platform with advanced features and analytics.</p>
                        <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">View Project →</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>`;
}

function createScriptJS() {
  return `// Interactive features for the website
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.bg-white.p-8.rounded-lg.shadow-md');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Form validation for contact form
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
});`;
}

// React-specific helper functions
function createPackageJSON() {
  return `{
  "name": "react-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.4.0"
  }
}`;
}

function createReactAppJSX(type) {
  return `import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to ${type.charAt(0).toUpperCase() + type.slice(1)}</h1>
            <p className="text-xl mb-8">Professional solutions for your business needs.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;`;
}

function createReactCSS() {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}`;
}

function createReactIndexHTML() {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Website</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;
}
