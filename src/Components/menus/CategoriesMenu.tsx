import { FunctionComponent } from 'react';
import { categories } from '@/data/categories';
import CategoriesMenuItem from './CategoriesMenuItem';
import stylesMenu from '@/styles/menus.module.scss';

const CategoriesMenu: FunctionComponent = () => {
  return (
    <nav 
      className={`lrPaddingContainer ${stylesMenu.categoriesMenu}`} 
      aria-label='categories menu'
    >
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
