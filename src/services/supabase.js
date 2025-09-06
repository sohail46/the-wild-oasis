import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://bdaipygcvbmslaupcggt.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkYWlweWdjdmJtc2xhdXBjZ2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3ODU2MzYsImV4cCI6MjA3MjM2MTYzNn0.lgB5IsYDBToS_qDoZofZ4oCWMQo6EhTQ07vOa8ud-xE';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
