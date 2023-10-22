import { FunctionComponent } from 'react';
import { categories } from '@/data/categories';
import WhiteLink from '../ui/WhiteLink';
import stylesHeader from '@/styles/header-and-nav.module.scss';

const DesktopMenu: FunctionComponent = () => {
  return (
    <nav className={stylesHeader.desktopMenu} aria-label='main menu'>
      <WhiteLink href='/' text='home' />
      <>
        {
          categories.map(category => (
            <WhiteLink 
              key={category.id}
              href={`/${category.name}`}
              text={category.name}
            />
          ))
        }
      </>
    </nav>
  );
};

export default DesktopMenu;
