import Key from './Key'
import './Keyboard.css'

const layout =[
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
    ['Space']
]

export default function Keyboard({ pressedKey}) {
    return(
        <div className="keyboard">
            {
                layout.map((row, i) => (
                    <div key={i} className="row">
                        {row.map((key,j) => (
                            <Key key={j} value={key} pressedKey={pressedKey}/>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}