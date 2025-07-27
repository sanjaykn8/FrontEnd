import { useState } from "react";

function AboutPopup(){
    const [show, setShow] = useState("")

    return(
        <div style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px'
        }}>
            <button onClick={() => setShow(!show)}>About</button>
            {show && (
                <div style={{
                    marginTop: '0.5rem',
                    color: "black",
                    fontFamily: "cursive",
                    background: '#fff',
                    padding: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '0.5rem'
                }}>
                    <p><strong>Name: </strong>KN</p>
                </div>
            )}
        </div>
    )
}

export default AboutPopup