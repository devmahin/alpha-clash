function hideSection(className){
    let name = document.querySelector(className);
    name.classList.add("hidden");
}
function showSection(className){
    let name = document.querySelector(className);
    name.classList.remove("hidden");
}

function randomAlphabet(){
    const capitalLettersString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arrayLetter = capitalLettersString.split("")
    // random number 
    let random = Math.round(Math.random() * 25)
    return arrayLetter[random]
}

function backgroundColorKey (keyboard){
    const randomKeyColor = document.getElementById(keyboard);
    // console.log(randomKeyColor)
    randomKeyColor.classList.add("bg-amber-700")
}
function backgroundColorKeyRemove (keyboard){
    const randomKeyColor = document.getElementById(keyboard);
    // console.log(randomKeyColor)
    randomKeyColor.classList.remove("bg-amber-700")
}