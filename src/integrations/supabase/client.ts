// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ykgbguijchgtsaolkgva.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrZ2JndWlqY2hndHNhb2xrZ3ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTQ5NTksImV4cCI6MjA2NTU5MDk1OX0.Cq011ehFr7WT0EFknsUQQF4uG186XAN1BdBlTEeTpLo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);