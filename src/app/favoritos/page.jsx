"use client";

import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharacterModal from "../../components/CharacterModal/CharacterModal";
import styles from "./favoritos.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { getFavoritos, alternarFavorito, getPersonagensCache } from "@/utils/storage";

export default function Favoritos() {
    const [carregando, setCarregando] = useState(true);
    const [personagemSelecionado, setPersonagemSelecionado] = useState(null);
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {

        const idsFavoritos = getFavoritos();
        const todosPersonagens = getPersonagensCache();

        const personagensFavoritados = todosPersonagens.filter((personagem) => idsFavoritos.includes(personagem.id));

        setFavoritos(personagensFavoritados);
        setCarregando(false);
    }, []);

    function removerFavorito(id) {
        alternarFavorito(id);
        setFavoritos((atuais) => atuais.filter((personagem) => personagem.id !== id));
    }

    if (carregando) {
        return (
            <main className={styles.carregando}>
                <p>Carregando favoritos...</p>
            </main>
        );
    }

    return (
        <main className={styles.pagina}>
            <Navbar />

            <section className={styles.cabecalho}>
                <h1>Meus favoritos</h1>
            </section>

            {favoritos.length === 0 ? (
                <div className={styles.vazio}>
                    <p style={{fontSize: '2.5rem', marginBottom: '10px'}}>🤍</p>
                    <p>Você ainda não favoritou nenhum personagem.</p>
                    <p style={{color: "#d4a373", fontSize: "0.95", marginTop: "8px"}}>Volte para a página de personagens e marque os que você gostou!</p>
                </div>
            ) : (
                <section className={styles.secaoPersonagens}>
                    <div className={styles.gridPersonagens}>
                        {favoritos.map((personagem) => (
                            <CharacterCard
                                key={personagem.id}
                                personagem={personagem}
                                favoritado
                                onFavoritar={() => removerFavorito(personagem.id)}
                                onClick={() => setPersonagemSelecionado(personagem)}
                            />
                        ))}
                    </div>
                </section>
            )}

            {personagemSelecionado && (
                <CharacterModal
                    personagem={personagemSelecionado}
                    onClose={() => setPersonagemSelecionado(null)}
                />
            )}
        </main>
    );
}
