const calculos = document.querySelectorAll(".colunaCalc .calcEimagem .calc");

var audioCorreto = new Audio('../audio/correct.mp3')
audioCorreto.preload
audioCorreto.volume = "0.7"

var audioErrado = new Audio('../audio/erroRobo.mp3')
audioErrado.preload
audioErrado.volume = "1"

calculos.forEach(elem => {
    elem.addEventListener("click", click);
});

window.count = 0

function click() {

    this.childNodes.forEach(elem => {
        img = this.parentElement.querySelectorAll("#acertoOuErro")
    })

    var elemento = this.parentElement.parentElement

    if (this.id == 'correto') {
        audioCorreto.play()
        window.count++
            acertou(img, elemento)

    } else {
        audioErrado.play()
        errou(img, elemento)
    }

    if (window.count == 4) {
        setTimeout(function() {
            showParabens();
        }, 1000);
    }
}


function acertou(img, elemento) {

    img[0].classList.add('fade-in')
    img[0].classList.remove('naoMostra')

    elemento.style.opacity = "0.7"
    elemento.style.pointerEvents = "none"
}

function errou(img, elemento) {
    elemento.style.pointerEvents = "none"
    img[0].classList.add('fade-in')
    img[0].classList.remove('naoMostra')

    setTimeout(function() {
        img[0].classList.add('naoMostra')
        elemento.style.pointerEvents = "auto"
    }, 500);
}