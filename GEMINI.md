# Gemini Agent Guidelines for Pixelways Solutions Codebase

This document outlines the conventions and steps to follow when working on the Pixelways Solutions codebase. Adhering to these guidelines ensures consistency, maintainability, and efficient collaboration.

## 1. General Principles

*   **Context is Key:** Always read relevant files (e.g., component files, associated CSS, `README.md`, `blueprint.md`) to understand existing patterns and conventions before making changes.
*   **Prioritize User Experience:** Focus on delivering visually appealing, functional, and user-friendly solutions.
*   **Modularity:** When making changes, consider if they can be applied in a modular way (e.g., using CSS variables for theming, creating reusable components).

## 2. Documentation and Change Log (`blueprint.md`)

*   **Always Update `blueprint.md`:** After *every* significant code modification, update the `blueprint.md` file located in the root directory.
*   **Format:** Add a new section with the current date and a clear, concise summary of the changes made, including:
    *   **Objective:** What was the goal of the change?
    *   **Summary of Changes:** List the files modified and a brief description of what was changed within each file.

## 3. Git Workflow

To manage changes and ensure proper version control, follow this specific Git workflow:

1.  **Stage Changes:** After modifying files, stage all relevant changes using: `git add .`
2.  **Prepare Commit Message:** Update the `temp_commit.bat` file (located in the root directory) with your desired commit message. The commit message should  only be single line and be descriptive and follow a conventional commit style (e.g., `FEAT: Add new feature`, `FIX: Resolve bug`, `CHORE: Refactor code`).
3.  **Commit Changes:** Execute the `temp_commit.bat` file to commit your staged changes: `temp_commit.bat`
    *   *Note:* This method is used to bypass potential shell quoting issues on Windows for commit messages.
4.  **Push Changes:** After a successful commit, push your changes to the remote repository: `git push`

## 4. Theming (Dark Theme Implementation)

*   **CSS Variables:** The site uses CSS variables for theming. These are defined in `public/assets/css/style.css` (default/light theme and `body.dark-theme` overrides).
*   **Global Overrides:** For applying dark theme styles, prefer adding new CSS rules to `app/globals.css` that target elements within the `body.dark-theme` context. This ensures overrides are applied correctly without directly modifying the large `style.css` file.
*   **Key Variables:** Utilize the following CSS variables for consistent theming:
    *   `--main-bg-color`: Primary background color.
    *   `--main-text-color`: Primary text color.
    *   `--heading-color`: Color for headings (h1-h6).
    *   `--secondary-bg-color`: Secondary background color (e.g., for header top bar, icons).
    *   `--global-border-color`: Border color.

## 5. Image API Usage

*   **API Endpoint:** Use `https://api.a0.dev/assets/image` for dynamic image generation.
*   **Parameters:** Always include `text`, `aspect`, and `seed` parameters to generate relevant and consistent images.
    *   `text`: Craft descriptive text that reflects the content or purpose of the image (e.g., `Pixelways+Solution+IT+Consultancy+Digital+Solutions`).
    *   `aspect`: Specify the aspect ratio (e.g., `16:9`, `1:1`).
    *   `seed`: Use a fixed seed for consistent image generation across builds.

## 6. Component-Specific Adjustments

*   When adapting components or pages to the dark theme, systematically go through all visual elements (backgrounds, text, borders, icons, form elements, etc.) and apply the appropriate CSS variables or overrides in `app/globals.css`.
*   For icons, ensure their color adapts to the dark theme (e.g., becoming white on a dark background).

By following these guidelines, you will contribute effectively to the Pixelways Solutions codebase.

## Current Development Focus

*   **`blueprint_lite.md`:** A new, simplified blueprint file has been introduced for streamlined documentation of minor changes or specific feature developments.
*   **Login Feature Development:** The current primary task involves developing the login functionality for the application.