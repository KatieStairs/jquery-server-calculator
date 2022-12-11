console.log('in server.js');

const express = require('express');
const bodyParser = require('body-parser');
const e = require('express');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('server is listening')
})

let equationFromInput;
let total;
let objectArray = []; 

app.post('/calculationBundle', (req,res) => {
    console.log(req.body);
    equationFromInput = req.body;
    calculateEquation(equationFromInput)
    res.sendStatus(201)
})

function calculateEquation(equationFromInput) {
    console.log('in calculate equation')
    let numOne = Number(equationFromInput.inputOne);
    let numTwo = Number(equationFromInput.inputTwo);
        
    console.log(numOne, numTwo)
    if (equationFromInput.operator === '+'){
        total = numOne + numTwo;
        console.log('in total', total);
    } 
    if (equationFromInput.operator === '-'){
        total = numOne - numTwo;
        console.log('in total', total);
    }
    if (equationFromInput.operator === '*'){
        total = numOne * numTwo;
        console.log('in total', total);
    }
    if (equationFromInput.operator === '/'){
        total = numOne / numTwo;
        console.log('in total', total);
    }
    equationFromInput.answer = total;
    console.log(equationFromInput)
    objectArray.push(equationFromInput);
    console.log(objectArray)
}

app.get('/calculateEquation', (req,res) => {
    res.send(objectArray)
})
