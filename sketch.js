let itens = ["Gado", "Avenida", "Curral", "Ônibus", "Cevada", "Restaurante", "Plantação", "Calçada", "Trator", "Cinema", "Tanque", "Semáforo", "Chiqueiro", "Farmácia", "Espantalho", "Feira", "Roça", "Rua", "Feno", "Prédio", "Semente", "Shopping", "Trânsito", "Colheita", "Biblioteca", "Granja", "Metrô", "Terreno", "Supermercado", "Enxada", "Academia", "Celeiro", "Semáforo", "Estação", "Estufa", "Condomínio", "Arame farpado", "Elevador", "Mangueira", "Bairro", "Trilha", "Teatro", "Foice", "Padaria", "Milho", "Garagem", "Vaca", "Concessionária", "Pasto", "Pracinha", "Milharal", "Trânsito", "Barracão", "Comércio", "Capineira", "Lan House", "Lavoura", "Banco", "Viveiro", "Garagem", "Sinaleira", "Estábulo", "Correios", "Moinho", "Trator", "Apartamento", "Estrebaria", "Riacho", "Ponto de ônibus", "Arado", "Loja", "Estacionamento", "Fazenda", "Terminal", "Chuva", "Praça", "Cavalo", "Engenho", "Escola", "Sítio", "Edifício", "Pocilga", "Riacho", "Condomínio", "Colheitadeira", "Elevador", "Sinaleira", "Terreno", "Parque", "Galinheiro", "Trânsito", "Celeiro", "Semáforo", "Bota", "Padaria", "Shopping", "Terreiro", "Biblioteca", "Trânsito", "Armazém", "Rua"];
let correto = ["Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Campo", "Cidade", "Campo", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Cidade", "Campo", "Cidade", "Campo", "Campo", "Cidade", "Campo", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Campo", "Cidade", "Campo", "Campo", "Cidade", "Campo", "Campo", "Cidade", "Campo", "Campo", "Campo", "Cidade", "Campo", "Cidade", "Campo", "Campo", "Cidade", "Campo", "Cidade", "Cidade", "Campo", "Campo", "Cidade", "Campo", "Cidade"];
let respostaAtual = 0;
let Pontuação = 0;
let respostaEscolhida = '';

function setup() {
  createCanvas(400, 400);
  background('#D3D3D3');
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Início de Jogo", width / 2, 50);
  itemShow();
}

function draw() {
  fill(0);
  textSize(30);
  textAlign(LEFT, BOTTOM);
  text("Pontuação: " + Pontuação, 10, height - 10);
}

function itemShow() {
  background('#D3D3D3');
  let item = itens[respostaAtual];
  textSize(20);
  textAlign(CENTER, CENTER);
  text("É " + item + "?", width / 2, height / 2 - 20);
  text("Pressione C para Campo ou D para Cidade", width / 2, height / 2 + 20);
}

function keyPressed() {
  if (key === 'C' || key === 'c') {
    respostaEscolhida = "Campo";
  } else if (key === 'D' || key === 'd') {
    respostaEscolhida = "Cidade";
  } else {
    return;
  }

  // Verifica a resposta
  if (respostaEscolhida === correto[respostaAtual]) {
    Pontuação++;
  }

  respostaAtual++;
  respostaEscolhida = '';

  if (respostaAtual < itens.length) {
    itemShow();
  } else {
    background('#D3D3D3');
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Fim de Jogo!", width / 2, height / 2 - 20);
    text("Pontuação Final: " + Pontuação, width / 2, height / 2 + 20);
  }
}
// Feito por Victor Jantara.c