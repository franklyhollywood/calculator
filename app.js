// grab dom elements

// set event listeners on each button, do math, and update DOM

import { add, subtract, multiply, divide } from './utilities.js'

//ADDITION
const num1 = document.getElementById('input1');
const num2 = document.getElementById('input2');
const btn = document.getElementById('button-add');
const result = document.getElementById('result1');


btn.addEventListener('click', () => {
    result.textContent = add(Number(input1.value), Number(input2.value));
    //num1.value = '';
    //num2.value = '';
});


//SUBTRACTION
const num3 = document.getElementById('input3');
const num4 = document.getElementById('input4');
const btn2 = document.getElementById('button-subtract');
const result2 = document.getElementById('result2');


btn2.addEventListener('click', () => {
    result2.textContent = subtract(Number(input3.value), Number(input4.value));
    //num1.value = '';
    //num2.value = '';
});


//MULTIPLY
const num5 = document.getElementById('input5');
const num6 = document.getElementById('input6');
const btn3 = document.getElementById('button-multiply');
const result3 = document.getElementById('result3');


btn3.addEventListener('click', () => {
    result3.textContent = multiply(Number(input5.value), Number(input6.value));
    //num1.value = '';
    //num2.value = '';
});



//DIVIDE
const num7 = document.getElementById('input7');
const num8 = document.getElementById('input8');
const btn4 = document.getElementById('button-divide');
const result4 = document.getElementById('result4');


btn4.addEventListener('click', () => {
    result4.textContent = divide(Number(input7.value), Number(input8.value));
    //num1.value = '';
    //num2.value = '';
});