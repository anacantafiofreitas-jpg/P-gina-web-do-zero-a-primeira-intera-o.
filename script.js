// 1. CAPTURA DOS ELEMENTOS:
// O JavaScript busca no HTML o botão de clique e o span onde fica o número de likes.
const btnLike = document.querySelector("#btn-like");
const contador = document.querySelector("#contador-likes");

// 2. CRIAÇÃO DA VARIÁVEL DE CONTROLE:
// Guardamos a quantidade inicial de curtidas (começando em 0).
let quantidadeLikes = 0;

// 3. ADICIONANDO O ESCUTADOR DE EVENTOS (EVENT LISTENER):
// Dizemos ao navegador: "Fique atento! Toda vez que o usuário CLICAR neste botão, execute a função abaixo."
btnLike.addEventListener("click", function() {
  
  // Passo A: Aumentamos a contagem somando +1 à variável.
  quantidadeLikes = quantidadeLikes + 1;
  
  // Passo B: Atualizamos o texto dentro da tag <span> no HTML com o novo número acumulado.
  contador.innerText = quantidadeLikes;
});