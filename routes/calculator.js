const express = require('express');
const calRouter = express.Router();

calRouter.get('/calculator',(req,res)=>{
    res.render('calculator', {title: 'Calculator'});
})

calRouter.post('/calculate', (req, res) => {
    const {firstNumber, secondNumber, operator} = req.body;

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if(!firstNumber || !secondNumber || !operator) {
        res.render('calculator', {title: 'Calculator', error: 'Please provide all the fields'});
    }

    if(isNaN(firstNumber) || isNaN(secondNumber)) {
        res.render('calculator', {title: 'Calculator', error: 'Please provide valid numbers'});
    }

    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return res.render('calculator', { title: 'Calculator', error: 'Cannot divide by zero' });
            }
            result = num1 / num2;
            break;
        case 'average':
            result = (num1 + num2) / 2;
            break;
        default:
            return res.render('calculator', { title: 'Calculator', error: 'Invalid operator selected' });
    }

    // Render the calculator page with the result
    res.render('calculator', { title: 'Calculator', result });
})

module.exports = calRouter;