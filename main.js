let operator = '';
let previousValue = '';
let currentValue = '';


document.addEventListener("DOMContentLoaded", function(){
    //Store all components on HTML in this JS file
    let clear = document.querySelector(".btn.clear");
    let equal = document.querySelector(".btn.equal");
    let decimal = document.querySelector(".btn.decimal");

    let numbers = document.querySelectorAll(".btn.number");
    let operators = document.querySelectorAll(".btn.operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function (e){
        handleNumber (e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = '';
        currentScreen.textContent = '';
    })

    equal.addEventListener("click", function(){
        if (currentValue != '' && previousValue != ''){
            calculate();
            previousScreen.textContent = '';
            if(previousValue.length <= 5){
                currentScreen.textContent = previousValue;
            } else{
                currentScreen.textContent = previousValue.slice(0,5) + "...";
            }
        }
        
    })
})

function handleNumber(num){
    console.log(num);
    if (currentValue.length <= 5){
    currentValue += num;
    }
}

function handleOperator(op){
    console.log(op);
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+"){
        previousValue += currentValue;
    } else if (operator === "-"){
        previousValue -= currentValue;
    }else if (operator === "X"){
        previousValue *= currentValue;
    } else{
        previousValue /= currentValue;
    }

    console.log("Result: ", previousValue);  // Log the result after calculation
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();

}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;

}

function addDecimal(){
    if (!currentValue.includes(".")){
        current += '.';

    }
}