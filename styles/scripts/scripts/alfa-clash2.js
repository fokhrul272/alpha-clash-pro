
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    const alphabet = getARandomAlphabetById();
    // console.log(alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet);
}