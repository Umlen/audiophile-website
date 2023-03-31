import Link from "next/link";
import headerStyles from '@/styles/header.module.scss';

function MobileMenu() {
    return (
        <nav className={headerStyles.mobileMenu}>
            <Link href='/'>headphones</Link>
            <Link href='/'>speakers</Link>
            <Link href='/'>earphones</Link>
        </nav>
    );
}

export default MobileMenu;