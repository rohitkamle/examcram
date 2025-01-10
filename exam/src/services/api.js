import supabase from './supabase';

export const fetchCategories = async () => {
    const { data, error } = await supabase.from('categories').select('*');
    if (error) throw new Error(error.message);
    return data;
};

export const fetchQuestions = async (categoryId) => {
    const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('category_id', categoryId)
        .order('id', { ascending: true });
    if (error) throw new Error(error.message);
    return data;
};
