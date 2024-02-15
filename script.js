document.addEventListener("keyup", matchingKeyboard);
function matchingKeyboard(e){
    if(e.key === "Escape"){
        score()
    }
    // console.log(e.key)
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
        if(updateScore === 0){
            score()
        }
    }
}


function counterGame(){
    let storRandom = randomAlphabet()
    const currentAlphabet = document.querySelector(".currentAlphabet");
    currentAlphabet.innerText = storRandom;
    backgroundColorKey(storRandom.toLowerCase())
}

function playNow(){
    hideSection(".home");
    showSection(".playground");
    showSection(".scoreFooter");
    // hideSection(".playground")
    // score
    setScoreUpdate(".life", 5);
    setScoreUpdate(".score", 0);

    counterGame()
}



function score(){
    // let scoreFooter = document.querySelector(".scoreFooter");
    hideSection(".playground");
    showSection(".scoreFooter");

    // curren score footer
    let secUpdate =  scoreUpdate(".score");
    // console.log(secUpdate)
    setScoreUpdate(".game-score", secUpdate)

    // getElementTextById
    const getElement = getElementTextById("currentAlphabet")
    // console.log(getElement)
    let getElem = getElement.toLowerCase();
    console.log(getElem)
    backgroundColorKeyRemove(getElem)
   
}


function playAgain(){
    playNow();
    showSection(".scoreFooter");


    // result score

}
