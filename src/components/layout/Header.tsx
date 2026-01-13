import Link from 'next/link';
import styles from './Header.module.css';
import { Lang } from '@/i18n/types';

interface HeaderProps {
    lang: Lang;
    waitlistText?: string;
}

export const Header = ({ lang }: HeaderProps) => {
    const targetLang = lang === 'tr' ? 'en' : 'tr';
    // If target is tr, url is / (default). If target is en, url is /en
    const targetUrl = targetLang === 'tr' ? '/' : '/en';
    // Use uppercase for label
    const label = targetLang.toUpperCase();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Omnoo</div>
            <Link href={targetUrl} className={styles.langSwitch} aria-label={`Switch to ${label}`}>
                {label}
            </Link>
        </header>
    );
};
