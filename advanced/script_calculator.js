let displayNum1 = "";
let displayNum2 = "";
let result = "";
let operator = "";
let displayElem = document.querySelector("#display");

function clr(){
    displayNum1 = "";
    displayNum2 = "";
    result = "";
    operator = "";
    displayElem.innerText = "0";
}

function press(valStr){
    if(operator==""){
        displayNum1 += valStr;
        console.log(displayNum1);
        displayElem.innerText = `${displayNum1}`;
    }else{
        displayNum2 += valStr;
        console.log(displayNum2);
        displayElem.innerText = `${displayNum2}`;
    }
}

function setOP(operStr){
    if(displayNum2 !==""){
        operator = operStr;
        displayNum1 = displayNum2;
        displayNum2 = "";
    }else{
        operator += operStr;
    }
}

function calculate(){
    switch(operator){
        case "+":
            result = parseInt(displayNum1) + parseInt(displayNum2);
            displayElem.innerText = `${result}`;
            break;
        case "-":
            result = parseInt(displayNum1) - parseInt(displayNum2);
            displayElem.innerText = `${result}`;
            break;
        case "*":
            result = parseInt(displayNum1) * parseInt(displayNum2);
            displayElem.innerText = `${result}`;
            break;
        case "/": 
            result = parseInt(displayNum1) / parseInt(displayNum2);
            console.log(result);
            displayElem.innerText = `${result}`;
            break;
        case "":
            displayElem.innerText = "0";
            break;
        default:
            displayElem.innerText = "NaN";
    }
}