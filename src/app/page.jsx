import Link from 'next/link';
import Image from 'next/image';
import styles from "./page.module.css";
import Navbar from "../components/Navbar/Navbar"

export default function Home() {
    return (
        <main className={styles.home}>
            <Navbar />
            <section className={styles.hero}>
                <Image src="/images/fundo.png"
                    alt="Castelo de Hogwarts"
                    fill
                    priority
                    className={styles.heroImage} />
                <div className={styles.overlay}></div>

                <div className={styles.heroContent}>
                    <p className={styles.subtitulo}>🪄 Bem-vindo à</p>

                    <h1> Wizard<span>Dex</span></h1>

                    <p className={styles.descricao}>Explore o universo mágico de Harry Potter em uma enciclopédia digital completa, reunindo informações sobre seus personagens, casas, habilidades e muito mais.</p>

                    <Link href="/personagens" className={styles.button}>Explorar personagens ✨</Link>
                </div>
            </section>

            <section className={styles.sobre}>
                <div className={styles.sectionTitulo}>
                    <h2>Sobre a WizardDex</h2>
                </div>

                <p>
                    A WizardDex é uma enciclopédia digital criada para reunir
                    informações dos personagens do universo de Harry Potter em um só
                    lugar. A aplicação consome uma API pública e transforma seus dados
                    em uma experiência visual simples, moderna e intuitiva.
                </p>
            </section>

            <section className={styles.objetivo}>
                <div className={styles.objetivoCard}>
                    <div className={styles.icon}>📖</div>

                    <div>
                        <h2>Nosso objetivo</h2>

                        <p>
                            Facilitar a exploração do mundo mágico através de uma interface
                            organizada, permitindo que os usuários encontrem rapidamente
                            informações sobre seus personagens favoritos.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.tecnologias}>
                <div className={styles.sectionTitulo}>
                    <h2>Tecnologias utilizadas</h2>
                </div>

                <div className={styles.techGrid}>
                    <div className={styles.techCard}>
                        <div className={styles.techIcon}>⚛</div>
                        <h3>React</h3>
                        <p>Utilizado na construção dos componentes e da interface.</p>
                    </div>

                    <div className={styles.techCard}>
                        <div className={styles.techIcon}>🔔</div>
                        <h3>React Toastify</h3>
                        <p>Utilizado para exibir notificações e mensagens de forma interativa.</p>
                    </div>

                    <div className={styles.techCard}>
                        <div className={styles.techIcon}>⚡</div>
                        <h3>Axios</h3>
                        <p>Utilizado para realizar as requisições à API de personagens.</p>
                    </div>

                    <div className={styles.techCard}>
                        <div className={styles.techIcon}>▲</div>
                        <h3>Next.js</h3>
                        <p>Framework utilizado para construir a aplicação web.</p>
                    </div>
                </div>
            </section>

            <section className={styles.maisSobre}>
                <p>Quer conhecer mais sobre o projeto?</p>

                <h2>Conheça a equipe da WizardDex.</h2>

                <Link href="/sobre" className={styles.button}>Sobre o projeto ℹ️</Link>
            </section>
        </main>
    );
}
