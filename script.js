document.addEventListener("keyup", matchingKeyboard);
const artboard = document.getElementById("artboard");
let btnCheck = false;
function matchingKeyboard(e) {
    if (btnCheck == false) return;

    if (e.key === "Escape") {
        score()
    }

    let audio = new Audio();
    // console.log(e.key)
    let targetKey = e.key;
    let currrentKeyTarget = targetKey.toLowerCase();
    const currentAlphabet = document.querySelector(".currentAlphabet").innerText;
    const currentAlphabetLow = currentAlphabet.toLowerCase();
    // console.log(currentAlphabetLow, currrentKeyTarget)
    if (currrentKeyTarget === currentAlphabetLow) {
        // Audio addd
        audio.src = "audio/correctSound.m4a"
        audio.play()
        console.log("currect")
        counterGame();
        // start a new update
        backgroundColorKeyRemove(currentAlphabetLow);
        // update score
        let updateScore = scoreUpdate(".score");
        let currenScore = updateScore + 1;
        setScoreUpdate(".score", currenScore)
    } else {


        audio.src = "audio/wrongSound.m4a"
        audio.play()
        console.log("Not currect")
        // minus plush
        // update score
        let updateScore = scoreUpdate(".life");
        let currenScore = updateScore - 1;
        console.log(currenScore)
        // updatedLife background
        let updatedLife = (currenScore / 5) * 100;
        console.log(updatedLife)
        artboard.style.background = `linear-gradient(#B7B5B8CC ${updatedLife}%, red)`

        setScoreUpdate(".life", currenScore);
        if (updateScore === 0) {
            score()
        }
    }
}


function counterGame() {
    let storRandom = randomAlphabet()
    const currentAlphabet = document.querySelector(".currentAlphabet");
    currentAlphabet.innerText = storRandom;
    backgroundColorKey(storRandom.toLowerCase())
}

function playNow() {
    btnCheck = true;

    hideSection(".home");
    showSection(".playground");
    showSection(".scoreFooter");
    // hideSection(".playground")
    // score
    setScoreUpdate(".life", 5);
    setScoreUpdate(".score", 0);

    counterGame()

}



function score() {
    btnCheck = false;
    // let scoreFooter = document.querySelector(".scoreFooter");
    hideSection(".playground");
    showSection(".scoreFooter");

    // curren score footer
    let secUpdate = scoreUpdate(".score");
    // console.log(secUpdate)
    setScoreUpdate(".game-score", secUpdate)

    // getElementTextById
    const getElement = getElementTextById("currentAlphabet")
    // console.log(getElement)
    let getElem = getElement.toLowerCase();
    console.log(getElem)
    backgroundColorKeyRemove(getElem)


    artboard.style.background = `linear-gradient(#B7B5B8CC 100%, red)`


}


function playAgain() {
    playNow();
    showSection(".scoreFooter");


    // result score

}


// modal 
const modal = document.getElementById("modal");
const xCros = document.getElementById("xCros");
xCros.addEventListener("click", function(){
    modal.classList.add("hidden")
})
function modalOpen(event) {
    console.log(event.clientY)
    if (event.clientY < 20) {
        modal.classList.remove("hidden")
    }

}

document.body.addEventListener("mousemove", modalOpen)

