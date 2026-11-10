var dados = {
    atleta: [
        { titulo: "Primeiro título (2015)", texto: "Curry levou os Warriors ao primeiro título da NBA em 2015." },
        { titulo: "MVP unânime (2016)", texto: "Foi o primeiro jogador eleito MVP por unanimidade e fez 402 bolas de três pontos na temporada." },
        { titulo: "Recorde de 3 pontos (2021)", texto: "Ultrapassou Ray Allen e se tornou o maior cestinha de bolas de três pontos da história da NBA. Em 2022, no All-Star Game, fez 16 bolas de três (recorde do jogo) e foi eleito MVP." },
        { titulo: "MVP das Finais (2022)", texto: "Ganhou o quarto título e foi eleito o MVP das Finais pela primeira vez." },
        { titulo: "Ouro em Paris (2024)", texto: "Foi campeão olímpico com a seleção dos Estados Unidos." },
        { titulo: "Davidson", texto: "Na faculdade, Curry ficou famoso por levar a pequena Davidson longe no torneio universitário." }
    ],
    artista: [
        { titulo: "Respect (1967)", texto: "Escrita por Otis Redding, a música virou um hino na voz de Aretha." },
        { titulo: "(You Make Me Feel Like) A Natural Woman (1967)", texto: "Um dos maiores clássicos da cantora." },
        { titulo: "Chain of Fools (1967)", texto: "Outro grande sucesso da fase da Atlantic Records." },
        { titulo: "Think (1968)", texto: "Sucesso de 1968, ano em que ela foi capa da revista Time." },
        { titulo: "Amazing Grace (1972)", texto: "Álbum gospel gravado ao vivo, um dos mais vendidos do gênero." },
        { titulo: "Hall da Fama (1987)", texto: "Foi a primeira mulher a entrar no Hall da Fama do Rock and Roll." }
    ]
};

function abrirModal(pessoa, numero) {
    var item = dados[pessoa][numero];
    document.getElementById("modal-img").src = "img/" + pessoa + "/card-" + (numero + 1) + ".jpg";
    document.getElementById("modal-titulo").textContent = item.titulo;
    document.getElementById("modal-texto").textContent = item.texto;
    document.getElementById("modal").classList.add("aberto");
}

function fecharModal() {
    document.getElementById("modal").classList.remove("aberto");
}