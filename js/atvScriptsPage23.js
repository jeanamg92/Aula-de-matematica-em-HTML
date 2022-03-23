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

const parabens = getElement("id", "parabens")
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

function sobeDiv(divPai) {
    setTimeout(function() {
        divPai.classList.add('up-outscreen-translated')
        var nextOp = Number(divPai.id) + 1;
        document.getElementById(nextOp).classList.remove('transparent', 'bottom-outscreen-translated')
    }, 1250);
}

function acertou(img, elemento, itemDraggable) {
    audioCorreto.play()

    itemDraggable.classList.add('transparent')
    itemDraggable.style.pointerEvents = "none"
    itemDraggable.removeAttribute('draggable')

    img[0].classList.add('fade-in')
    img[0].classList.remove('naoMostra')

    elemento.style.opacity = "0.7"
    elemento.style.pointerEvents = "none"
    setTimeout(function() {
        img[0].classList.add("naoMostra")
    }, 1000);


}

function errou(img) {
    audioErrado.play()
    img[0].classList.add('fade-in')
    img[0].classList.remove('naoMostra')

    setTimeout(function() {
        img[0].classList.add('naoMostra')
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
    // draggable    
    var itemDraggable = getElement("select", '.colunaElementos > #' + event.dataTransfer.getData("text"));
    console.log(itemDraggable)
        //dropable
    var targetElem = event.target
    var divPai = this.parentElement.parentElement

    if (itemDraggable.id == targetElem.id && targetElem.innerHTML == "") {
        // sobre o item que esta recebendo o outro
        targetElem.innerHTML = getElement("id", itemDraggable.id).innerHTML
        acertou(acertouImg, targetElem, itemDraggable)
        window.acertos++

    } else if (!(itemDraggable.id == targetElem.id) && targetElem.innerHTML == "") {
        errou(errouImg)
    } else {
        return
    }

    if (window.acertos == 3 && !(divPai.id == 4)) {
        window.acertos = 0
        sobeDiv(divPai)
    } else if (window.acertos == 4 && (divPai.id == 4)) {
        sobeDiv(divPai)
        setTimeout(function() {
            showParabens();
        }, 1000);
    }

}