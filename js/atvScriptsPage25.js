function getElement(tipo, elem) {
    if (tipo == "select") {
        return document.querySelector(elem)
    } else if (tipo == "id") {
        return document.getElementById(elem)
    } else if (tipo == "selectAll") {
        return document.querySelectorAll(elem)
    }
}

const acertouImg = getElement("selectAll", "#acertou");
const errouImg = getElement("selectAll", "#errou")

const nuvens = getElement("selectAll", "#nuvem")
const carros = document.querySelectorAll(".carro");
const calculo = getElement("id", "calculo")
const audioKart = new Audio('../audio/raceCar2.mp3')
audioKart.volume = "0.08"
audioKart.preload

var audioErrado = new Audio('../audio/erroRobo.mp3')
audioErrado.preload
audioErrado.volume = "1"

var audioCorreto = new Audio('../audio/correct.mp3')
audioCorreto.preload
audioCorreto.volume = "0.7"

window.count = 0

carros.forEach(elem => {
    elem.addEventListener("click", click);
});

function acertou(acertouImg) {
    carros.forEach(elem => {
        elem.style.pointerEvents = "none"
    });
    audioCorreto.play()
    acertouImg[0].classList.add('fade-in')
    acertouImg[0].classList.remove('naoMostra')

    setTimeout(function() {
        acertouImg[0].classList.add("naoMostra")
    }, 1000);

}

function errou(errouImg) {
    audioErrado.play()
    errouImg[0].classList.add('fade-in')
    errouImg[0].classList.remove('naoMostra')

    setTimeout(function() {
        errouImg[0].classList.add('naoMostra')
    }, 1000);
}

function nextCorrida() {
    carros.forEach(elem => {
        elem.style.transitionDuration = "0s"
        elem.style.transform = "translate(" + 0 + "%)"
        elem.style.pointerEvents = "auto"

    });
    if (window.count == 1) {

        calculo.innerHTML = "407 - 121"

        document.querySelector(".carro1 .bandeira").innerHTML = 286
        document.querySelector(".carro1").setAttribute("correto", "sim")

        document.querySelector(".carro2 .bandeira").innerHTML = 528
        document.querySelector(".carro2").setAttribute("correto", "nao")

        document.querySelector(".carro3 .bandeira").innerHTML = 226
        document.querySelector(".carro3").setAttribute("correto", "nao")


    } else if (window.count == 2) {

        calculo.innerHTML = "311 x 4"

        document.querySelector(".carro1 .bandeira").innerHTML = 1244
        document.querySelector(".carro1").setAttribute("correto", "sim")

        document.querySelector(".carro2 .bandeira").innerHTML = 774
        document.querySelector(".carro2").setAttribute("correto", "nao")

        document.querySelector(".carro3 .bandeira").innerHTML = 1226
        document.querySelector(".carro3").setAttribute("correto", "nao")

    } else if (window.count == 3) {
        calculo.innerHTML = "2016 ÷ 0"

        document.querySelector(".carro1 .bandeira").innerHTML = 216
        document.querySelector(".carro1").setAttribute("correto", "nao")

        document.querySelector(".carro2 .bandeira").innerHTML = 2016
        document.querySelector(".carro2").setAttribute("correto", "nao")

        document.querySelector(".carro3 .bandeira").innerHTML = 0
        document.querySelector(".carro3").setAttribute("correto", "sim")

    } else if (window.count == 4) {
        calculo.innerHTML = "216 ÷ 0"

        document.querySelector(".carro1 .bandeira").innerHTML = 216
        document.querySelector(".carro1").setAttribute("correto", "nao")

        document.querySelector(".carro2 .bandeira").innerHTML = 0
        document.querySelector(".carro2").setAttribute("correto", "sim")

        document.querySelector(".carro3 .bandeira").innerHTML = 226
        document.querySelector(".carro3").setAttribute("correto", "nao")

    }
}

function andaCarro(kart) {
    setTimeout(function() {
        getElement("id", kart).style.transform = "translate(" + 400 + "%)"
        getElement("id", kart).style.transitionDuration = "4s"
        audioKart.play()

        setTimeout(function() {
            if (window.count > 4) {
                showParabens();
            } else {
                nextCorrida()
            }
        }, 3000);
    }, 1500);

}

function click() {
    if (this.getAttribute('correto') == 'sim') {
        acertou(acertouImg)
        window.count++
            andaCarro(this.id)

    } else {
        errou(errouImg)
    }
}

function nuvem() {
    var transformValue = 150

    nuvens[0].style.transform = "translate(" + transformValue + "%)"
    nuvens[0].style.transitionDuration = "60s"

    setTimeout(function() {
        nuvens[0].style.transform = "translate(" + -transformValue + "%)"
        nuvens[0].style.transitionDuration = "60s"
    }, 50000);

    nuvens[1].style.transform = "translate(" + transformValue + "%)"
    nuvens[1].style.transitionDuration = "90s"

    setTimeout(function() {
        nuvens[1].style.transform = "translate(" + -transformValue + "%)"
        nuvens[1].style.transitionDuration = "90s"
    }, 60000);

    nuvens[2].style.transform = "translate(" + transformValue + "%)"
    nuvens[2].style.transitionDuration = "70s"

    setTimeout(function() {
        nuvens[2].style.transform = "translate(" + -transformValue + "%)"
        nuvens[2].style.transitionDuration = "70s"
    }, 70000);

    nuvens[3].style.transform = "translate(" + transformValue + "%)"
    nuvens[3].style.transitionDuration = "65s"

    setTimeout(function() {
        nuvens[3].style.transform = "translate(" + -transformValue + "%)"
        nuvens[3].style.transitionDuration = "65s"
    }, 6000);

    nuvens[4].style.transform = "translate(" + transformValue + "%)"
    nuvens[4].style.transitionDuration = "50s"

    setTimeout(function() {
        nuvens[4].style.transform = "translate(" + -transformValue + "%)"
        nuvens[4].style.transitionDuration = "50s"
    }, 50000);

    nuvens[5].style.transform = "translate(" + transformValue + "%)"
    nuvens[5].style.transitionDuration = "80s"

    setTimeout(function() {
        nuvens[5].style.transform = "translate(" + -transformValue + "%)"
        nuvens[5].style.transitionDuration = "80s"
    }, 80000);
}

nuvem()