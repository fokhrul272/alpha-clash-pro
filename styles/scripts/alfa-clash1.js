
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    if(playerPressed === 'Escape'){
        gameOver();
    }


    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet  = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        console.log('you got a point');
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        


        // ....................................
        //update the score:
        //1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // //increase the score
        // const newScore = currentScore + 1;
        
        // //show the score
        // currentScoreElement.innerText = newScore;

        //start the updated score
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }

    else{
        console.log('you missed life');

    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);

    if(updatedLife === 0){
        gameOver();
    }


        //step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // //step-2: reduce the life count
        // const newLife = currentLife - 1;

        // //step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);


function continueGame(){
    //generate a random alphabet
   const alphabet = getARandomAlphabet();
//   console.log('your random alphabet', alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
        currentAlphabet.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}



function play(){
    //hide everything show only the playground
    hideElementById('home-screen');
    showElementById('play-ground');
    hideElementById('final-score');

    // reset score and life aaa
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}



function gameOver(){
        hideElementById('play-ground');
        showElementById('final-score');

        //update the final score
        //1. get the final score
        const lastScore = getTextElementValueById('current-score');
        console.log(lastScore);
        setTextElementValueById('last-score', lastScore);


        const currentAlphabet = getElementTextById('current-alphabet');
        // console.log(currentAlphabet);
        removeBackgroundColorById(currentAlphabet);
}



