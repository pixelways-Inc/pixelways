import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateObject } from 'ai';
import { NextResponse } from 'next/server';
import { z } from 'zod';

// Configure Mistral AI (Codestral) using OpenAI-compatible provider
const mistral = createOpenAICompatible({
  name: 'mistral',
  apiKey: 'Vtgwkhm6Tzj12tWhaemsNvHhteto826z',
  baseURL: 'https://codestral.mistral.ai/v1',
});

// Schema for generated website files - Progressive generation support
const WebsiteSchema = z.object({
  projectType: z.literal('static'), // Only allow static websites
  files: z.array(z.object({
    path: z.string(),
    content: z.string(),
  })),
  description: z.string(),
  plannedPages: z.array(z.string()).optional(), // Legacy list of pages to generate next
  // New: explicit task list so AI plans all files up-front and we can track progress deterministically
  tasks: z.array(z.object({
    path: z.string(),
    title: z.string().optional(),
    status: z.enum(['pending', 'in-progress', 'done']).optional(),
  })).optional(),
  isComplete: z.boolean().optional(), // Whether all pages are generated
});

export async function POST(request) {
  let prompt = null;
  let projectType = 'static';

  try {
    const { 
      prompt: requestPrompt, 
      projectType: requestProjectType = 'static', 
      isFollowup = false, 
      existingWebsite = null,
      generateNextPage = false,
      pageToGenerate = null 
    } = await request.json();

    prompt = requestPrompt;
    projectType = requestProjectType;
    
    if (!prompt && !generateNextPage) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Only allow static project type
    if (projectType !== 'static') {
      return NextResponse.json({ 
        error: 'Project type not supported', 
        message: 'Currently only static HTML websites are supported.',
        supportedTypes: ['static']
      }, { status: 400 });
    }

    console.log('Generating HTML website with Mistral AI:', { 
      prompt, 
      projectType, 
      isFollowup, 
      generateNextPage,
      pageToGenerate,
      hasExistingWebsite: !!existingWebsite 
    });

    // Validate progressive generation requirements
  if (generateNextPage) {
      console.log(`Progressive Generation: Generating page "${pageToGenerate}"`);
      
      if (!pageToGenerate) {
        return NextResponse.json(
          { error: "pageToGenerate is required for progressive generation" },
          { status: 400 }
        );
      }
      
      if (!existingWebsite || !existingWebsite.files) {
        return NextResponse.json(
          { error: "existingWebsite is required for progressive generation" },
          { status: 400 }
        );
      }
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

💬 CHAT RESPONSE FORMAT: When responding to user requests, include action blocks to show what you're doing:
- Wrap specific actions in <action>action description</action> tags
- Examples: <action>Adding responsive navigation</action>, <action>Updating color scheme</action>, <action>Creating contact form</action>
- Use action blocks for major changes like: adding sections, modifying styles, creating pages, updating content

IMPORTANT RULES FOR MODIFICATIONS:
- Keep the same project structure and file organization
- Maintain the overall design language and branding
- Preserve any good existing functionality
- Only change what the user specifically requests
- If adding new pages/components, follow the existing patterns
- Ensure all modifications are cohesive with the existing design
`;
    }

    // Build context-aware system prompt based on generation mode
  let systemPrompt = '';
    
    if (generateNextPage && pageToGenerate && existingWebsite) {
      // Progressive generation mode - generate specific page
      // Provide progress context (what's done vs left) to avoid regeneration
      const taskSummary = existingWebsite.tasks && Array.isArray(existingWebsite.tasks)
        ? existingWebsite.tasks.map(t => `- ${t.path} [${t.status || 'pending'}]`).join('\n')
        : (existingWebsite.plannedPages || []).map(p => `- ${p} [pending]`).join('\n');

      systemPrompt = `You are generating a specific page for an existing website.

📁 EXISTING WEBSITE CONTEXT:
${existingWebsite.files.map(file => `- ${file.path}`).join('\n')}

🎯 TASK: Generate ONLY the "${pageToGenerate}" page that fits perfectly with the existing website.

CRITICAL: Match the existing website's design, navigation, and style exactly.

📋 RESPONSE FORMAT (JSON):
{
  "projectType": "static",
  "description": "Generated ${pageToGenerate} page",
  "files": [
    {"path": "${pageToGenerate}", "content": "full HTML content"}
  ],
  "tasks": ${JSON.stringify((existingWebsite.tasks || []).map(t => ({ path: t.path, title: t.title || undefined, status: t.path === pageToGenerate ? 'done' : (t.status || 'pending') }))) || '[]'},
  "isComplete": false
}

🎨 REQUIREMENTS:
- Include: <script src="https://cdn.tailwindcss.com"></script>
- Match existing navigation structure exactly
- Use same color scheme, fonts, and styling as existing pages
- Maintain consistent branding and design language
- Generate compelling, relevant content for this specific page

PROGRESS CONTEXT (what's done vs left):
${taskSummary}

Avoid regenerating files already done. Output ONLY the requested page in files and update tasks status accordingly.

Analyze the existing files and create a ${pageToGenerate} page that feels like part of the same website!`;

    } else {
      // Initial generation mode - generate homepage + plan
  systemPrompt = `You are a web developer creating the FIRST PAGE of a stunning HTML website.

${contextInfo}

🎯 TASK: ${isFollowup ? 'Modify the existing website based on user feedback.' : 'Create ONLY the homepage (index.html) and plan the remaining pages.'}

CRITICAL: ONLY static HTML + Tailwind CSS + vanilla JavaScript. No frameworks.

📋 RESPONSE FORMAT (JSON):
{
  "projectType": "static",
  "description": "Homepage and website plan",
  "files": [
    {"path": "index.html", "content": "complete homepage HTML"}
  ],
  "plannedPages": ["about.html", "contact.html"], // list other pages to generate (legacy support)
  // New: explicit TODO list to prevent duplicate/repeat generation across recursive steps
  "tasks": [
    {"path": "index.html", "title": "Homepage", "status": "done"},
    {"path": "about.html", "title": "About Page", "status": "pending"},
    {"path": "contact.html", "title": "Contact Page", "status": "pending"}
  ],
  "isComplete": false
}

🎨 REQUIREMENTS:
- Include: <script src="https://cdn.tailwindcss.com"></script>
- Mobile-first responsive design
- Modern gradients: bg-gradient-to-r from-blue-600 to-purple-600  
- Professional colors, shadows, hover effects
- Create navigation that includes links to planned pages
- Plan appropriate pages based on request:
  * Business: about, services, contact
  * Portfolio: portfolio, about, contact
  * Restaurant: menu, about, contact
  * Landing page: just contact (if needed)
- Write compelling homepage copy and strong CTAs

EXAMPLE NAV (include links to planned pages):
<nav class="bg-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between">
    <div class="text-2xl font-bold text-blue-600">Brand</div>
    <div class="hidden md:flex space-x-8">
      <a href="index.html" class="hover:text-blue-600">Home</a>
      <a href="about.html" class="hover:text-blue-600">About</a>
      <!-- Include all planned pages in nav -->
    </div>
  </div>
</nav>

Create a stunning homepage that sets the foundation for the complete website!`;
    }

    // Build context-aware prompt
    let fullPrompt = '';
    if (isFollowup && existingWebsite) {
      fullPrompt = `EXISTING HTML WEBSITE CODEBASE:

${existingWebsite.files.map(file => `=== ${file.path} ===
${file.content}

`).join('\n')}

USER REQUEST: ${prompt}

Please modify the above HTML website according to the user's request. Return the complete updated website with all files.`;
    } else {
      fullPrompt = `Create a complete multi-page static HTML website: ${prompt}`;
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

    // Handle progressive generation response
    if (generateNextPage && existingWebsite) {
      // Merge the new page with existing website
      const normalize = (p) => (p || '').trim().toLowerCase();
      const existingByPath = new Map((existingWebsite.files || []).map(f => [normalize(f.path), f]));
      const newFilesRaw = (result.object.files || []);
      // Filter to only the requested page to avoid unintended overwrites
      const newFilesFiltered = newFilesRaw.filter(f => normalize(f.path) === normalize(pageToGenerate));
      const newFiles = newFilesFiltered.length > 0 ? newFilesFiltered : newFilesRaw;

      // Upsert by path (replace existing file content if same path)
      for (const f of newFiles) {
        existingByPath.set(normalize(f.path), { path: f.path, content: f.content });
      }

      // Update tasks: mark pageToGenerate as done
      const tasks = Array.isArray(result.object.tasks) && result.object.tasks.length > 0
        ? result.object.tasks
        : (existingWebsite.tasks || (existingWebsite.plannedPages || []).map(p => ({ path: p, status: p === pageToGenerate ? 'done' : 'pending' })));
      const updatedTasks = tasks.map(t => ({
        path: t.path,
        title: t.title,
        status: normalize(t.path) === normalize(pageToGenerate) ? 'done' : (t.status || 'pending')
      }));

      const remainingTasks = updatedTasks.filter(t => (t.status || 'pending') !== 'done');

      const mergedWebsite = {
        ...existingWebsite,
        files: Array.from(existingByPath.values()),
        description: result.object.description || existingWebsite.description,
        tasks: updatedTasks,
        // Keep legacy plannedPages in sync (optional)
        plannedPages: remainingTasks.length > 0 ? remainingTasks.map(t => t.path) : [],
        isComplete: remainingTasks.length === 0
      };

      console.log('Progressive generation complete:', {
        generatedPage: pageToGenerate,
        remainingPages: mergedWebsite.plannedPages,
        isComplete: mergedWebsite.isComplete
      });

      return NextResponse.json({
        success: true,
        website: mergedWebsite,
        message: mergedWebsite.isComplete
          ? `<action>Finalizing generation</action> All tasks completed. Your website is ready!`
          : `<action>Generating ${pageToGenerate}</action> <action>Updating progress</action> Successfully created the ${pageToGenerate} page and integrated it with your website!`,
        generatedPage: pageToGenerate,
        remainingPages: mergedWebsite.plannedPages,
        isComplete: mergedWebsite.isComplete,
        status: mergedWebsite.isComplete ? 'ok' : 'in-progress',
        code: mergedWebsite.isComplete ? 200 : 202
      });
    }

    // Ensure tasks exist for deterministic recursion control
    const ensureTasks = (obj) => {
      if (Array.isArray(obj.tasks) && obj.tasks.length > 0) return obj.tasks;
      const planned = obj.plannedPages || [];
      const existingFiles = obj.files || [];
      const doneSet = new Set(existingFiles.map(f => (f.path || '').toLowerCase()));
      return [
        ...existingFiles.map(f => ({ path: f.path, title: f.path === 'index.html' ? 'Homepage' : f.path, status: 'done' })),
        ...planned.filter(p => !doneSet.has((p || '').toLowerCase())).map(p => ({ path: p, status: 'pending' }))
      ];
    };

    const websiteWithTasks = {
      ...result.object,
      tasks: ensureTasks(result.object),
      isComplete: Array.isArray(result.object.tasks)
        ? result.object.tasks.every(t => (t.status || 'pending') === 'done')
        : false
    };

    return NextResponse.json({
      success: true,
      website: websiteWithTasks,
      message: isFollowup ? 
        `<action>Updating website content</action> <action>Applying user modifications</action> I've successfully updated your website based on your request: ${websiteWithTasks.description}` :
        '<action>Planning files</action> Website generated successfully with a TODO list of files to create',
      status: websiteWithTasks.isComplete ? 'ok' : 'in-progress',
      code: websiteWithTasks.isComplete ? 200 : 201
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

// Simplified fallback website creation function
function createFallbackWebsite(prompt, projectType) {
  const siteName = prompt.split(' ').slice(0, 3).join(' ') || 'AI Generated Website';
  
  return {
    projectType: 'static',
    description: `A modern website: ${siteName}`,
    files: [
      {
        path: 'index.html',
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${siteName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h1 class="text-5xl font-bold mb-6">${siteName}</h1>
            <p class="text-xl mb-8 max-w-3xl mx-auto">This is a beautiful AI-generated website based on your request.</p>
            <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">Get Started</button>
        </div>
    </section>
    
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-8">Welcome to Your Website</h2>
            <p class="text-gray-600 mb-8">The AI service created this beautiful page for you. The full website generation is in progress.</p>
        </div>
    </section>

    <script>
        // Smooth animations
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('section');
            elements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    el.style.transition = 'all 0.6s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });
    </script>
</body>
</html>`
      }
    ]
  };
}
