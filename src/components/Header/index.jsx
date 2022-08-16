import React, {useContext}from "react"
import { Link } from "react-router-dom";
import { DataContext } from "../context";


const Header = () => {

   const value = useContext(DataContext);
   const [menu, setMenu] = value.menu;
   const[carrito] = value.carrito;
   
   
   const toogleMenu = () =>{
      setMenu(!menu)
   }
    return (// ----------------ACA VA EL MENU 
       <header>
        <Link to="/">
         <div className="logo">
          <img src={require("../../assets/img/Logo.png")} alt="logo" width="150" />
         </div>
        </Link>
        <div className-="menu"> 
            <box-icon name="menu"></box-icon> 
        </div>
          <a href="#"></a>
       <ul>
         <li>
            <Link to="/" >INICIO</Link>
         </li>
         <li> 
         <Link to="/shows">SHOWS</Link>
         </li>
         </ul> 
       <div className="cart" onClick={toogleMenu}> 
        <box-icon name="cart"></box-icon> 
        <span className="item__total"> {carrito.lenght}</span> 
      </div> 
       </header>
    );
};
//---------------------- EL CART ES EL CARRITO DE COMPRA

export default Header