const wordLookUp = (word, arr) => {
    const horizontalJoin = arr.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
};


const reverseWordLookUp = (word, arr) => {
    const horizontalJoin = arr.map(ls => ls.reverse().join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
};

const transpose = (inputArr) => {
   // transpose array
   let array = [];
   for (let i =  0; i < inputArr[0].length; i++) {
     array.push([]);
   }
   for (let x = 0; x < inputArr.length; x++) {
     for (let y = 0; y < inputArr[x].length; y++) {
       array[y][x]  = inputArr[x][y];
     }
   }
   return array;
}

const wordSearch = (letters, word) => { 
    // Checks if word is written horizontally
    if (wordLookUp(word, letters)) {
        return true;
    }

    // Checks if word is written horizontally in reverse 
    if (reverseWordLookUp(word, letters)) {
        return true;
    }

    // Checks if word is written vertically
    letters = transpose(letters);

    if (wordLookUp(word, letters)) {
        return true;
    }
    // Checks if word is written vertically in reverse 
    if (reverseWordLookUp(word, letters)) {
        return true;
    }

    return false;
}


module.exports = wordSearch