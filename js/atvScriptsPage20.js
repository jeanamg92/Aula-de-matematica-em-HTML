const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".dropable");
const acertou = document.getElementById("acertou");
const errou = document.getElementById("errou")
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

// funcoes drag and drop
function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    const draggableElementData = event.dataTransfer.getData("text")
    const droppableElementData = event.target.getAttribute("result")

    if (draggableElementData == droppableElementData && event.target.innerHTML == "") {
        event.target.innerHTML = draggableElementData
        event.target.disable = "true"
        event.target.style.opacity = "0.7"

        acertou.classList.remove("naoMostra")
        audioCorreto.play()
        setTimeout(function() {
            acertou.classList.add("naoMostra")
        }, 1000);
        window.acertos++
    } else if (!(draggableElementData == droppableElementData) && event.target.innerHTML == "") {
        audioErrado.play()
        errou.classList.remove("naoMostra")
        setTimeout(function() {
            errou.classList.add("naoMostra")
        }, 1000);
    } else {
        return
    }

    if (window.acertos == droppableElements.length) {
        setTimeout(function() {
            showParabens();
        }, 1000);
    }
}