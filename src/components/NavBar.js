import React from 'react'
import "./styles.css"

function NavBar() {
    return (
       <ul className="navContainer">
           <li className="list"><a href=".navbar.js"/>Inicio</li>
           <li className="list"><a href="#hello"/>Preguntas</li>
           <li className="list"><a href="#hi"/>Contactanos</li>
       </ul>
    )
}

export default NavBar
