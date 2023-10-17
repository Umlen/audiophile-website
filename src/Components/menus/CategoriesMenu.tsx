import { FunctionComponent } from 'react';
import { categories } from '@/data/categories';
import CategoriesMenuItem from './CategoriesMenuItem';
import header from '@/styles/header-and-nav.module.scss';

const CategoriesMenu: FunctionComponent = () => {
  return (
    <nav className={`lrPaddingContainer ${header.categoriesMenu}`} aria-label='categories menu'>
      {
        categories.map(category => (
          <CategoriesMenuItem 
            key={category.id}
            category={category}
          />
        ))
      }
    </nav>
  );
};

export default CategoriesMenu;