var todasPerguntas = {
    atleta: [
        { texto: "Em que ano Curry foi escolhido no draft da NBA?", imagem: "img/atleta/linha-2009.jpg", opcoes: ["2007", "2009", "2011"], certa: 1 },
        { texto: "Qual é o time de Stephen Curry na NBA?", imagem: "img/atleta/foto.jpg", opcoes: ["Golden State Warriors", "Lakers", "Celtics"], certa: 0 },
        { texto: "Qual é o número da camisa dele?", imagem: "img/atleta/galeria-1.jpg", opcoes: ["23", "30", "11"], certa: 1 },
        { texto: "Quantos títulos da NBA ele tem?", imagem: "img/atleta/galeria-3.jpg", opcoes: ["2", "3", "4"], certa: 2 },
        { texto: "Em que faculdade ele jogou?", imagem: "img/atleta/card-6.jpg", opcoes: ["Davidson", "Duke", "Kentucky"], certa: 0 },
        { texto: "Em qual cidade ele ganhou o ouro olímpico em 2024?", imagem: "img/atleta/linha-2024.jpg", opcoes: ["Tóquio", "Paris", "Londres"], certa: 1 }
    ],
    artista: [
        { texto: "Que apelido Aretha Franklin recebeu?", imagem: "img/artista/foto.jpg", opcoes: ["Rainha do Pop", "Rainha do Soul", "Rainha do Rock"], certa: 1 },
        { texto: "Em qual cidade ela cresceu?", imagem: "img/artista/linha-1942.jpg", opcoes: ["Detroit", "Nova York", "Chicago"], certa: 0 },
        { texto: "Quem escreveu \"Respect\" originalmente?", imagem: "img/artista/card-1.jpg", opcoes: ["Aretha Franklin", "Otis Redding", "Ray Charles"], certa: 1 },
        { texto: "Em que ano ela entrou no Hall da Fama do Rock and Roll?", imagem: "img/artista/card-6.jpg", opcoes: ["1967", "1987", "2005"], certa: 1 },
        { texto: "Qual é o nome do álbum gospel ao vivo de 1972?", imagem: "img/artista/card-5.jpg", opcoes: ["Think", "Amazing Grace", "Chain of Fools"], certa: 1 },
        { texto: "Em que ano Aretha morreu?", imagem: "img/artista/linha-2018.jpg", opcoes: ["2016", "2018", "2020"], certa: 1 }
    ]
};

var perguntas = [];
var pessoaAtual = "atleta";
var atual = 0;
var pontos = 0;
var respondeu = false;

function iniciar(pessoa) {
    pessoaAtual = pessoa;
    perguntas = todasPerguntas[pessoa];
    atual = 0;
    pontos = 0;

    document.getElementById("escolha").style.display = "none";
    document.getElementById("jogo").style.display = "block";
    document.getElementById("quiz-img").style.display = "block";
    document.getElementById("resultado").classList.remove("mostrar");
    mostrarPergunta();
}

function voltar() {
    document.getElementById("jogo").style.display = "none";
    document.getElementById("escolha").style.display = "block";
}

function mostrarPergunta() {
    var p = perguntas[atual];
    respondeu = false;

    document.getElementById("contador").textContent = "Pergunta " + (atual + 1) + " de " + perguntas.length;
    var img = document.getElementById("quiz-img");
    img.src = p.imagem;
    img.classList.remove("troca");
    void img.offsetWidth;
    img.classList.add("troca");
    document.getElementById("pergunta").textContent = p.texto;
    document.getElementById("feedback").textContent = "";
    document.getElementById("proxima").classList.remove("mostrar");

    var area = document.getElementById("opcoes");
    area.innerHTML = "";

    for (var i = 0; i < p.opcoes.length; i++) {
        var botao = document.createElement("button");
        botao.className = "opcao";
        botao.textContent = p.opcoes[i];
        botao.setAttribute("onclick", "responder(" + i + ")");
        area.appendChild(botao);
    }
}

function responder(escolhida) {
    if (respondeu) {
        return;
    }
    respondeu = true;

    var certa = perguntas[atual].certa;
    var botoes = document.getElementsByClassName("opcao");

    botoes[certa].classList.add("certa");

    if (escolhida == certa) {
        pontos++;
        document.getElementById("feedback").textContent = "Acertou!";
    } else {
        botoes[escolhida].classList.add("errada");
        document.getElementById("feedback").textContent = "Errou. A resposta certa está em verde.";
    }

    document.getElementById("proxima").classList.add("mostrar");
}

function proximaPergunta() {
    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        terminar();
    }
}

function terminar() {
    document.getElementById("quiz-img").style.display = "none";
    document.getElementById("pergunta").textContent = "";
    document.getElementById("opcoes").innerHTML = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("proxima").classList.remove("mostrar");
    document.getElementById("contador").textContent = "Fim do quiz";
    document.getElementById("pontuacao").textContent = "Você acertou " + pontos + " de " + perguntas.length;
    document.getElementById("resultado").classList.add("mostrar");
}