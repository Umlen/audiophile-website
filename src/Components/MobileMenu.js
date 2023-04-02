import headerStyles from '@/styles/header-and-nav.module.scss';
import CategoriesMenu from '@/Components/CategoriesMenu';

function MobileMenu() {
    return (
        <>
            <div className={headerStyles.mobileMenu}>
                <CategoriesMenu />
            </div>
            <div className={headerStyles.blackout}></div>
        </>
    );
}

export default MobileMenu;