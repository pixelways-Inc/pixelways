# 🚀 React + Vite Template Configuration

## 📁 Project Structure

```
react-vite-template/
├── index.html                 # Entry point
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── .eslintrc.cjs            # ESLint configuration
├── postcss.config.js        # PostCSS configuration
├── .husky/                  # Git hooks
├── .github/                 # GitHub workflows
├── public/                  # Static assets
├── src/
│   ├── main.tsx            # Application entry point
│   ├── App.tsx             # Root component
│   ├── index.css           # Global styles
│   ├── tailwind.css        # Tailwind imports
│   ├── vite-env.d.ts       # Vite type definitions
│   ├── @types/             # Type definitions
│   ├── assets/             # Images, fonts, styles
│   ├── components/         # Reusable UI components
│   │   ├── config/         # Component configuration
│   │   ├── HOC/            # Higher-order components
│   │   ├── shared/         # Shared components (Form, Label)
│   │   └── ui/             # UI component library
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── utils/              # Utility functions
│   └── styles/             # Component-specific styles
```

## 🧩 Available Components

### Core UI Components
All components are located in `src/components/ui/` and can be imported from `@Components/ui`

#### Layout Components
- **Container** - Main layout wrapper with screen type options
- **Flex** - Flexbox container with direction, justify, align options
- **Grid** - CSS Grid container with column configurations
- **Block** - Simple block element wrapper

#### Interactive Components
- **Button** - Multiple variants: default, destructive, ghost, link, outline, secondary
- **Checkbox** - Form checkbox with custom styling
- **Model** - Modal dialog with header, content, footer
- **Accordion** - Collapsible content sections
- **DropdownMenu** - Context menu with various item types
- **ContextMenu** - Right-click context menu
- **Tooltip** - Hover tooltips
- **HoverCard** - Hover-activated information cards

#### Display Components
- **Typography** - Text elements (h1-h6, p, span, strong)
- **Avatar** - User avatar with fallback
- **Badge** - Status indicators and labels
- **Breadcrumb** - Navigation breadcrumbs
- **Separator** - Visual dividers
- **Skeleton** - Loading placeholders

#### Form Components
- **Form** - Complete form system with validation
- **FormField** - Individual form field wrapper
- **FormControl** - Form input controller
- **FormLabel** - Form field labels
- **FormMessage** - Form validation messages

### Component Usage Examples

```tsx
// Import all components
import {
  Container,
  Button,
  Flex,
  Typography,
  Model,
  Accordion
} from "@Components/ui";

// Basic layout
<Container ScreenType="container" fullHeight>
  <Flex flexDirection="column" className="gap-4">
    <Typography asElement="h1" variants="primary">
      Page Title
    </Typography>
    <Button variant="default">Click Me</Button>
  </Flex>
</Container>

// Modal usage
<Model>
  <Model.Trigger asChild>
    <Button>Open Modal</Button>
  </Model.Trigger>
  <Model.Content>
    <Model.Header>
      <Model.Title>Modal Title</Model.Title>
    </Model.Header>
    <Model.Footer>
      <Model.Close asChild>
        <Button>Close</Button>
      </Model.Close>
    </Model.Footer>
  </Model.Content>
</Model>
```

## 🎨 Styling System

### Tailwind CSS
- **Utility-first** approach
- **Custom color variants** for components
- **Responsive design** utilities
- **Dark mode** support

### CSS Variables
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96%;
  --muted: 210 40% 96%;
  --accent: 210 40% 96%;
  --destructive: 0 84.2% 60.2%;
}
```

### Component Variants
- **default** - Standard appearance
- **primary** - Primary brand color
- **secondary** - Secondary brand color
- **muted** - Subtle, muted appearance
- **accent** - Accent color for highlights
- **destructive** - Error/warning states

## 🔧 Configuration Files

### TypeScript (tsconfig.json)
- **Strict mode** enabled
- **Path mapping** for clean imports
- **Modern ES features** support
- **React JSX** transformation

### ESLint (.eslintrc.cjs)
- **TypeScript** support
- **React** best practices
- **Accessibility** guidelines
- **Prettier** integration
- **Import ordering** rules

### Vite (vite.config.ts)
- **React SWC** for fast refresh
- **TypeScript** path resolution
- **PostCSS** processing
- **Build optimization**

## 📱 Responsive Design

### Breakpoints
```css
/* Tailwind default breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Container Types
- **container** - Responsive max-width container
- **full-screen** - Full viewport width

## 🌙 Theme System

### Theme Provider
```tsx
import { ThemeProvider } from "@Components/HOC/theme/theme-provider";

<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
  <App />
</ThemeProvider>
```

### Theme Options
- **light** - Light theme
- **dark** - Dark theme
- **system** - Follows system preference

## 🚀 AI Generation Guidelines

### When Creating New Pages
1. **Use existing components** from the UI library
2. **Follow the established patterns** in App.tsx
3. **Maintain consistent styling** with Tailwind classes
4. **Use proper TypeScript types** from @types
5. **Implement responsive design** with breakpoint utilities

### When Adding New Components
1. **Place in appropriate directory** (ui/, shared/, HOC/)
2. **Follow naming conventions** (PascalCase for components)
3. **Include TypeScript interfaces** for props
4. **Add to component index** for easy importing
5. **Include CSS modules** if custom styling needed

### File Organization
- **Pages** go in `src/pages/`
- **New components** go in `src/components/ui/`
- **Custom hooks** go in `src/hooks/`
- **Utility functions** go in `src/utils/`
- **Type definitions** go in `src/@types/`

### Import Patterns
```tsx
// Component imports
import { ComponentName } from "@Components/ui";

// Hook imports
import { useHookName } from "@Components/hooks";

// Type imports
import type { ComponentProps } from "@Components/ui/types";

// Utility imports
import { utilityFunction } from "@Utils/utilityName";
```

## 📋 Quick Start Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting
pnpm lint

# Format code
pnpm prettier:write

# Type checking
pnpm check-types
```

## 🔍 Search and Replace Patterns

When updating files, use these patterns for accurate line targeting:

### Adding New Imports
```tsx
// File: src/App.tsx
// Lines: 1-30 (import section)
// Add new component import
import { NewComponent } from "@Components/ui";
```

### Adding New Components
```tsx
// File: src/App.tsx
// Lines: 100-120 (component section)
// Add new component usage
<NewComponent variant="default">
  New Component Content
</NewComponent>
```

### Updating Styles
```css
/* File: src/index.css */
/* Lines: 50-70 (CSS variables) */
/* Add new CSS variable */
--new-color: 220 13% 91%;
```

This template provides a solid foundation for building React + Vite applications with consistent architecture, comprehensive UI components, and clear guidelines for AI-assisted development.
