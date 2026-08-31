import Personagens from "@/app/personagens/page";

export function getCookie(nome) {
    if (typeof document === "undefined") return null;
    const linha = document.cookie
        .split("; ")
        .find((linha) => linha.startsWith(`${nome}=`));
    return linha ? linha.split("=")[1] : null;
}

export function setCookie(nome, valor, dias = 365) {
    if (typeof document === "undefined") return;

    const expia = new Date();
    expira.setDate(expira.getDate() + dias);
    document.cookie = `${nome}=${valor}; expires=${expira.toUTCString()}; path=/`;
}

const CHAVE_FAVORITOS = "favoritos";

export function getFavoritos() {
    if (typeof window === "undefined") return [];
    const dados = sessionStorage.getItem(CHAVE_FAVORITOS);
    return dados ? JSON.parse(dados) : [];
}

export function alternarFavorito(id) {
    const atuais = getFavoritos();
    const novos = atuais.includes(id)
        ? atuais.filter((favId) => favId !== id)
        : [...atuais, id];
    sessionStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(novos));
    return novos;
}


const CHAVE_PERSONAGENS = "personagens";

export function salvarPersonagensCache(personagens) {
    localStorage.setItem(CHAVE_PERSONAGENS, JSON.stringify(Personagens));
}

export function getPersonagensCache() {
    if (typeof window === "undefined") return [];
    const dados = localStorage.getItem(CHAVE_PERSONAGENS);
    return dados ? JSON.parse(dados) : [];
}