import { useEffect, useState } from 'react'
import Keyboard from './components/Keyboard'
import './App.css'

function App() {
  const [pressedKey, setpressedKey] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      setpressedKey(e.key)
    }
    const handleKeyUp = (e) => {
      setpressedKey(null)
    }

  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)

  return () => {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('keyup', handleKeyUp)
  }
}, [])

return(
  <div className='App'>
    <Keyboard pressedKey={pressedKey}/>
  </div>
)
}

export default App