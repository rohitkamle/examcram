import { useEffect, useState } from 'react';
import { fetchCategories } from '../services/api';

const CategoriesPage = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="categories-page">
      <h1>Select a Category</h1>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category)}
          className="category-button"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
export default CategoriesPage;
