import Link from "next/link";
import headerStyles from '@/styles/header-and-nav.module.scss';

function DesktopMenu() {
    return (
        <nav className={headerStyles.desktopMenu} aria-label='main menu'>
            <Link href='/' className={`upperCaseBold13px whiteLink`}>
                home
            </Link>
            <Link href='/' className={`upperCaseBold13px whiteLink`}>
                headphones
            </Link>
            <Link href='/' className={`upperCaseBold13px whiteLink`}>
                speakers
            </Link>
            <Link href='/' className={`upperCaseBold13px whiteLink`}>
                earphones
            </Link>
        </nav>
    );
}

export default DesktopMenu;