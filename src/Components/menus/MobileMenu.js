import header from '@/styles/header-and-nav.module.scss';

import CategoriesMenu from './CategoriesMenu';

function MobileMenu() {
  return (
    <>
      <div className={header.mobileMenu}>
        <CategoriesMenu />
      </div>
      <div className='blackout'></div>
    </>
  );
}

export default MobileMenu;