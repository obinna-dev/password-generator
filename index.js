let char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0","1","2","3","4","5","6","7","8","9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",";","'","<",",",">",".","?","/"]
let resultOne = document.querySelector("#result-1")
let resultTwo = document.querySelector("#result-2")
let resultThree = document.querySelector("#result-3")
let resultFour = document.querySelector("#result-4")



let shuffleArray = char => {
    for (let i = char.length - 1; i > 0; i--)   {
        let j = Math.floor( Math.random() * (i + 1));
        let temp = char[i];
        char[i] = char[j];
        char[j] = temp;
    }
    return char
};

shuffleArray(char)
















// function generatePasswords()    {
//     generatePassOne();
//     generatePassTwo();
//     generatePassThree();
//     generatePassFour();
// }




// ========================================================================================================================================



// SHORTER CODE - STILL NEED TO IMPROVE


// function generatePassOne()    {
//     let passwordOne = char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)];
//     resultOne.textContent = passwordOne
// }

// function generatePassTwo()    {
//     let passwordTwo = char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)];
//     resultTwo.textContent = passwordTwo
// }

// function generatePassThree()    {
//     let passwordThree = char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)];
//     resultThree.textContent = passwordThree
// }

// function generatePassFour()    {
//     let passwordFour = char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)] + char[Math.floor(Math.random() * char.length)];
//     resultFour.textContent = passwordFour
// }



// ========================================================================================================================================



// THIS IS A LONG ASS VERSION  ☺️


// function generatePassOne() {
//     let charOne = char[Math.floor(Math.random() * char.length)]
//     let charTwo = char[Math.floor(Math.random() * char.length)]
//     let charThree = char[Math.floor(Math.random() * char.length)]
//     let charFour = char[Math.floor(Math.random() * char.length)]
//     let charFive = char[Math.floor(Math.random() * char.length)]
//     let charSix = char[Math.floor(Math.random() * char.length)]
//     let charSeven = char[Math.floor(Math.random() * char.length)]
//     let charEight = char[Math.floor(Math.random() * char.length)]
//     let charNine = char[Math.floor(Math.random() * char.length)]
//     let charTen = char[Math.floor(Math.random() * char.length)]
//     let charEleven = char[Math.floor(Math.random() * char.length)]
//     let charTwelve = char[Math.floor(Math.random() * char.length)]
//     resultOne.textContent = charOne+charTwo+charThree+charFour+charFive+charSix+charSeven+charEight+charNine+charTen+charEleven+charTwelve
// }

// function generatePassTwo() {
//     let charOne = char[Math.floor(Math.random() * char.length)]
//     let charTwo = char[Math.floor(Math.random() * char.length)]
//     let charThree = char[Math.floor(Math.random() * char.length)]
//     let charFour = char[Math.floor(Math.random() * char.length)]
//     let charFive = char[Math.floor(Math.random() * char.length)]
//     let charSix = char[Math.floor(Math.random() * char.length)]
//     let charSeven = char[Math.floor(Math.random() * char.length)]
//     let charEight = char[Math.floor(Math.random() * char.length)]
//     let charNine = char[Math.floor(Math.random() * char.length)]
//     let charTen = char[Math.floor(Math.random() * char.length)]
//     let charEleven = char[Math.floor(Math.random() * char.length)]
//     let charTwelve = char[Math.floor(Math.random() * char.length)]
//     resultTwo.textContent = charOne+charTwo+charThree+charFour+charFive+charSix+charSeven+charEight+charNine+charTen+charEleven+charTwelve
// }

// function generatePassThree() {
//     let charOne = char[Math.floor(Math.random() * char.length)]
//     let charTwo = char[Math.floor(Math.random() * char.length)]
//     let charThree = char[Math.floor(Math.random() * char.length)]
//     let charFour = char[Math.floor(Math.random() * char.length)]
//     let charFive = char[Math.floor(Math.random() * char.length)]
//     let charSix = char[Math.floor(Math.random() * char.length)]
//     let charSeven = char[Math.floor(Math.random() * char.length)]
//     let charEight = char[Math.floor(Math.random() * char.length)]
//     let charNine = char[Math.floor(Math.random() * char.length)]
//     let charTen = char[Math.floor(Math.random() * char.length)]
//     let charEleven = char[Math.floor(Math.random() * char.length)]
//     let charTwelve = char[Math.floor(Math.random() * char.length)]
//     resultThree.textContent = charOne+charTwo+charThree+charFour+charFive+charSix+charSeven+charEight+charNine+charTen+charEleven+charTwelve
// }

// function generatePassFour() {
//     let charOne = char[Math.floor(Math.random() * char.length)]
//     let charTwo = char[Math.floor(Math.random() * char.length)]
//     let charThree = char[Math.floor(Math.random() * char.length)]
//     let charFour = char[Math.floor(Math.random() * char.length)]
//     let charFive = char[Math.floor(Math.random() * char.length)]
//     let charSix = char[Math.floor(Math.random() * char.length)]
//     let charSeven = char[Math.floor(Math.random() * char.length)]
//     let charEight = char[Math.floor(Math.random() * char.length)]
//     let charNine = char[Math.floor(Math.random() * char.length)]
//     let charTen = char[Math.floor(Math.random() * char.length)]
//     let charEleven = char[Math.floor(Math.random() * char.length)]
//     let charTwelve = char[Math.floor(Math.random() * char.length)]
//     resultFour.textContent = charOne+charTwo+charThree+charFour+charFive+charSix+charSeven+charEight+charNine+charTen+charEleven+charTwelve
// }