import Image from "next/image";
import styles from "./CharacterCard.module.css";

export default function CharacterCard({ personagem, onClick }) {
  return (
    <div
      className={styles.card}
      onClick={onClick}
    >

      <button className={styles.botaoFavorito} onClick={(e) => {
        e.stopPropagation();
        onFavoritar();
      }}
        aria-label={favoritado ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        {favoritado ? "❤️" : "🤍"}
      </button>

      <div className={styles.imagemContainer}>
        {personagem.image ? (
          <Image
            src={personagem.image}
            alt={`Foto de ${personagem.name}`}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw"
            className={styles.imagem}
          />
        ) : (
          <div className={styles.semImagem}>🧙</div>
        )}
      </div>

      <div className={styles.conteudo}>
        <h2>{personagem.name}</h2>

        <p>
          <strong>Casa:</strong>
          {"  "}
          {personagem.house || "Não informado"}
        </p>

        <p>
          <strong>Ator/Atriz:</strong>
          {"  "}
          {personagem.actor || "Não informado"}
        </p>
      </div>
    </div>
  );
}
