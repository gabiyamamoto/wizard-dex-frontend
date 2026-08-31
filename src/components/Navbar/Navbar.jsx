"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from "./Navbar.module.css";
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [tema, setTema] = useState("dark");

    useEffect(() => {
        const cookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith("theme="));

        if (cookie) {
            const temaSalvo = cookie.split("=")[1];

            setTema(temaSalvo);
            document.documentElement.setAttribute("data-theme", temaSalvo)
        }
    }, []);

    function alterarTema() {
        const novoTema = tema === "dark" ? "light" : "dark";

        setTema(novoTema);
        document.documentElement.setAttribute("data-theme", novoTema);
        document.cookie = `theme=${novoTema}; path=/; max-age=31536000`
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>

                <div className={styles.containerLogo}>
                    <Image src={
                        tema === "light" 
                        ? "/images/wizarddex-logo-dark.png"
                        : "/images/wizarddex-logo.png"
                    }
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
                    
                    <Link href="/favoritos" className={styles.link}>
                        Favoritos</Link>

                    <div className={styles.tema}>
                        <button
                            onClick={() => alterarTema("light")}
                            className={`${styles.temaBotao} ${tema === "light" ? styles.selecionado : ""}`}
                        >
                            ☀️
                        </button>

                        <button
                            onClick={() => alterarTema("dark")}
                            className={`${styles.temaBotao} ${tema === "dark" ? styles.selecionado : ""}`}
                        >
                            🌙
                        </button>


                    </div>

                </div>
            </div>
        </nav>
    );
}
