import React from 'react'
import "./styles.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import 'materialize-css/dist/css/materialize.min.css'
import {Link} from "react-router-dom"



const NavBar = () => {
    return (
        <nav>
        <div className="nav-wrapper grey">
          <a href="#" className="brand-logo right"><FontAwesomeIcon icon={faShoppingCart}/></a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">

          <li> <Link to={"/"}> Inicio </Link></li>
          <li> <Link to={"/detail"}> Detalles </Link></li>
           
          </ul>
        </div>
      </nav>

    )
    
}





export default NavBar
