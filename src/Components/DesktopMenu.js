import Link from "next/link";

import header from '@/styles/header-and-nav.module.scss';
import typography from '@/styles/typography.module.scss';

function DesktopMenu() {
    return (
        <nav className={header.desktopMenu} aria-label='main menu'>
            <Link href='/' className={`whiteLink ${typography.upperCaseBold13px}`}>
                home
            </Link>
            <Link href='/headphones' className={`whiteLink ${typography.upperCaseBold13px}`}>
                headphones
            </Link>
            <Link href='/speakers' className={`whiteLink ${typography.upperCaseBold13px}`}>
                speakers
            </Link>
            <Link href='/earphones' className={`whiteLink ${typography.upperCaseBold13px}`}>
                earphones
            </Link>
        </nav>
    );
}

export default DesktopMenu;