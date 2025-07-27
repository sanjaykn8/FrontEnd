import { useState } from 'react'
import './App.css'

function App() {
  const [expression, setExpression] = useState("")

  function handleClick(val){
    const operators = ['+', '-', '*', '/']

    if (val ==="C"){
      setExpression("")
      return
    }

    if(val === "←"){
      setExpression(prev => prev.slice(0, -1))
      return
    }

    if(val === "="){
      try{
        const result = eval(expression).toString()
        setExpression(result)
      }
      catch(err){
        setExpression("ERROR")
      }
      return
    }
    const lastChar = expression.slice(-1)
    if(operators.includes(lastChar) && operators.includes(val))
      return
    if(val === '.' && expression.split(/[\+\-\*\/]/).pop().includes('.'))
      return
    setExpression(prev => prev+val)
  }

  return (

    <div className="calculator">
      <div className="display">
        {
        expression || "0"
        }
      </div>

      <div className="buttons">
                  {
          ["7", "8", "9", "/",
          "4", "5", "6", "*",
          "1", "2", "3", "-",
          "0", ".", "=", "+",
          "←", "C"].map((val) => (
            <button key={val} onClick={() => handleClick(val)}>
              {val}
            </button>
          ))
        }
      </div>

    </div>
  )
}

export default App
