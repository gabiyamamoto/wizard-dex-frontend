import styles from './sobre.module.css';
import Image from 'next/image';

export default function Sobre() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.label}>SOBRE O PROJETO</span>
          <h1>Informações do  Projeto</h1>
        </div>

        <div className={styles.info}>
          <div className={styles.item}>
            <span>Turma</span>
            <p>2TDS1</p>
          </div>

          <div className={styles.item}>
            <span>Curso</span>
            <p> Desenvolvimento de Sistemas</p>
          </div>

          <div className={styles.item}>
            <span>Professores</span>
            <div className={styles.professor}>
              <p>Marcelo Carboni</p>
              <Image
              src='/images/foto-marcelo.jpg'
              alt='Marcelo Carboni'
              width={60}
              height={60}
              />
            </div>

            <div className={styles.professor}>
              <p>Thiago Ferreira</p>
              <Image
              src='/images/foto-thiago.jpg'
              alt='Thiago Ferreira'
              width={60}
              height={60}
              />
            </div>
        
          </div>

          <div className={styles.item}>
            <span>Integrantes</span>
            <div className={styles.integrantes}>
              <p>Gabriela Emi Yamamoto</p>
              <Image
              src='/images/foto-gabi.png'
              alt='Gabriela Emi Yamamoto'
              width={60}
              height={60}
              />
            </div>
            <div className={styles.integrantes}>
              <p>Julia Erlo Figueiredo de Miranda</p>
              <Image
              src='/images/foto-ju.png'
              alt='Julia Erlo Figueiredo de Miranda'
              width={60}
              height={60}
              />
            </div>
        
          </div>
        </div>
      </div>
    </main>
  )
}
