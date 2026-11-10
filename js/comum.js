
function trocarPessoa(id, botao) {
    guardar("pessoa", id);

    var blocos = document.getElementsByClassName("pessoa-bloco");
    for (var i = 0; i < blocos.length; i++) {
        blocos[i].classList.remove("visivel");
    }

    var botoes = document.getElementsByClassName("botao-pessoa");
    for (var j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("ativo");
    }

    document.getElementById(id).classList.add("visivel");
    botao.classList.add("ativo");

    if (typeof aoTrocarPessoa == "function") {
        aoTrocarPessoa();
    }
}

function alternar(idElemento, botao, textoMostrar, textoEsconder) {
    var elemento = document.getElementById(idElemento);

    if (elemento.classList.contains("visivel")) {
        elemento.classList.remove("visivel");
        botao.textContent = textoMostrar;
    } else {
        elemento.classList.add("visivel");
        botao.textContent = textoEsconder;
    }
}

function ampliar(imagem) {
    document.getElementById("ampliada-img").src = imagem.src;
    document.getElementById("ampliada").classList.add("aberto");
}

function fecharAmpliada() {
    document.getElementById("ampliada").classList.remove("aberto");
}

function guardar(chave, valor) {
    try {
        sessionStorage.setItem(chave, valor);
    } catch (erro) {
    }
}

function recuperar(chave) {
    try {
        return sessionStorage.getItem(chave);
    } catch (erro) {
        return null;
    }
}

var botoesPessoa = document.getElementsByClassName("botao-pessoa");
if (recuperar("pessoa") == "artista" && botoesPessoa.length > 1) {
    trocarPessoa("artista", botoesPessoa[1]);
}