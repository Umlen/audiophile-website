import Link from 'next/link';
import Image from 'next/image';
import { type FunctionComponent } from 'react';
import { type CategoryType } from '@/types/types';
import rightArrowIcon from 'public/assets/icons/icon-arrow-right.svg';

import typography from '@/styles/typography.module.scss';
import stylesMenu from '@/styles/menus.module.scss';

interface MenuItemProps {
  category: CategoryType;
}

const CategoriesMenuItem: FunctionComponent<MenuItemProps> = ({ category }) => {
  const { name, image } = category;

  return (
    <div className={`borderRadius ${stylesMenu.categoriesMenuItem}`}>
      <img
        src={image}
        alt={`${name} icon`}
        className={stylesMenu.categoriesMenuItemImg}
      />
      <h6 className={typography.smallestHeader}>{name}</h6>
      <div className={stylesMenu.categoriesLinkWrapper}>
        <Link
          href={`/${name}`}
          className={`${typography.upperCaseBold13px} ${stylesMenu.categoriesMenuItemLink}`}
        >
          shop
        </Link>
        <Image src={rightArrowIcon} alt="decor" />
      </div>
    </div>
  );
};

export default CategoriesMenuItem;
