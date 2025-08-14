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

// Schema for generated website files
const WebsiteSchema = z.object({
  projectType: z.enum(['react-vite', 'next', 'static']),
  files: z.array(z.object({
    path: z.string(),
    content: z.string(),
  })),
  description: z.string(),
});

export async function POST(request) {
  try {
    const { prompt, projectType = 'static' } = await request.json();
    
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    console.log('Generating website with Mistral AI:', { prompt, projectType });

    const systemPrompt = `You are an expert web developer who generates complete, functional websites based on user descriptions.

IMPORTANT: Generate a complete, working website with all necessary files. For ${projectType} projects:

${projectType === 'static' ? `
- Create index.html with complete HTML structure
- Include embedded CSS in <style> tags or separate CSS files
- Add JavaScript functionality if needed
- Use modern, responsive design
- Include proper meta tags and SEO
` : projectType === 'react-vite' ? `
- Create a complete React + Vite project structure
- Include package.json with proper dependencies
- Generate App.jsx, main.jsx, and necessary components
- Use modern React hooks and best practices
- Include index.html and vite.config.js
` : `
- Create a complete Next.js project structure
- Include package.json with Next.js dependencies
- Generate pages, components, and necessary files
- Use App Router structure
- Include proper layout and page components
`}

Make it visually appealing with:
- Modern design with good typography
- Responsive layout that works on all devices
- Professional color scheme
- Smooth animations and interactions
- Clean, semantic HTML/JSX
- Accessibility features

Return ONLY valid JSON with the exact schema requested.`;

    const result = await generateObject({
      model: mistral('codestral-latest'),
      schema: WebsiteSchema,
      system: systemPrompt,
      prompt: `Create a complete ${projectType} website: ${prompt}`,
      temperature: 0.7,
    });

    console.log('Generated website:', result.object);

    return NextResponse.json({
      success: true,
      website: result.object,
      message: 'Website generated successfully'
    });

  } catch (error) {
    console.error('Error generating website:', error);
    
    // Fallback to a simple static website if AI fails
    const fallbackWebsite = {
      projectType: 'static',
      description: `A simple website based on: ${prompt || 'user request'}`,
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
