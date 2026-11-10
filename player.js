var lista = [
    { pessoa: "atleta", titulo: "Top 30 cestas de 3 pontos", codigo: "flm-cZ7r6eE" },
    { pessoa: "atleta", titulo: "Melhores momentos nas Olimpíadas de Paris", codigo: "0S-SMV26uZY" },
    { pessoa: "artista", titulo: "Clipe musical", codigo: "AM0MVuEmFGc" },
    { pessoa: "artista", titulo: "Respect (vídeo oficial)", codigo: "C06IINMQzsY" }
];

var atual = 0;

function montarListas() {
    for (var i = 0; i < lista.length; i++) {
        var item = document.createElement("li");
        item.className = "item";
        item.textContent = lista[i].titulo;
        item.setAttribute("onclick", "trocarMidia(" + i + ")");
        document.getElementById("lista-" + lista[i].pessoa).appendChild(item);
    }
}

function trocarMidia(numero) {
    var item = lista[numero];
    atual = numero;

    document.getElementById("titulo-midia").textContent = item.titulo;
    document.getElementById("link-video").href = "https://www.youtube.com/watch?v=" + item.codigo;
    document.getElementById("miniatura").src = "https://img.youtube.com/vi/" + item.codigo + "/hqdefault.jpg";

    var botoes = document.getElementsByClassName("botao-pessoa");
    if (!document.getElementById(item.pessoa).classList.contains("visivel")) {
        trocarPessoa(item.pessoa, item.pessoa == "atleta" ? botoes[0] : botoes[1]);
    }

    var itens = document.getElementsByClassName("item");
    for (var i = 0; i < itens.length; i++) {
        itens[i].classList.remove("tocando");
    }
    itens[numero].classList.add("tocando");
}

function assistir() {
    window.open("https://www.youtube.com/watch?v=" + lista[atual].codigo, "_blank");
}

function proximo() {
    trocarMidia((atual + 1) % lista.length);
}

function anterior() {
    trocarMidia((atual - 1 + lista.length) % lista.length);
}

montarListas();
trocarMidia(0);