## Fix ReferenceError in AI Generation (August 17, 2025)

**Objective:** Resolve the `ReferenceError: prompt is not defined` error occurring in the AI generation API route when a timeout or other error occurs.

**Summary of Changes:**

-   **`app/api/ai/generate/route.js`:** Modified the `POST` function to declare `prompt` and `projectType` variables outside the `try` block. This ensures they are accessible within the `catch` block for fallback website generation, preventing the `ReferenceError`. The destructured variables inside the `try` block were renamed to `requestPrompt` and `requestProjectType` to avoid naming conflicts.