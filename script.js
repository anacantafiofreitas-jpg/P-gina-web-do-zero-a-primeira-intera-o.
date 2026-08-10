// 1. Seleciona o botão no HTML
const btnVoltarTopo = document.querySelector(".btn-voltar-topo");

// 2. Adiciona o evento de clique
btnVoltarTopo.addEventListener("click", function() {
  window.scrollTo(0, 0); // Leva a página para a posição (x: 0, y: 0)
});