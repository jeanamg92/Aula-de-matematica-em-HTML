const alternativas = document.querySelectorAll(".alternativa");
const circuloAlternativa = document.querySelectorAll(".circuloAlternativa");
const nextStepAtv1 = document.getElementById('nextStepAtv1');
const enunciado = document.getElementById("enunciadoQuadradoVerde");
const pontos = document.querySelector(".pontos span");
var perguntaEresposta = document.getElementById("perguntaEresposta");
var alternativa1 = document.querySelector(".alternativa.primeira span");
var alternativa2 = document.querySelector(".alternativa.segunda span");
var alternativa3 = document.querySelector(".alternativa.terceira span");
var caraRobo = document.getElementById('cara');
var caraDiv = document.getElementById('caraDiv');
var audioRoboErro = new Audio('../audio/erroRobo.mp3')
audioRoboErro.preload
audioRoboErro.volume = "0.5"


var audioCorreto = new Audio('../audio/correct.mp3')
audioCorreto.preload
audioCorreto.volume = "0.7"

var audioFogo = new Audio('../audio/fogo.mp3')
audioFogo.preload
audioFogo.volume = "0.6"
  // audioFogo.play()

audioFogo.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);


const imgAcertoErro = document.querySelectorAll("#acertoOuErro");

window.count = 1

alternativas.forEach(elem => {
  elem.addEventListener("click", click);
});

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

function animaRoboCorreto() {
  audioCorreto.play()

  blokElemen(alternativas, 1, 1)

  var num = randomInt(1, 3)
  caraAtual = caraRobo.src
  caraRobo.style.display = "none"
  caraDiv.classList.add('caraAcerto' + num)

  setTimeout(function() {
    caraDiv.classList.remove('caraAcerto' + num)
    caraRobo.style.display = "flex"
  }, 1500);
}

function animaRoboErrado() {

  blokElemen(alternativas, 1, 1)
  audioRoboErro.play()

  var num = randomInt(1, 5)

  caraAtual = caraRobo.src
  caraRobo.style.display = "none"
  caraDiv.classList.add('caraErro' + num)


  setTimeout(function() {
    caraDiv.classList.add('desceCara')
  }, 700);

  setTimeout(function() {
    caraDiv.classList.remove('caraErro' + num)
    caraDiv.classList.remove('desceCara')
    caraRobo.style.display = "flex"
    blokElemen(alternativas, 0)
  }, 1000);
}

// funcao que mostra a imagem de erro ou acerto, ela recebe a img e recebe 1 ou 0 para avariavel acerto, se acerto = 1,se erro = 0
function acertouErrou(img, acerto) {
  // retira a classe naoMostra da imagem qeu tem o certo ou errado e retira a classe alternativas para qeu elas subam
  img.classList.add('fade-in')
  img.classList.remove('naoMostra')
  if (acerto == 0) {
    setTimeout(function() {
      img.classList.add('naoMostra')
    }, 500);
  }
}

function tiraPontos() {
  pontosAtuais = pontos.innerHTML
  pontos.innerHTML = parseInt(pontosAtuais) - 5
}

function somaPontos() {
  pontosAtuais = pontos.innerHTML
  pontos.innerHTML = parseInt(pontosAtuais) + 20
}

function blokElemen(elem, blok, opacity) {
  if (blok == 1) {
    elem.forEach(elemento => {
      elemento.classList.add('noInteraction')
      if (opacity == 1) {
        elemento.style.opacity = "0.7"
      }
    })
  } else {
    elem.forEach(elemento => {
      elemento.classList.remove('noInteraction')
      elemento.style.opacity = "1"
    })
  }
}

function showBotaoNext() {
  if (nextStepAtv1.classList.contains('naoMostra')) {
    setTimeout(function() {
      nextStepAtv1.classList.remove('fade-in')
      nextStepAtv1.classList.remove('naoMostra')
    }, 500);
  } else {
    nextStepAtv1.classList.add('naoMostra')
  }

}

function nextPageAtv30(pagina) {

  imgAcertoErro.forEach(elem => {
    elem.classList.add('naoMostra')
  });

  showBotaoNext()
  blokElemen(alternativas, 0)

  if (window.count == 2) {
    enunciado.innerHTML = "As propriedades das Operações matemáticas são:"

    alternativa1.innerHTML = "Ordem, Classes, Parcela e Resultado"
    document.querySelector(".alternativa.primeira .circuloAlternativa img").src = "../img/errou.png"
    document.querySelector(".alternativa.primeira").id = ""

    alternativa2.innerHTML = "Fechamento, associatividade, Elemento Neutro, Elemento Nulo, e Comutatividade"
    document.querySelector(".alternativa.segunda .circuloAlternativa img").src = "../img/acertou.png"
    document.querySelector(".alternativa.segunda").id = "correto"

    alternativa3.innerHTML = "Elementos Neutros e de Fechamento, Parcelas e Resultados"
  } else if (window.count == 3) {
    enunciado.innerHTML = "Nas operações da <b>Adição</b>, os elementos são classificados como:"

    alternativa1.innerHTML = "Multiplicador, Multiplicando e Produto"

    alternativa2.innerHTML = "Minuendo, Subtraendo, Resto ou Diferença"
    document.querySelector(".alternativa.segunda .circuloAlternativa img").src = "../img/errou.png"
    document.querySelector(".alternativa.segunda").id = ""

    alternativa3.innerHTML = "1ª Parcela, 2ª Parcel, Soma ou Total"
    document.querySelector(".alternativa.terceira .circuloAlternativa img").src = "../img/acertou.png"
    document.querySelector(".alternativa.terceira").id = "correto"
  } else if (window.count == 4) {
    enunciado.innerHTML = "Nas operações da <b>Multiplicação</b>, os elementos são classificados como:"

    alternativa1.innerHTML = "Multiplicador, Multiplicando e Produto"
    document.querySelector(".alternativa.primeira .circuloAlternativa img").src = "../img/acertou.png"
    document.querySelector(".alternativa.primeira").id = "correto"

    alternativa2.innerHTML = "Minuendo, Subtraendo, Resto ou Diferença"

    alternativa3.innerHTML = "1ª Parcela, 2ª Parcel, Soma ou Total"
    document.querySelector(".alternativa.terceira .circuloAlternativa img").src = "../img/errou.png"
    document.querySelector(".alternativa.terceira").id = ""
  }
}

function click() {
  // percorre o array de filhos da div procurando a imagem com o id acertoOuErro
  this.childNodes.forEach(elem => {
    img = this.querySelectorAll("#acertoOuErro")

  })

  // verifica se o item clicado bate com as respostas , seja ele operador ou alternativa
  if (this.id == 'correto') {

    // aumenta 1 ao contador que verifica qual etapa esta
    window.count++

      acertouErrou(img[0], 1)
    animaRoboCorreto()
    somaPontos();
    blokElemen(alternativas, 1, 1)

    if (window.count <= 4) {
      showBotaoNext()
    } else {
      setTimeout(function() {
        showParabens();
      }, 1000);
    }

    // se nao bate com as respostas entra aqui, CHAMA A funcao de mostrar imagem de acerto ou erro
  } else {
    acertouErrou(img[0], 0)
    animaRoboErrado()
    tiraPontos();
  }
}