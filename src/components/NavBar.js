import React from 'react'
import "./styles.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import 'materialize-css/dist/css/materialize.min.css'



const NavBar = () => {
    return (
        <nav>
        <div class="nav-wrapper grey">
          <a href="#" class="brand-logo right"><FontAwesomeIcon icon={faShoppingCart}/></a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="sass.html">Inicio</a></li>
            <li><a href="badges.html">Contactanos</a></li>
            <li><a href="collapsible.html">Preguntas</a></li>
          </ul>
        </div>
      </nav>

    )
    
}





export default NavBar
