import { Link } from 'react-router-dom';
import type { Category } from '../data/types';
import './CategoryCard.css';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={`/categories/${category.slug}`} className="category-card">
      {category.imageUrl ? (
        <img src={category.imageUrl} alt={category.title} className="category-bg" loading="lazy" />
      ) : (
        <div className="category-bg-placeholder"></div>
      )}
      <div className="category-overlay"></div>
      <h3 className="category-title">{category.title}</h3>
    </Link>
  );
}
