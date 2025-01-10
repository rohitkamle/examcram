import { supabase } from './services/supabase';

export const fetchCategories = async () => {
  const { data, error } = await supabase.from('categories').select('*');
  if (error) throw new Error(error.message);
  return data;
};
