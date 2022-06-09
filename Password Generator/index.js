const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const clipboardEl = document.getElementById('clipboard');
const generateBtn = document.getElementById('generate');



const randomFunction = {
    lower: generateRandomLowerCaseLetter,
    upper: generateRandomUpperCaseLetter,
    number: generateRandomNumbers,
    symbol: generateRandomSymbols
}

clipboardEl.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea');
    const pasw = resultEl.innerText;

    if(!pasw){
        return;
    }else{
        textarea.value = pasw;
    }
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
});

generateBtn.addEventListener('click', ()=>{
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
 
    resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
    
});

function generatePassword(length, lower, upper, number, symbol){
    let password = '';

    let checkedCount = lower + upper + number + symbol;
    
    const checkedArr = [{lower}, {upper}, {number}, {symbol}]
                        .filter(item=> Object.values(item)[0]);

    if(checkedCount === 0){
        return '';
    }

    for(let i = 0 ; i < length; i+= checkedCount){
        checkedArr.forEach(check => {
            const funcName = Object.keys(check)[0]; 

            password += randomFunction[funcName]();
        });
    }
    const finalPass = password.slice(0, length);
    return finalPass;
}

function generateRandomLowerCaseLetter(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateRandomUpperCaseLetter(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generateRandomNumbers(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateRandomSymbols(){
    const symbols = '!@#$%^&*(){}[]=<>/.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
    