import { FunctionComponent } from 'react';
import CategoriesMenu from './CategoriesMenu';
import header from '@/styles/header-and-nav.module.scss';

const MobileMenu: FunctionComponent = () => {
  return (
    <>
      <div className={header.mobileMenu}>
        <CategoriesMenu />
      </div>
      <div className='blackout'></div>
    </>
  );
};

export default MobileMenu;
