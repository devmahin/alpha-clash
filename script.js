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
        // update score
        let updateScore =  scoreUpdate(".score");
        let currenScore = updateScore + 1;
        setScoreUpdate(".score", currenScore)
    }else{
        console.log("Not currect")
             // minus plush
               // update score
        let updateScore =  scoreUpdate(".life");
        let currenScore = updateScore - 1;
        setScoreUpdate(".life", currenScore)
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