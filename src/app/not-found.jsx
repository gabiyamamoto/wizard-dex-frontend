import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <>
            <main className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>404</h1>
                    <h2 className={styles.subtitle}>Página não encontrada</h2>
                    <p className={styles.message}>Ops! Esta página que você está procurando não existe.</p>
                </div>

                <div className={styles.button}>
                    <Link href='/' className={styles.backButton}>Voltar para Home</Link>
                </div>
            </main>
        </>
    )
}
