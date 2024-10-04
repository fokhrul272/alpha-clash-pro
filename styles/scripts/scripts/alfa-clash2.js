

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    // console.log('playyer pressed', playerPressed);


    const currentAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetElement = currentAlphabet.innerText;
    const expectedAlphabet = currentAlphabetElement.toLowerCase();
    // console.log(expectedAlphabet);


    if(playerPressed === expectedAlphabet){
        console.log('you got a point');
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you miss your life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
    }

}


document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame(){
    const alphabet = getARandomAlphabetById();
    // console.log(alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet);
}






function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
    
}