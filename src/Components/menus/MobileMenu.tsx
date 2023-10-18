import { FunctionComponent } from 'react';
import CategoriesMenu from './CategoriesMenu';
import stylesHeader from '@/styles/header-and-nav.module.scss';

const MobileMenu: FunctionComponent = () => {
  return (
    <>
      <div className={stylesHeader.mobileMenu}>
        <CategoriesMenu />
      </div>
      <div className='blackout'></div>
    </>
  );
};

export default MobileMenu;
