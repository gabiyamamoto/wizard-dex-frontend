"use client";

import { useEffect, useState } from "react";
import { Pagination } from 'antd';
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterModal from "../../components/CharacterModal/CharacterModal";
import styles from "./personagens.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { getFavoritos, alternarFavorito, salvarPersonagensCache } from "@/utils/storage";

export default function Personagens() {
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalDePaginas, setTotalDePaginas] = useState(0);
  const [itensPorPagina, setItensPorPagina] = useState(20);

  useEffect(() => {

    setFavoritos(getFavoritos());

    async function buscarPersonagens() {
      try {
        const resposta = await fetch(
          "https://hp-api.onrender.com/api/characters",
        );

        const dados = await resposta.json();

        setPersonagens(dados);
        salvarPersonagensCache(dados);
      } catch (erro) {
        console.log("Erro ao buscar personagens:", erro);
      } finally {
        setCarregando(false);
      }
    }

    buscarPersonagens();
  }, []);

  function favoritar(id) {
    setFavoritos(alternarFavorito(id));
  }

  if (carregando) {
    return (
      <main className={styles.carregando}>
        <p>Carregando personagens...</p>
      </main>
    );
  }

  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;

  const personagensPagina = personagens.slice(inicio, fim);

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

      <div className={styles.controlePagina}>
        <Pagination
          className={styles.pagination}
          current={paginaAtual}
          pageSize={itensPorPagina}
          total={personagens.length}
          onChange={(pagina, tamanho) => {
            setPaginaAtual(pagina);
            setItensPorPagina(tamanho);
          }}
        />
      </div>

      <section className={styles.secaoPersonagens}>
        <div className={styles.gridPersonagens}>
          {personagensPagina.map((personagem) => (
            <CharacterCard
              key={personagem.id}
              personagem={personagem}
              favoritado={favoritos.includes(personagem.id)}
              onFavoritar={() => favoritar(personagem.id)}
              onClick={() => setPersonagemSelecionado(personagem)}
            />
          ))}
        </div>
      </section>

      {personagemSelecionado && (
        <CharacterModal
          personagem={personagemSelecionado}
          onClose={() => setPersonagemSelecionado(null)}
        />
      )}
    </main>
  );
}
