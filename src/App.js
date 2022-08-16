import React from "react"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ShowsList from "./components/Shows/ShowList";
import "boxicons";
//import './App.css';
import { Routes, Route } from "react-router-dom";
import { Carrito } from "./components/Cart/Carrito";

function App () {
  return(
    <div className="App">
      <Header />
      <Carrito/>
      <Routes>
        <Route path="/home" exact component={Home}/>
        <Route path="/shows" exact component={ShowsList}/>
      </Routes>

    </div>
    
  )
}
export default App; 
//ACA SUPUESTAMENTE RROR EN HOME Y SHOWLIST, REVISAR
