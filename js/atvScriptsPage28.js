var bolas = document.querySelectorAll('.bola')
var bolaResult = document.getElementById('bolaResult')
var bolaFinal = document.getElementById('bolaFinal')
const errouImg = document.querySelector("#errou")
var calculo = document.getElementById("calculo")

var bola0 = document.getElementById('bola0')
var bola1 = document.getElementById('bola1')
var bola2 = document.getElementById('bola2')
var bola3 = document.getElementById('bola3')
var bola4 = document.getElementById('bola4')
var bola5 = document.getElementById('bola5')
var bola6 = document.getElementById('bola6')
var bola7 = document.getElementById('bola7')
var bola8 = document.getElementById('bola8')
var bola9 = document.getElementById('bola9')
var bola10 = document.getElementById('bola10')
var bola11 = document.getElementById('bola11')
var bola12 = document.getElementById('bola12')
var bola13 = document.getElementById('bola13')

var podeClick = true

parent.document.getElementById('nextPageBtn').style.opacity = "0"
parent.document.getElementById('nextPageBtn').style.pointerEvents = "none"


function getPos(el) {
    // yay readability
    for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return { x: lx, y: ly };
}

var audioErrado = new Audio('../audio/erroRobo.mp3')
audioErrado.preload
audioErrado.volume = "1"

bolas.forEach(elem => {
    elem.addEventListener("click", click);
    elem.style.pointerEvents = "none"
});

bola1.style.pointerEvents = "auto"

function errou(img) {

    bolas.forEach(elem => {
        elem.style.pointerEvents = "none"
        elem.style.opacity = "0.95"
        elem.style.transitionDuration = "1s"
    });

    audioErrado.play()
    img.classList.add('fade-in')
    img.classList.remove('naoMostra')

    setTimeout(function() {
        img.classList.add('naoMostra')
    }, 2000);

    calculo.classList.add('botaoPisca')
}

function tiraPointers(elem, tira) {
    if (tira == 1) {
        elem.style.pointerEvents = "none"
    } else {
        elem.style.pointerEvents = "auto"
    }
}

function calcula(elem) {
    var valorAtual = bolaResult.getAttribute('valor')
    var op = elem.getAttribute('op')
    var valorOp = elem.getAttribute('valor')

    window.resultado = valorAtual + op + valorOp
    bolaResult.setAttribute('valor', eval(window.resultado))
    bolaResult.innerHTML = eval(window.resultado)
}

function noInteraction(bolas, interaction) {
    if (interaction == 1) {
        bolas.forEach(elem => {
            elem.style.pointerEvents = "none"
        });
    } else {
        bolas.forEach(elem => {
            elem.style.pointerEvents = "auto"
        });
    }
}
console.log('teste')

function reset() {
    bolas.forEach(elem => {
        elem.style.pointerEvents = "none"
        elem.style.opacity = "1"
    });

    bola1.style.pointerEvents = "auto"

    bolaResult.style.top = window.getComputedStyle(bola0, null).getPropertyValue('top')
    bolaResult.style.left = window.getComputedStyle(bola0, null).getPropertyValue('left')

    bolaResult.setAttribute('valor', 10)
    bolaResult.innerHTML = 10
    calculo.classList.remove('botaoPisca')
}

function bolaAnda(elem) {
    podeClick = false

    bolaResult.style.top = window.getComputedStyle(elem, null).getPropertyValue('top')
    bolaResult.style.left = window.getComputedStyle(elem, null).getPropertyValue('left')
    setTimeout(() => {
        podeClick = true
    }, 1000);
}

function click() {
    if (podeClick == true) {
        if (this.id == "bola1") {
            calcula(this)
            noInteraction([bola1], 1)
            noInteraction([bola2, bola3, bola4], 0)

            bolaAnda(this)
        } else if (this.id == "bola2") {
            calcula(this)
            noInteraction([bola2, bola3, bola4], 1)
            noInteraction([bola5, bola6], 0)

            bolaAnda(this)
        } else if (this.id == "bola3") {
            calcula(this)
            noInteraction([bola2, bola3, bola4], 1)
            noInteraction([bola6], 0)

            bolaAnda(this)
        } else if (this.id == "bola4") {
            calcula(this)
            noInteraction([bola2, bola3, bola4], 1)
            noInteraction([bola6, bola7], 0)

            bolaAnda(this)
        } else if (this.id == "bola5") {
            calcula(this)
            noInteraction([bola5, bola6, bola7], 1)
            noInteraction([bola8, bola11], 0)

            bolaAnda(this)
        } else if (this.id == "bola6") {
            calcula(this)
            noInteraction([bola5, bola6, bola7], 1)
            noInteraction([bola8, bola9, bola10], 0)

            bolaAnda(this)
        } else if (this.id == "bola7") {
            calcula(this)
            noInteraction([bola5, bola6, bola7], 1)
            noInteraction([bola9, bola13], 0)

            bolaAnda(this)
        } else if (this.id == "bola8") {
            calcula(this)
            noInteraction([bola8, bola9], 1)
            noInteraction([bola10], 0)

            bolaAnda(this)
        } else if (this.id == "bola9") {
            calcula(this)
            noInteraction([bola8, bola9], 1)
            noInteraction([bola10], 0)

            bolaAnda(this)
        } else if (this.id == "bola10") {
            calcula(this)
            noInteraction([bola10], 1)
            noInteraction([bola11, bola12, bola13], 0)

            bolaAnda(this)
        } else if (this.id == "bola11") {
            calcula(this)
            noInteraction([bola11, bola12, bola13], 1)
            noInteraction([bolaFinal], 0)

            bolaAnda(this)
        } else if (this.id == "bola12") {
            calcula(this)
            noInteraction([bola11, bola12, bola13], 1)
            noInteraction([bolaFinal], 0)

            bolaAnda(this)
        } else if (this.id == "bola13") {
            calcula(this)
            noInteraction([bola11, bola12, bola13], 1)
            noInteraction([bolaFinal], 0)

            bolaAnda(this)
        } else if (this.id == "bolaFinal") {
            if (parseInt(bolaFinal.innerHTML) == eval(window.resultado)) {
                showParabens()
            } else {
                errou(errouImg)
            }
        }
    }

}