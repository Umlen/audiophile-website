import Link from 'next/link';
import Image from 'next/image';
import headerStyles from '@/styles/header-and-nav.module.scss';
import thumbHeadphones from '/public/assets/categories-menu/thumbnail-headphones.png';
import thumbSpeakers from '/public/assets/categories-menu/thumbnail-speakers.png';
import thumbEarphones from '/public/assets/categories-menu/thumbnail-earphones.png';
import rightArrowIcon from '/public/assets/icons/icon-arrow-right.svg';

function CategoriesMenu() {
    return (
        <nav className={`lrPaddingContainer ${headerStyles.categoriesMenu}`} aria-label='categories menu'>
            <div className={`borderRadius ${headerStyles.categoriesMenuItem}`}>
                <Image src={thumbHeadphones} alt='headphones icon' className={headerStyles.categoriesMenuItemImg} />
                <h6 className='smallestHeader'>headphones</h6>
                <div className={headerStyles.categoriesLinkWrapper} >
                    <Link href='/' className={`upperCaseBold13px ${headerStyles.categoriesMenuItemLink}`}>shop</Link>
                    <Image src={rightArrowIcon} alt='decor' />
                </div>
            </div>
            <div className={`borderRadius ${headerStyles.categoriesMenuItem}`}>
                <Image src={thumbSpeakers} alt='headphones icon' className={headerStyles.categoriesMenuItemImg} />
                <h6 className='smallestHeader'>speakers</h6>
                <div className={headerStyles.categoriesLinkWrapper} >
                    <Link href='/' className={`upperCaseBold13px ${headerStyles.categoriesMenuItemLink}`}>shop</Link>
                    <Image src={rightArrowIcon} alt='decor' />
                </div>
            </div>
            <div className={`borderRadius ${headerStyles.categoriesMenuItem}`}>
                <Image src={thumbEarphones} alt='headphones icon' className={headerStyles.categoriesMenuItemImg} />
                <h6 className='smallestHeader'>earphones</h6>
                <div className={headerStyles.categoriesLinkWrapper} >
                    <Link href='/' className={`upperCaseBold13px ${headerStyles.categoriesMenuItemLink}`}>shop</Link>
                    <Image src={rightArrowIcon} alt='decor' />
                </div>
            </div>
        </nav>
    );
}

export default CategoriesMenu;