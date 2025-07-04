import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav style={{
            padding: '1rem',
            background:'#eee',
            fontFamily: "monospace",
            fontStyle:"italic",
            fontSize:"18px" }}>
            <Link to="/calc" style={{marginRight: '1rem'}}>Calculator</Link>
            <Link to="/convert" >Converter</Link>
        </nav>
    )
}

export default NavBar