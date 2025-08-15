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
    const { prompt, projectType = 'static', isFollowup = false, existingWebsite = null } = await request.json();
    
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    console.log('Generating website with Mistral AI:', { prompt, projectType, isFollowup, hasExistingWebsite: !!existingWebsite });

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
  "files": [
    {
      "path": "index.html",
      "content": "full HTML content here"
    },
    {
      "path": "style.css", 
      "content": "CSS content here (optional)"
    }
  ]
}

🚀 DESIGN PRINCIPLES FOR ALL PROJECTS:

1. **USE TAILWIND CSS VIA CDN** - Always include Tailwind CSS CDN in HTML head:
   <script src="https://cdn.tailwindcss.com"></script>

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

- Generate EXACTLY 5 separate HTML files (NOT single page with sections)
- MANDATORY FILES: index.html, about.html, services.html, contact.html, portfolio.html
- Each file must be a complete standalone HTML page with full navigation
- Use Tailwind CSS for ALL styling (no custom CSS files unless absolutely necessary)
- ALL pages must include IDENTICAL navigation linking to other HTML files
- Include interactive JavaScript for smooth user experience

🔗 CRITICAL NAVIGATION REQUIREMENTS:
- Navigation must use relative file links: href="about.html" NOT href="#about"
- Each page must have IDENTICAL navigation structure in header AND footer
- Navigation links must point to actual HTML files, not anchor sections
- Footer must also contain links to all other pages

📝 MANDATORY NAVIGATION STRUCTURE (include in ALL files):
<nav class="navbar">
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
  </ul>
</nav>

🚫 STRICTLY FORBIDDEN:
- Single-page applications with anchor links (#section)
- Missing navigation between pages
- Inconsistent navigation across files
- Only generating one HTML file

📱 MOBILE-RESPONSIVE STRUCTURE:
- Hero sections with gradient backgrounds
- Grid layouts for services/portfolio
- Responsive navigation (mobile hamburger menu)
- Contact forms with validation
- Footer with social links

🎨 VISUAL ELEMENTS TO INCLUDE:
- Gradient hero backgrounds
- Card-based layouts with hover effects
- Professional color schemes (use Tailwind colors)
- Icons from Heroicons or similar
- Smooth scroll behavior
- Loading animations

📁 MANDATORY FILE STRUCTURE (must generate ALL files):
* index.html - Stunning homepage with hero, features, CTA + navigation to all pages
* about.html - Professional about page with team/story + navigation to all pages  
* services.html - Service cards with hover effects + navigation to all pages
* portfolio.html - Project showcase with filters + navigation to all pages
* contact.html - Beautiful contact form + info + navigation to all pages
* script.js - Interactive features and animations (shared across all pages)

⚠️ VALIDATION: Your response must contain exactly 5 HTML files with proper cross-linking navigation

🔧 TECHNICAL REQUIREMENTS:
- SEO optimized with proper meta tags
- Fast loading and performance optimized
- Accessibility compliant (WCAG)
- Cross-browser compatible
- Clean, semantic HTML structure

💡 EXAMPLE: If generating a business website, you MUST create:
1. index.html (with <a href="about.html">About</a> links)
2. about.html (with <a href="services.html">Services</a> links)  
3. services.html (with <a href="contact.html">Contact</a> links)
4. contact.html (with <a href="portfolio.html">Portfolio</a> links)
5. portfolio.html (with <a href="index.html">Home</a> links)

Each file must be complete with navigation to ALL other files.
` : projectType === 'react-vite' ? `
⚛️ REACT + VITE REQUIREMENTS:

- Create a modern React SPA with stunning UI components
- Use Tailwind CSS for all styling
- Include React Router for smooth navigation
- Implement state management for interactive features
- Add animations with Framer Motion

📦 DEPENDENCIES TO INCLUDE:
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.16.0",
    "framer-motion": "^10.16.4"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.3",
    "vite": "^4.4.5",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31"
  }
}

🎨 COMPONENT STRUCTURE:
* App.jsx - Main app with routing
* components/Navbar.jsx - Responsive navigation
* components/Hero.jsx - Stunning hero section
* components/Features.jsx - Feature cards
* pages/Home.jsx, About.jsx, Contact.jsx
* tailwind.config.js - Tailwind configuration

🔧 MODERN FEATURES:
- Component-based architecture
- Smooth page transitions
- Interactive UI elements
- State-driven animations
- Responsive design system
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
    } else {
      fullPrompt = `Create a complete ${projectType} website: ${prompt}`;
    }

    const result = await generateObject({
      model: mistral('codestral-latest'),
      schema: WebsiteSchema,
      system: systemPrompt,
      prompt: fullPrompt,
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
    
    // Fallback to a multi-page static website if AI fails
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
