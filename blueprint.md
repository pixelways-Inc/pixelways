-   **`components/ChatInterfaceLanding.js` (Dark Theme Implementation):**
    -   Modified the `className` of the main `div` (`lovable-container`) to conditionally apply a `dark-mode` class based on the `isDark` state from `ThemeContext`.
    -   Added new CSS rules within the component's `<style jsx>` block, targeting elements under the `.lovable-container.dark-mode` selector. These rules apply dark theme styling (backgrounds, text colors, borders, shadows) to the main container, theme toggle, titles, chat container, buttons, input fields, generating overlay, and suggestion pills.

-   **`components/PixelwaysAdModal.js` (Ad Display Interval):**
    -   Increased the ad display interval from 5 minutes to 10 minutes by changing the default value of the `frequency` prop to `600000`.