function cleanWord(word) {
  //get word from html 
   const checkWord = document.getElementById("inputWord").value;
   //clean spaces
   const PalindromeWord = checkWord.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    //pass word into checker
    CheckPalindrome(PalindromeWord);
}

function CheckPalindrome(word) {
    //check if the cleaned word is the same as its reverse
    //compare first index and last
    const wordStart = 0;
    const wordEnd = word.length - 1;
    for (let i = 0; i < word.length / 2; i++) {
        if (word[wordStart + i] !== word[wordEnd - i]) {
            return alert(word + " is NOT a palindrome");
        }
    }
    return alert(word + " is a palindrome");
}