
## Centralized Footer Contact Information (August 11, 2025)

**Objective:** Ensure all footer components display consistent contact information by centralizing contact details in a single file.

**Summary of Changes:**

-   **`utility/contactInfo.js`:**
    -   Created a new file to store phone numbers, office location, and email address.
-   **`layout/Footer.js`:**
    -   Imported `contactInfo` from `utility/contactInfo.js`.
    -   Modified `Footer1`, `Footer2`, `Footer3`, `Footer4`, `Footer5`, and `Footer6` components to use contact details from `contactInfo.js` instead of hardcoded values.
