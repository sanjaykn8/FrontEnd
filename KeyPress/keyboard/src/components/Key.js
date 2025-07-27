// Key.js
import './key.css'

function getKeyType(value) {
    if (/^[a-zA-Z]$/.test(value)) return 'alphabet'
    if (/^[0-9]$/.test(value)) return 'number'
    return 'special'
}

export default function Key({ value, pressedKey }) {
    const isPressed = (value === 'Space' ? ' ' : value).toLowerCase() === pressedKey?.toLowerCase()
    const keyType = getKeyType(value)

    return (
        <div className={`key ${keyType} ${isPressed ? 'active' : ''}`}>
            {value}
        </div>
    )
}
