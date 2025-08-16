# 🧩 Component Registry

## 📍 File Locations and Import Paths

### Core UI Components (`src/components/ui/`)

#### Layout Components

**Container** - `src/components/ui/Container/Container.tsx`
```tsx
import { Container } from "@Components/ui";

// Props
type ContainerProps = {
  ScreenType: "container" | "full-screen";
  fullHeight?: boolean;
  asElement?: "header" | "footer" | "nav" | "main";
  className?: string;
  border?: boolean;
};

// Usage
<Container ScreenType="container" fullHeight border>
  <div>Content</div>
</Container>
```

**Flex** - `src/components/ui/Flex/Flex.tsx`
```tsx
import { Flex } from "@Components/ui";

// Props
type FlexProps = {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  alignContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
  asElement?: "div" | "section" | "article" | "aside";
  className?: string;
};

// Usage
<Flex flexDirection="column" justifyContent="center" alignItems="center" className="gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

**Grid** - `src/components/ui/Grid/Grid.tsx`
```tsx
import { Grid } from "@Components/ui";

// Props
type GridProps = {
  columns: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  gap?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "20" | "24" | "32" | "40" | "48" | "56" | "64";
  gridLines?: boolean;
  asElement?: "div" | "section" | "article" | "aside";
  className?: string;
};

// Usage
<Grid columns="3" gap="4" gridLines>
  <div>Grid Item 1</div>
  <div>Grid Item 2</div>
  <div>Grid Item 3</div>
</Grid>
```

**Block** - `src/components/ui/Block/Block.tsx`
```tsx
import { Block } from "@Components/ui";

// Props
type BlockProps = {
  asElement?: "div" | "section" | "article" | "aside";
  className?: string;
  border?: boolean;
  BackgroundColor?: "default" | "primary" | "secondary" | "muted" | "accent" | "destructive" | "background";
};

// Usage
<Block asElement="section" className="p-4" border BackgroundColor="primary">
  <div>Block Content</div>
</Block>
```

#### Interactive Components

**Button** - `src/components/ui/Button/button.tsx`
```tsx
import { Button } from "@Components/ui";

// Props
type ButtonProps = {
  variant?: "default" | "destructive" | "ghost" | "link" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  loading?: boolean;
  withIcon?: ReactNode | string;
  dir?: "ltr" | "rtl";
  className?: string;
  children: ReactNode;
};

// Usage
<Button variant="default" size="lg" loading>
  Click Me
</Button>

<Button variant="outline" withIcon={<Plus />}>
  Add Item
</Button>
```

**Model** - `src/components/ui/Model/Model.tsx`
```tsx
import { Model } from "@Components/ui";

// Props
type ModelProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
};

// Usage
<Model>
  <Model.Trigger asChild>
    <Button>Open Modal</Button>
  </Model.Trigger>
  <Model.Content BackgroundColor="default">
    <Model.Header>
      <Model.Title>Modal Title</Model.Title>
      <Model.Description>Modal description</Model.Description>
    </Model.Header>
    <Model.Body>
      <p>Modal content goes here</p>
    </Model.Body>
    <Model.Footer>
      <Model.Close asChild>
        <Button variant="outline">Cancel</Button>
      </Model.Close>
      <Button>Confirm</Button>
    </Model.Footer>
  </Model.Content>
</Model>
```

**Accordion** - `src/components/ui/Accordion/Accordion.tsx`
```tsx
import { Accordion } from "@Components/ui";

// Props
type AccordionProps = {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: ReactNode;
  className?: string;
};

// Usage
<Accordion type="multiple">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>
      Content for section 1
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>
      Content for section 2
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

**Checkbox** - `src/components/ui/CheckBox/Checkbox.tsx`
```tsx
import { Checkbox } from "@Components/ui";

// Props
type CheckboxProps = {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  className?: string;
};

// Usage
<Checkbox 
  checked={isChecked} 
  onCheckedChange={setIsChecked}
  className="w-4 h-4"
/>
```

#### Display Components

**Typography** - `src/components/ui/Typography/Typography.tsx`
```tsx
import { Typography } from "@Components/ui";

// Props
type TypographyProps = {
  asElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "strong";
  variants?: "default" | "primary" | "secondary" | "muted" | "accent" | "destructive";
  className?: string;
  children: ReactNode;
};

// Usage
<Typography asElement="h1" variants="primary" className="text-3xl font-bold">
  Main Heading
</Typography>

<Typography asElement="p" variants="muted" className="text-lg">
  Body text content
</Typography>
```

**Avatar** - `src/components/ui/Avatar/Avatar.tsx`
```tsx
import { Avatar } from "@Components/ui";

// Props
type AvatarProps = {
  className?: string;
  children: ReactNode;
};

// Usage
<Avatar>
  <Avatar.Image src="/path/to/image.jpg" alt="User avatar" />
  <Avatar.Fallback>JD</Avatar.Fallback>
</Avatar>
```

**Badge** - `src/components/ui/Badge/Badge.tsx`
```tsx
import { Badge } from "@Components/ui";

// Props
type BadgeProps = {
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
  children: ReactNode;
};

// Usage
<Badge variant="default">New</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Draft</Badge>
```

**Breadcrumb** - `src/components/ui/Breadcrumb/Breadcrumb.tsx`
```tsx
import { Breadcrumb } from "@Components/ui";

// Props
type BreadcrumbProps = {
  separator?: ReactNode;
  children: ReactNode;
};

// Usage
<Breadcrumb separator="/">
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page>Current Page</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb>
```

#### Form Components

**Form** - `src/components/shared/Form/Form.tsx`
```tsx
import { Form } from "@Components/shared/Form/Form";

// Props
type FormProps = {
  children: ReactNode;
};

// Usage
<Form>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <input {...field} type="email" />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

### HOC Components (`src/components/HOC/`)

**ThemeProvider** - `src/components/HOC/theme/theme-provider.tsx`
```tsx
import { ThemeProvider } from "@Components/HOC/theme/theme-provider";

// Props
type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: "light" | "dark" | "system";
  storageKey?: string;
};

// Usage
<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
  <App />
</ThemeProvider>
```

### Custom Hooks (`src/components/hooks/`)

**useTheme** - `src/components/hooks/useTheme/useTheme.ts`
```tsx
import { useTheme } from "@Components/hooks";

// Returns
type UseThemeReturn = {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
};

// Usage
const { theme, setTheme } = useTheme();

// Toggle theme
const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};
```

## 🔧 Utility Functions (`src/utils/`)

**className utility** - `src/utils/className/index.ts`
```tsx
import { cn } from "@Utils/className";

// Function signature
const cn = (...inputs: ClassValue[]): string;

// Usage
const buttonClasses = cn(
  "base-button",
  variant === "destructive" && "destructive-button",
  size === "lg" && "button-large-size",
  className
);
```

## 📱 Responsive Utilities

### Tailwind Breakpoint Classes
```tsx
// Responsive design utilities
<div className="
  w-full          // Default: full width
  md:w-1/2       // Medium+: half width
  lg:w-1/3       // Large+: one-third width
  xl:w-1/4       // Extra large+: quarter width
">
  Responsive content
</div>

// Container types
<Container ScreenType="container">     // Max-width container
<Container ScreenType="full-screen">   // Full viewport width
```

## 🎨 Color System

### CSS Variables (defined in `src/tailwind.css`)
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}
```

## 📋 Import Patterns

### Standard Component Imports
```tsx
// Import multiple components
import {
  Container,
  Button,
  Flex,
  Typography,
  Model,
  Accordion
} from "@Components/ui";

// Import specific components
import { Button } from "@Components/ui";
import { useTheme } from "@Components/hooks";
import { cn } from "@Utils/className";
```

### Type Imports
```tsx
// Import component types
import type { ButtonProps } from "@Components/ui/Button/button";
import type { ContainerProps } from "@Components/ui/Container/Container";
import type { FlexProps } from "@Components/ui/Flex/Flex";
```

## 🚀 AI Development Guidelines

### When Creating New Pages
1. **Start with Container** as the main wrapper
2. **Use Flex or Grid** for layout structure
3. **Apply Typography** for text elements
4. **Add interactive elements** with Button, Model, etc.
5. **Maintain consistent spacing** with Tailwind gap utilities

### Component Composition Pattern
```tsx
// Standard page structure
<Container ScreenType="container" fullHeight>
  <Flex flexDirection="column" className="gap-6 p-6">
    {/* Header Section */}
    <Typography asElement="h1" variants="primary" className="text-3xl font-bold">
      Page Title
    </Typography>
    
    {/* Content Section */}
    <Flex flexDirection="column" className="gap-4">
      <Typography asElement="p" variants="muted">
        Page description and content
      </Typography>
      
      {/* Interactive Elements */}
      <Flex className="gap-3">
        <Button variant="default">Primary Action</Button>
        <Button variant="outline">Secondary Action</Button>
      </Flex>
    </Flex>
  </Flex>
</Container>
```

### File Organization for New Features
```
src/
├── pages/                    # New page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
├── components/ui/            # New UI components
│   ├── NewComponent/
│   │   ├── NewComponent.tsx
│   │   ├── index.ts
│   │   └── NewComponent.css
├── hooks/                    # New custom hooks
│   └── useNewHook.ts
└── utils/                    # New utility functions
    └── newUtility.ts
```

This registry provides complete information about all available components, their exact locations, props, and usage patterns for efficient AI-assisted development.
