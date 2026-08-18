"use client";

import Image from "next/image";
import styles from "./CharacterModal.module.css";

export default function CharacterModal({ personagem, onClose }) {
  if (!personagem) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.fechar}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          x
        </button>

        <div className={styles.imagemContainer}>
          {personagem.image ? (
            <Image
              src={personagem.image}
              alt={`Foto de ${personagem.name}`}
              fill
              className={styles.imagem}
              sizes="280px"
            />
          ) : (
            <div className={styles.semImagem}>🧙</div>
          )}
          </div>
            <div className={styles.conteudo}>
                <h2>{personagem.name}</h2>
                <p>
                    <strong>Casa: </strong>{""}
                    {personagem.house || "Não informado."}
                </p>
                <p>
                    <strong>Espécie: </strong>{""}
                    {personagem.species || "Não informado."}
                </p>
                <p>
                    <strong>Data de nascimento: </strong>{""}
                    {personagem.dateOfBirth || "Não informado."}
                </p>
                <p>
                    <strong>Cor dos olhos: </strong>{""}
                    {personagem.eyeColour || "Não informado."}
                </p>
                <p>
                    <strong>Cor do cabelo: </strong>{""}
                    {personagem.hairColour || "Não informado."}
                </p>
                <p>
                    <strong>Ator/ Atriz: </strong>{""}
                    {personagem.actor || "Não informado."}
                </p>
                <p>
                    <strong>Situação: </strong>{""}
                    {personagem.alive ? "Vivo ❤️" : "Morto 🖤"}
                </p>
            </div>

      </div>
    </div>
  );
}