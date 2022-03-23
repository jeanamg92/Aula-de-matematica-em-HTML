function getElement(tipo, elem) {
  if (tipo == "select") {
    return document.querySelector(elem)
  } else if (tipo == "id") {
    return document.getElementById(elem)
  } else if (tipo == "selectAll") {
    return document.querySelectorAll(elem)
  }
}

const draggableElements = getElement("selectAll", ".draggable")
const droppableElements = getElement("selectAll", ".dropable");

const acertouImg = getElement("selectAll", "#acertou");
const errouImg = getElement("selectAll", "#errou")

const audioTrem = new Audio('../audio/trenzinho.mp3')
audioTrem.preload

var audioCorreto = new Audio('../audio/correct.mp3')
audioCorreto.preload
audioCorreto.volume = "0.7"

var audioErrado = new Audio('../audio/erroRobo.mp3')
audioErrado.preload
audioErrado.volume = "1"

window.acertos = 0

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("drop", drop);
});

function andaTrem(divPai, translate, duration) {
  // pega translate atual
  var translateAtual = parseInt(divPai.style.transform.replace(/\D/gim, ""), 10)

  setTimeout(function() {
    if (translate > 70) {
      // toca audio do trem
      audioTrem.play()
    }
    divPai.style.transform = "translate(" + -(translateAtual - translate) + "%)"
    divPai.style.transitionDuration = duration + "s"
    console.log(divPai.style.transitionDuration)
    console.log(divPai.style.transform)

  }, 1250);

}

function acertou(acertouImg, targetElem, itemDraggable) {

  audioCorreto.play()


  itemDraggable.classList.add('transparent')
  itemDraggable.style.pointerEvents = "none"
  itemDraggable.removeAttribute('draggable')

  acertouImg[0].classList.add('fade-in')
  acertouImg[0].classList.remove('naoMostra')

  // targetElem.style.opacity = "0.7"
  targetElem.style.pointerEvents = "none"
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

// funcoes drag and drop
function dragStart(event) {
  // leva o id do iten que esta sendo arrastado
  event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var translate = 17
  var transitionDuration = 1
    // draggable    
  var itemDraggable = getElement("select", '.linhaElementos > #' + event.dataTransfer.getData("text"));

  //dropable
  var targetElem = event.target
  var divPai = this.parentElement

  if (itemDraggable.id == targetElem.id && targetElem.innerHTML == "") {
    // sobre o item que esta recebendo o outro
    targetElem.innerHTML = getElement("id", itemDraggable.id).innerHTML
    acertou(acertouImg, targetElem, itemDraggable)
    andaTrem(divPai, translate, transitionDuration);
    window.acertos++

  } else if (!(itemDraggable.id == targetElem.id) && targetElem.innerHTML == "") {
    errou(errouImg)
  } else {
    return
  }

  if (window.acertos == 5) {
    andaTrem(divPai, (translate + 100), (transitionDuration + 3));
    setTimeout(function() {
      showParabens();
    }, 3200);
  } else {
    return
  }

}

// window.onload = function() {
//     getElement("select", ".trenzinho").style.backgroundImage = " url('../img/trenzinho.png')"
//     console.log(getElement("select", ".trenzinho"))
// }