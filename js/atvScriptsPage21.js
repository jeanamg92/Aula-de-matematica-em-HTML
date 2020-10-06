const operadores = document.querySelectorAll(".operadorAtv");
const alternativas = document.querySelectorAll(".alternativa");
const rowOp = document.getElementById("rowOp");
const divAlternativas = document.getElementById("alternativas");

const previouStepAtv1 = document.getElementById("previouStepAtv1");
const nextStepAtv1 = document.getElementById('nextStepAtv1');

const enunciado = document.getElementById("enunciadoQuadradoVerde");

const parabens = document.getElementById("parabens")
const audio = document.getElementById("audioParabens");

window.count = 0

operadores.forEach(elem => {
    elem.addEventListener("click", click);
});

alternativas.forEach(elem => {
    elem.addEventListener("click", click);
});

function click() {
    // percorre o array de filhos da div procurando a imagem com o id acertoOuErro
    this.childNodes.forEach(elem => {
            img = this.querySelectorAll("#acertoOuErro")
        })
        // verifica se o item clicado bate com as respostas , seja ele operador ou alternativa
    if (this.id == 'correto' || this.id == 'correto') {
        // aumenta 1 ao contador que verifica qual etapa esta
        window.count++

            // retira a classe naoMostra da imagem qeu tem o certo ou errado e retira a classe alternativas para qeu elas subam
            img[0].classList.add('fade-in')
        img[0].classList.remove('naoMostra')
        retiraClasseAtv('alternativas');

        // se estiuver no passo 1, desabilita o click na div e diminui opacidade
        if (window.count == 1) {
            rowOp.style.opacity = "0.3"
            rowOp.style.pointerEvents = "none"

            // se estiver no passo 2, faz o mesmo de cima mas com a div das alternativas, e mostra o botao pra ir pro proximo passo
        } else if (window.count >= 2) {
            divAlternativas.style.opacity = "0.3"
            divAlternativas.style.pointerEvents = "none"
            setTimeout(function() {
                nextStepAtv1.classList.remove('fade-in')
                nextStepAtv1.classList.remove('naoMostra')
            }, 500);
            setTimeout(function() {
                audio.play()
                parabens.classList.remove("naoMostra")
                parabens.classList.add("parabens")
            }, 1000);

            setTimeout(function() {
                parabens.classList.add("naoMostra")
            }, 4000);
            window.count = 0
        }
        // se nao bate com as respostas entra aqui, tira a classe naoMostra da imagem de erro mostrando eval, depois adiciona ela denovo
    } else {
        img[0].classList.add('fade-in')
        img[0].classList.remove('naoMostra')

        setTimeout(function() {
            img[0].classList.add('naoMostra')
        }, 500);

    }
}

function nextStepAtv(step) {

    if (step == 2) {
        parent.document.getElementById('iframe').src = "../Pages/part2page21.html"
            // previouStepAtv1.classList.remove('naoMostra');


    } else if (step == 3) {
        parent.document.getElementById('iframe').src = "../Pages/part3page21.html"
            // previouStepAtv1.classList.remove("naoMostra");

    } else if (step == 4) {
        parent.document.getElementById('iframe').src = "../Pages/part4page21.html"
            // previouStepAtv1.classList.remove("naoMostra");
    } else if (step == 1) {
        parent.document.getElementById('iframe').src = "../Pages/page21.html"
    }

}

function previousStepAtv(step) {

    if (step == 2) {
        parent.document.getElementById('iframe').src = "../Pages/part2page21.html"
        nextStepAtv1.classList.remove('naoMostra')

    } else if (step == 3) {
        parent.document.getElementById('iframe').src = "../Pages/part3page21.html"
        nextStepAtv1.classList.remove('naoMostra')

    } else if (step == 4) {
        parent.document.getElementById('iframe').src = "../Pages/part4page21.html"
    } else if (step == 1) {
        nextStepAtv1.classList.remove('naoMostra')

        parent.document.getElementById('iframe').src = "../Pages/page21.html"

    }

}