// console.log('in client.js')
$(document).ready(onReady);

function onReady(){
    console.log('jquery loaded')
    $('#equalsButton').on('click', bundleSubmitButton)
    $('#clearButton').on('click', clearInputs)
    $('#plusButton').on('click', addOperator)
    $('#minusButton').on('click', minusOperator)
    $('#multiplyButton').on('click', multiplyOperator)
    $('#divideButton').on('click', divideOperator)
}

let clickPlusButton;
let clickMinusButton;
let clickMultiplyButton;
let clickDivideButton;
let CalculationArray;

let calculationBundle = [{
    inputOne: '',
    inputTwo: '',
    operator: '',
    answer: ''
}]

function bundleSubmitButton(){
    let numOne= $('#numOne').val();
    let numTwo= $('#numTwo').val();

    calculationBundle[0].inputOne = numOne;
    calculationBundle[0].inputTwo = numTwo;

    console.log(calculationBundle)
    
    $.ajax({
        url:'/calculationBundle',
        method: 'POST',
        data: calculationBundle[0]
    }).then((response) => {
        console.log(response);
    })

    renderPastEquations();
}

function addOperator(){
    calculationBundle[0].operator = '+';
}

function minusOperator(){
    calculationBundle[0].operator = '-';
}

function multiplyOperator(){
    calculationBundle[0].operator = '*';
}

function divideOperator(){
    calculationBundle[0].operator = '/';
}

function renderPastEquations (){
    $.ajax({
        url:'/calculateEquation',
        method: 'GET',
    }).then((response) => {
        console.log(response);
        calculationArray = response;
    
    $('#answer').text(calculationArray[calculationArray.length -1].answer)

    $('ul').empty()
    for (calculation of calculationArray){
        $('ul').append(`
        <li>${calculation.inputOne} ${calculation.operator} ${calculation.inputTwo} = ${calculation.answer}</li>
        `)
        }
    })
}

function clearInputs(){
    $('#numOne').val('');
    $('#numTwo').val('');
}
