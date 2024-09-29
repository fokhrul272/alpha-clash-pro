function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function  showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

function getARandomAlphabet(){
    //get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxzy';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    //get a random index between 0-25
}