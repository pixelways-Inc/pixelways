import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from './supabaseConstants';

let supabaseInstance = null;

export const getSupabase = () => {
  if (supabaseInstance) return supabaseInstance;
  
  supabaseInstance = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);
  return supabaseInstance;
};

// Legacy export for backward compatibility
export const supabase = getSupabase();
