import { createClient } from '@supabase/supabase-js';

const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;
const url = 'https://cocmrlpyomggokmehadt.supabase.co';

export const supabase = createClient(url, API_KEY);
