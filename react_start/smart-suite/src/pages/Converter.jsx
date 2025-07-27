import { useState } from 'react'
import './Converter.css'

function Converter() {
  const [input, setInput] = useState("")
  const [unit, setUnit] = useState("km")
  const [result, setResult] = useState("")

  const handleConvert = () => {
    const value = parseFloat(input)
    if (isNaN(value)) {
      setResult("Invalid input")
      return
    }

    if (unit === "km") {
      setResult(`${(value * 0.621371).toFixed(3)} miles`)
    } else {
      setResult(`${(value / 0.621371).toFixed(3)} km`)
    }
  }

  return (
    <div className="converter-container">
      <h2>Unit Converter</h2>
      <input
        type="text"
        placeholder={`Enter value in ${unit}`}
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <select value={unit} onChange={e => setUnit(e.target.value)}>
        <option value="km">Kilometers → Miles</option>
        <option value="mi">Miles → Kilometers</option>
      </select>
      <button onClick={handleConvert}>Convert</button>
      <div className="result">{result}</div>
    </div>
  )
}

export default Converter
