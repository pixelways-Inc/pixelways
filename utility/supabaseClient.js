import { createClient } from '@supabase/supabase-js';

// Ensure these environment variables are set in your .env.local file
const supabaseUrl = "https://dlunpilhklsgvkegnnlp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsdW5waWxoa2xzZ3ZrZWdubmxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwNTA0MTksImV4cCI6MjA3MDYyNjQxOX0.rhLN_bhvH9IWPkyHiohrOQbY9D34RSeSLzURhAyZPds";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
