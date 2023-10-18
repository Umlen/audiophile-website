import { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import rightArrowIcon from '/public/assets/icons/icon-arrow-right.svg';

import { CategoryType } from '@/types/types';

import stylesHeader from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';

type MenuItemProps = {
  category: CategoryType;
}

const CategoriesMenuItem: FunctionComponent<MenuItemProps> = ( {category} ) => {
  const {name, image} = category;

  return (
    <div className={`borderRadius ${stylesHeader.categoriesMenuItem}`}>
      <img src={image} alt={`${name} icon`} className={stylesHeader.categoriesMenuItemImg} />
      <h6 className={typography.smallestHeader}>headphones</h6>
      <div className={stylesHeader.categoriesLinkWrapper} >
        <Link 
          href={`/${name}`} 
          className={`${typography.upperCaseBold13px} ${stylesHeader.categoriesMenuItemLink}`}
        >
          shop
        </Link>
        <Image src={rightArrowIcon} alt='decor' />
      </div>
    </div>
  );
};

export default CategoriesMenuItem;
