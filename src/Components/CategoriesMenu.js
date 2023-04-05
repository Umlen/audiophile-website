import Link from 'next/link';
import Image from 'next/image';

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';

import thumbHeadphones from '/public/assets/categories-menu/thumbnail-headphones.png';
import thumbSpeakers from '/public/assets/categories-menu/thumbnail-speakers.png';
import thumbEarphones from '/public/assets/categories-menu/thumbnail-earphones.png';
import rightArrowIcon from '/public/assets/icons/icon-arrow-right.svg';

function CategoriesMenu() {
    return (
        <nav className={`lrPaddingContainer ${header.categoriesMenu}`} aria-label='categories menu'>
            <div className={`borderRadius ${header.categoriesMenuItem}`}>
                <Image src={thumbHeadphones} alt='headphones icon' className={header.categoriesMenuItemImg} />
                <h6 className={typography.smallestHeader}>headphones</h6>
                <div className={header.categoriesLinkWrapper} >
                    <Link href='/headphones' className={`${typography.upperCaseBold13px} ${header.categoriesMenuItemLink}`}>
                        shop
                    </Link>
                    <Image src={rightArrowIcon} alt='decor' />
                </div>
            </div>
            <div className={`borderRadius ${header.categoriesMenuItem}`}>
                <Image src={thumbSpeakers} alt='headphones icon' className={header.categoriesMenuItemImg} />
                <h6 className={typography.smallestHeader}>speakers</h6>
                <div className={header.categoriesLinkWrapper} >
                    <Link href='/' className={`${typography.upperCaseBold13px} ${header.categoriesMenuItemLink}`}>
                        shop
                    </Link>
                    <Image src={rightArrowIcon} alt='decor' />
                </div>
            </div>
            <div className={`borderRadius ${header.categoriesMenuItem}`}>
                <Image src={thumbEarphones} alt='headphones icon' className={header.categoriesMenuItemImg} />
                <h6 className={typography.smallestHeader}>earphones</h6>
                <div className={header.categoriesLinkWrapper} >
                    <Link href='/' className={`${typography.upperCaseBold13px} ${header.categoriesMenuItemLink}`}>
                        shop
                    </Link>
                    <Image src={rightArrowIcon} alt='decor' />
                </div>
            </div>
        </nav>
    );
}

export default CategoriesMenu;