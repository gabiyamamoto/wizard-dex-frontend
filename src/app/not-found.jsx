"use client"

import Link from 'next/link';
import styles from './not-found.module.css';
import { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("theme="));

        const tema = cookie
        ? cookie.split("=")[1]
        : "dark";

        document.documentElement.setAttribute("data-theme", tema);
    }, []);

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


