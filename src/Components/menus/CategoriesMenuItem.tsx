import { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import rightArrowIcon from '/public/assets/icons/icon-arrow-right.svg';

import { CategoryType } from '@/types/types';

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';

type MenuItemProps = {
  category: CategoryType;
}

const CategoriesMenuItem: FunctionComponent<MenuItemProps> = ( {category} ) => {
  const {name, image} = category;

  return (
    <div className={`borderRadius ${header.categoriesMenuItem}`}>
      <img src={image} alt={`${name} icon`} className={header.categoriesMenuItemImg}/>
      <h6 className={typography.smallestHeader}>headphones</h6>
      <div className={header.categoriesLinkWrapper} >
        <Link href={`/${name}`} className={`${typography.upperCaseBold13px} ${header.categoriesMenuItemLink}`}>
          shop
        </Link>
        <Image src={rightArrowIcon} alt='decor' />
      </div>
    </div>
  );
};

export default CategoriesMenuItem;
