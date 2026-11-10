function mostrarAno(idDetalhe, anoClicado) {
    var detalhe = document.getElementById(idDetalhe);

    if (detalhe.classList.contains("visivel")) {
        detalhe.classList.remove("visivel");
        anoClicado.classList.remove("ativo");
    } else {
        detalhe.classList.add("visivel");
        anoClicado.classList.add("ativo");
    }

    guardarAnosAbertos();
}

function guardarAnosAbertos() {
    var detalhes = document.getElementsByClassName("detalhe");
    var abertos = [];

    for (var i = 0; i < detalhes.length; i++) {
        if (detalhes[i].classList.contains("visivel")) {
            abertos.push(detalhes[i].id);
        }
    }

    guardar("anosAbertos", abertos.join(","));
}

function restaurarAnosAbertos() {
    var salvo = recuperar("anosAbertos");
    if (!salvo) {
        return;
    }

    var ids = salvo.split(",");
    for (var i = 0; i < ids.length; i++) {
        var detalhe = document.getElementById(ids[i]);
        if (detalhe) {
            detalhe.classList.add("visivel");
            detalhe.previousElementSibling.classList.add("ativo");
        }
    }
}

function verificarEventos() {
    var eventos = document.getElementsByClassName("evento");
    var alturaTela = window.innerHeight;

    for (var i = 0; i < eventos.length; i++) {
        if (eventos[i].offsetHeight == 0) {
            continue;
        }
        if (eventos[i].getBoundingClientRect().top < alturaTela - 60) {
            eventos[i].classList.add("aparece");
        }
    }
}

function aoTrocarPessoa() {
    var eventos = document.getElementsByClassName("evento");
    for (var i = 0; i < eventos.length; i++) {
        eventos[i].classList.remove("aparece");
    }
    setTimeout(verificarEventos, 50);
}

window.addEventListener("scroll", verificarEventos);
verificarEventos();
restaurarAnosAbertos();