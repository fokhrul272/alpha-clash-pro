
function continueGame(){
    //generate a random alphabet
   const alphabet = getARandomAlphabet();
//    console.log('your random alphabet', alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
        currentAlphabet.innerText = alphabet;
    
    //set background color
    setBackgroundColorById(alphabet);

}



function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}







