let characterAmountRange = document.getElementById("character-amount-range")
let characterAmountNumber = document.getElementById("character-amount-number")
let form = document.getElementById("passWordGeneratorForm")
let uppercaseElement = document.getElementById("uppercase")
let numbersElement = document.getElementById("numbers")
let symbolsElement = document.getElementById("symbols")
let UPPERCASE_CHAR = arrayFromLowToHigh(65, 90)
let LOWERCASE_CHAR = arrayFromLowToHigh(97, 122)
let NUMBER_CHAR = arrayFromLowToHigh(48, 57)
let SYMBOL_CHAR = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))
let resultOne = document.getElementById("result-1")
let resultTwo = document.getElementById("result-2")
let resultThree = document.getElementById("result-3")
let resultFour = document.getElementById("result-4")

characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)


// prevents submit button from refreshing page (prevent default) 
form.addEventListener("submit", e => {
    e.preventDefault()
    let characterCount = characterAmountNumber.value
    let includeUpperCase = uppercaseElement.checked
    let includeNumbers = numbersElement.checked
    let includeSymbols = symbolsElement.checked
    let passWord = generatePassword(characterCount, includeUpperCase, includeNumbers, includeSymbols)
    resultOne.textContent = passWord
    resultTwo.textContent = passWord
    resultThree.textContent = passWord
    resultFour.textContent = passWord
})

function generatePassword(characterCount, includeUpperCase, includeNumbers, includeSymbols) {
    let characterCodes = LOWERCASE_CHAR
    if (includeUpperCase) characterCodes = characterCodes.concat(UPPERCASE_CHAR)
    if (includeNumbers) characterCodes = characterCodes.concat(NUMBER_CHAR)
    if (includeSymbols) characterCodes = characterCodes.concat(SYMBOL_CHAR)
    
    let passwordCharacters = []
    for (let i = 0; i < characterCount, i++;)    {
        let characters = characterCodes[Math.floor(Math.random() * characterCodes.length)]
        passwordCharacters.push(string.fromCharCode(characters))
    }
    return passwordCharacters.join("")
}

function arrayFromLowToHigh(low, high) {
    let array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

// links character count input and sliders
function syncCharacterAmount(e) {
    let value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}




































// ========================================================================================================================================



// SHORTER CODE - STILL NEED TO IMPROVE

// let char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0","1","2","3","4","5","6","7","8","9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",";","'","<",",",">",".","?","/"]
// let resultOne = document.querySelector("#result-1")
// let resultTwo = document.querySelector("#result-2")
// let resultThree = document.querySelector("#result-3")
// let resultFour = document.querySelector("#result-4")

// function generatePasswords()    {
//     generatePassOne();
//     generatePassTwo();
//     generatePassThree();
//     generatePassFour();
// }


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

// let char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0","1","2","3","4","5","6","7","8","9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",";","'","<",",",">",".","?","/"]
// let resultOne = document.querySelector("#result-1")
// let resultTwo = document.querySelector("#result-2")
// let resultThree = document.querySelector("#result-3")
// let resultFour = document.querySelector("#result-4")

// function generatePasswords()    {
//     generatePassOne();
//     generatePassTwo();
//     generatePassThree();
//     generatePassFour();
// }


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