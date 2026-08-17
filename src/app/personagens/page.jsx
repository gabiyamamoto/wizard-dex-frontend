"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./personagens.module.css";

export default function Personagens() {
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarPersonagens() {
      try {
        const resposta = await fetch(
          "https://hp-api.onrender.com/api/characters",
        );

        const dados = await resposta.json();

        setPersonagens(dados);
      } catch (erro) {
        console.log("Erro ao buscar personagens:", erro);
      } finally {
        setCarregando(false);
      }
    }

    buscarPersonagens();
  }, []);

  if (carregando) {
    return (
      <main className={styles.carregando}>
        <p>Carregando personagens...</p>
      </main>
    );
  }

  return (
    <main className={styles.pagina}>
      <section className={styles.cabecalho}>
        <p className={styles.subtitulo}>O mundo mágico</p>

        <h1>Personagens</h1>

        <p className={styles.descricao}>
          Conheça os personagens do universo de Harry Potter.
        </p>
      </section>

      <section className={styles.secaoPersonagens}>
        <div className={styles.gridPersonagens}>
            {personagens.map((personagem) => (
                <Link
                href={`/personagens/${personagem.id}`}
                className={styles.card}              
                key={personagem.id}
                >
                    <div className={styles.imagemContainer}>
                        {personagem.image ? (
                            <Image src={personagem.image}
                            alt={`Foto de ${personagem.name}`}
                            fill
                            sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
                            className={styles.imagem}
                            />
                        ) : (
                            <div className={styles.semImagem}>
                                🧙
                            </div>
                        )}
                    </div>

                    <div className={styles.conteudoCard}>
                        <h2>{personagem.name}</h2>

                        <p>
                            <strong>Casa:</strong>{"  "}
                            {personagem.house || "Não informado"}
                        </p>

                        <p>
                            <strong>Ator/Atriz:</strong>{"  "}
                            {personagem.actor || "Não informado"}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
