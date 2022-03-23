const totalPaginas = 28;

if (document.getElementById('nextPageBtn')) {
    document.getElementById('nextPageBtn').style.opacity = "1"
    document.getElementById('nextPageBtn').style.pointerEvents = "auto"
}

//IMPORTANTE! - a composiçao do link tem que ser /Pages/paginax.html sempre

function nextPage() {
    const arrayOfStrings = document.getElementById("iframe").src.split("/");
    const idx = arrayOfStrings.indexOf("Pages") + 1;

    var nextPage = parseInt(arrayOfStrings[idx].replace(/\D/gim, ""), 10) + 1;

    if (nextPage.toString().length >= 3) {
        const nextPageStr = nextPage.toString().split('')
        const nextObj = nextPageStr.slice(1, 3)
        const nextPageStringfy = JSON.stringify(nextObj)
        nextPage = parseInt(nextPageStringfy.replace(/\D/gim, ""), 10);
    }

    if (nextPage <= totalPaginas) {

        arrayOfStrings[idx] = "page" + nextPage + ".html";
        // console.log(arrayOfStrings[idx])
        const srcString = arrayOfStrings.join("/");
        document.getElementById("iframe").src = srcString;
        document.getElementById("paginaAtual").innerHTML = ("00" + nextPage).slice(-2);

        if (nextPage == totalPaginas) {
            document.getElementById('nextPageBtn').style.opacity = "0"
            document.getElementById('nextPageBtn').style.pointerEvents = "none"
        }
    }
}

function previousPage() {
    document.getElementById('nextPageBtn').style.opacity = "1"
    document.getElementById('nextPageBtn').style.pointerEvents = "auto"
    const arrayOfStrings = document.getElementById("iframe").src.split("/");
    const idx = arrayOfStrings.indexOf("Pages") + 1;

    var previousPage = parseInt(arrayOfStrings[idx].replace(/\D/gim, ""), 10) - 1;

    if (previousPage.toString().length >= 3) {
        const previousPageStr = previousPage.toString().split('')
        const nextObj = previousPageStr.slice(1, 3)
        const previousPageStringfy = JSON.stringify(nextObj)
        previousPage = parseInt(previousPageStringfy.replace(/\D/gim, ""), 10);
    }

    if (previousPage >= 1) {
        arrayOfStrings[idx] = "page" + previousPage + ".html";
        const srcString = arrayOfStrings.join("/");
        document.getElementById("iframe").src = srcString;
        document.getElementById("paginaAtual").innerHTML = ("00" + previousPage).slice(-2);
    }
}

function gotoPage(page) {
    document.getElementById('nextPageBtn').style.opacity = "1"
    document.getElementById('nextPageBtn').style.pointerEvents = "auto"
    const arrayOfStrings = document.getElementById("iframe").src.split("/");
    const idx = arrayOfStrings.indexOf("Pages") + 1;
    const previousPage = page;
    // if (previousPage >= 1) {
    arrayOfStrings[idx] = "page" + previousPage + ".html";
    const srcString = arrayOfStrings.join("/");
    document.getElementById("iframe").src = srcString;
    document.getElementById("paginaAtual").innerHTML = ("00" + previousPage).slice(-2);
    // }
}

function chamaMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('right-outscreen-translated')) {
        document.getElementById('menu').classList.remove('right-outscreen-translated');
    } else {
        document.getElementById('menu').classList.add('right-outscreen-translated');
    }
}

function removeClasseFS() {
    var elemento = document.getElementById('myvideo')
        // console.log(elemento)
    openFullscreen(elemento);
    document.getElementById('tudo').classList.remove('displayNone')
    document.getElementById('menu').classList.remove('displayNone')
    document.getElementById('overlay').classList.add('displayNone')
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function retiraClasse(text) {
    // console.log(text);
    document.getElementById('' + text).classList.add('showColor');
    sleep(100)
    document.getElementById('' + text).classList.remove('left-outscreen-translated');

}

function retiraClasseAtv(text) {
    // console.log(text);
    document.getElementById('' + text).classList.add('showColor');
    sleep(100)
    document.getElementById('' + text).classList.remove('bottom-outscreen-translated');

}

function addClasseAtv(text) {
    // console.log(text);
    document.getElementById('' + text).classList.remove('showColor');
    sleep(100)
    document.getElementById('' + text).classList.add('bottom-outscreen-translated');

}


if (document.getElementById('SFX-parabens')) {
    var sfxParabens = document.getElementById('SFX-parabens');
}

function showParabens(onend = undefined) { //onend = função pra ser chamada depois que o parabens sumir
    document.getElementById('parabens-wrapper').classList.remove('hidden');

    if (sfxParabens) {
        sfxParabens.currentTime = 0;
        sfxParabens.muted = false;
        sfxParabens.volume = 0.85;
        sfxParabens.play();
    }

    setTimeout(() => {
        document.getElementById('parabens-wrapper').classList.add('hidden');

        if (onend != undefined)
            onend();
    }, 4250)
}

function pixelToVH(value) {
    return (100 * value) / window.innerHeight
}

function pixelToVW(value) {
    return (100 * value) / window.innerWidth
}

function vhToPixel(value) {
    (window.innerHeight * value) / 100
}

function vwToPixel(value) {
    ((window.innerWidth * value) / 100)
}