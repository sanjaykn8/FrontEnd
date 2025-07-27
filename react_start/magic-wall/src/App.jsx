import { useState } from 'react'
import './App.css'

function App() {
  const [broken, setBroken] = useState({book : false, clock : false, light : false})
  const [lightOn, setLightOn] = useState(false)
  const [showInfo, setShowInfo] = useState(null)

  function breakItem(item) {
    setBroken(prev => ({...prev, [item]:true}))
  }

  return(
    <div className='wall'>
      <div className='shelf'>
        {!broken.book && (
          <div className='item book' 
          onClick={() => setShowInfo("book")}
          onContextMenu={e => {
            e.preventDefault()
            breakItem("book")
          }}>
            📘
          </div>
        )
        }
        {!broken.clock && (
          <div className='item clock'
          onClick={() => setShowInfo("clock")}
          onContextMenu={e => {
            e.preventDefault()
            breakItem("clock")
          }}>
            ⏰
          </div>
        )}
        {!broken.light && (
          <div className={`item light ${lightOn?'on':''}`}
          onClick={() => setLightOn(!lightOn)}
          onContextMenu={e => {
            e.preventDefault()
            breakItem("light")
          }}>
            💡
            </div>
        )}
      </div>
      {showInfo && (
        <div className='popup' 
        onClick={() => setShowInfo(null)}>
          <p>
            {
              showInfo === "book" ? "Secrets to your heart" :
              showInfo === "clock" ? "Your time is running out" :
              "Flick!!"
            }
          </p>
          <small>Click to close!</small>
        </div>
      )}
    </div>
  )
}

export default App
