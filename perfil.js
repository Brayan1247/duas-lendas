function mostrarAba(pessoa, nomeAba, abaClicada) {
    var perfil = document.getElementById(pessoa);

    var conteudos = perfil.getElementsByClassName("conteudo-aba");
    for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].classList.remove("visivel");
    }

    var abas = perfil.getElementsByClassName("aba");
    for (var j = 0; j < abas.length; j++) {
        abas[j].classList.remove("ativa");
    }

    document.getElementById(pessoa + "-" + nomeAba).classList.add("visivel");
    abaClicada.classList.add("ativa");
}