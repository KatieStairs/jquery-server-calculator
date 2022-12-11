// console.log('in client.js')
$(document).ready(onReady);

function onReady(){
    console.log('jquery loaded')
    $('#equalsButton').on('click', bundleSubmitButton)
    $('#clearButton').on('click', clearInputs)
}

let clickPlusButton;

let calculationBundle = [{
    inputOne: '',
    inputTwo: '',
    operator: '',
    answer: ''
}]

function bundleSubmitButton(){
    let numOne= $('#numOne').val();
    let numTwo= $('#numTwo').val();
    clickPlusButton = $('#plusButton').text()
    calculationBundle[0].inputOne = numOne;
    calculationBundle[0].inputTwo = numTwo;
    calculationBundle[0].operator = clickPlusButton;

    console.log(calculationBundle)
    
    $.ajax({
        url:'/calculationBundle',
        method: 'POST',
        data: calculationBundle[0]
    }).then((response) => {
        console.log(response);
    })
    $.ajax({
        url:'/calculateEquation',
        method: 'GET',
    }).then((response) => {
        console.log(response);
    })
}

function clearInputs(){
    $('#numOne').val(' ');
    $('#numTwo').val(' ');
}
