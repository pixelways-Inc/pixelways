
## Replace Environment Variables with Hardcoded Supabase Keys (August 13, 2025)

**Objective:** Replace environment variables for Supabase URL and anonymous key with hardcoded values as specified in `supabase.html`.

**Summary of Changes:**

-   **`utility/supabaseClient.js`:** Replaced `process.env.NEXT_PUBLIC_SUPABASE_URL` and `process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY` with the hardcoded Supabase URL and anonymous key from `supabase.html`.
-   **`app/client-intake/page.js`:** Replaced `process.env.NEXT_PUBLIC_SUPABASE_URL` with the hardcoded Supabase URL for constructing public file URLs.

**Note:** This change hardcodes sensitive API keys directly into the codebase, which is generally not a recommended security practice for production environments. Environment variables are typically preferred for managing such credentials.
