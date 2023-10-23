import { FunctionComponent } from 'react';
import CategoriesMenu from './CategoriesMenu';
import stylesMenu from '@/styles/menus.module.scss';

const MobileMenu: FunctionComponent = () => {
  return (
    <>
      <div className={stylesMenu.mobileMenu}>
        <CategoriesMenu />
      </div>
      <div className='blackout'></div>
    </>
  );
};

export default MobileMenu;
