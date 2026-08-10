import Link from 'next/link';
import Image from 'next/image';
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>

                <div className={styles.containerLogo}>
                    <Image src="/images/wizarddex_logo.png"
                        alt="Logo WizardDex"
                        fill
                        priority
                        className={styles.logo} />
                </div>

                <div className={styles.links}>
                    <Link href="/" className={styles.link}>
                        Início</Link>

                    <Link href="/personagens" className={styles.link}>
                        Personagens</Link>

                    <Link href="/sobre" className={styles.link}>
                        Sobre</Link>
                </div>
            </div>
        </nav>
    );
}
