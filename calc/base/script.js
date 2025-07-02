let expression = ""

const buttons = document.querySelectorAll('button')
const display = document.querySelector('#display')

buttons.forEach(button =>{
    button.addEventListener('click',() =>{
        let val = button.innerText
        if(val === 'C'){
            expression = ""
        }
        else if (val === '←') {
            expression = expression.slice(0, -1)
        }
        else if (val === '=') {
        try {
            const result = eval(expression).toString()
            expression = result
        } catch (err) {
            expression = ""
            display.innerText="ERROR"
            return
        }
        }
        else{
            const operators = ['+', '-', '*', '/']
            const lastChar = expression.slice(-1)
            if (operators.includes(lastChar) && operators.includes(val)) {
                return 
            }
            if (val === '.' && expression.split(/[\+\-\*\/]/).pop().includes('.')) {
                return
            }
            expression += val
        }
        display.innerText = expression
    })
})
