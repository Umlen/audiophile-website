import { type FunctionComponent } from 'react';
import { categories } from '@/data/categories';
import WhiteLink from '../ui/WhiteLink';
import stylesMenu from '@/styles/menus.module.scss';

const DesktopMenu: FunctionComponent = () => {
  return (
    <nav className={stylesMenu.desktopMenu} aria-label="main menu">
      <WhiteLink href="/" text="home" />
      <>
        {categories.map((category) => (
          <WhiteLink
            key={category.id}
            href={`/${category.name}`}
            text={category.name}
          />
        ))}
      </>
    </nav>
  );
};

export default DesktopMenu;
