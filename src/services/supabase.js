import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://klnjbkbyvuctxohyhblf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtsbmpia2J5dnVjdHhvaHloYmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzNTQyNzcsImV4cCI6MjA1MDkzMDI3N30.lADmBZqbiv0FZJY9d6pYHcEYqIYD-IL9h9_fnXwjRYg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
