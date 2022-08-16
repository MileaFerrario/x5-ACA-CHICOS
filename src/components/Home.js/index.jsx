import React from 'react'
import Portada from "../../assets/img/portada.png"; //ACA VA LA FOTO DE portada,(la larga)
import {Link} from "react-router-dom";

export default function Home () {
    return (
        <div className="Inicio">   
           <Link to="/">
            <h1 > Inicio</h1>
           </Link>
           <Link to="/shows">
            <h1 >Shows</h1>
           </Link>
           <img src={ Portada} alt="/"></img>
        </div>
    )
}

