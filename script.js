// const home = document.querySelector(".home");
// const playground = document.querySelector(".playground");
// const score = document.querySelector(".score");
// function playNow(){
//     home.classList.add("hidden");
//     home.style.transtion
//     playground.classList.remove("hidden");
// }



function playNow(){
    hideSection(".home")
    showSection(".playground")
    counterGame()
}

function counterGame(){
    let storRandom = randomAlphabet()
    const currentAlphabet = document.querySelector(".currentAlphabet");
    currentAlphabet.innerText = storRandom;
    backgroundColorKey(storRandom.toLowerCase())
}
