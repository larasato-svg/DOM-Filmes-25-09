// CINECLUBE — o JavaScript é todo seu.
// HTML e CSS já estão prontos; aqui ficam só a estrutura e os pontos de encaixe.

// ---------- DADOS ----------
// Formato de cada filme (categorias é um array: "estante", "box", "chegou"):
// { id: 1, titulo: "Blade Runner", ano: 1982, genero: "Cyberpunk", diretor: "Ridley Scott",
//   duracao: "1h57", categorias: ["estante"], poster: "posters/blade-runner.jpg", descricao: "..." }
const FILMS = [
];

let filtroAtual = "todos";   // "todos" | "estante" | "box" | "chegou" | "minha-lista"
let textoBusca = "";
const minhaLista = [];       // ids dos filmes favoritados

// ---------- FUNÇÕES ----------

// Decide quais filmes aparecem: categoria (.filter + .includes) + texto da busca.
// "minha-lista" é separado: usa minhaLista, não as categorias.
function filtrarFilmes() {
}

// Desenha os cards em #catalog a partir de uma lista de filmes (copie o <article class="slot"> do HTML),
// atualiza #catalog-count e mostra/esconde #catalog-message quando a lista vier vazia.
function renderCatalogo(lista) {
}

// Preenche o VCR (#selected-title, #selected-year, #selected-director, #selected-desc)
// e marca o card com a classe "selected".
function selecionarFilme(id) {
}

// Adiciona/remove o id em minhaLista, atualiza #list-count e re-renderiza se o filtro for "minha-lista".
function toggleLista(id) {
}

// ---------- EVENTOS ----------
// Menu: os botões de #menu e o botão .mylist têm data-filter. Troque a classe "on" no botão ativo.
// Busca: #search (evento "input").
// Outros botões: #btn-play, #btn-rent, #btn-mylist, #btn-rewind, #btn-eject, #btn-search.
// Avisos: #toast (tire/ponha o atributo "hidden"). Tela do VCR: #vcr-display, #vcr-counter.
