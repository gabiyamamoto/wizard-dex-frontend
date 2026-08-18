"use client";

import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterModal from "../../components/CharacterModal/CharacterModal";
import styles from "./personagens.module.css";
import Navbar from "../../components/Navbar/Navbar";

export default function Personagens() {
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

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
      <Navbar />
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
              <CharacterCard key={personagem.id} personagem={personagem} onClick={() => setPersonagemSelecionado(personagem)}/>
            ))}
        </div>
      </section>

      {personagemSelecionado && (
        <CharacterModal 
        personagem={personagemSelecionado}
        onClose={() => setPersonagemSelecionado(null)}/>
      )}
    </main>
  );
}
