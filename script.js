// const home = document.querySelector(".home");
// const playground = document.querySelector(".playground");
// const score = document.querySelector(".score");
// function playNow(){
//     home.classList.add("hidden");
//     home.style.transtion
//     playground.classList.remove("hidden");
// }


document.addEventListener("keyup", matchingKeyboard);
function matchingKeyboard(e){
    let targetKey = e.key;
    let currrentKeyTarget = targetKey.toLowerCase();
    const currentAlphabet = document.querySelector(".currentAlphabet").innerText;
    const currentAlphabetLow = currentAlphabet.toLowerCase();
    // console.log(currentAlphabetLow, currrentKeyTarget)
    if(currrentKeyTarget === currentAlphabetLow){
        console.log("currect")
        counterGame();
        // start a new update
        backgroundColorKeyRemove(currentAlphabetLow);
        // score plush
        const score = document.querySelector(".score");
        let scoreKey = score.innerText
        let newScore = parseInt(scoreKey);
        let newPlush = newScore + 1;
        score.innerText = newPlush;

    }else{
        console.log("Not currect")
             // minus plush
             const score = document.querySelector(".life");
             let scoreKey = score.innerText
             let newScore = parseInt(scoreKey);
             let newMinus = newScore - 1
             score.innerText = newMinus;
    }

}

function counterGame(){
    let storRandom = randomAlphabet()
    const currentAlphabet = document.querySelector(".currentAlphabet");
    currentAlphabet.innerText = storRandom;
    backgroundColorKey(storRandom.toLowerCase())
}

function playNow(){
    hideSection(".home")
    showSection(".playground")
    counterGame()
}