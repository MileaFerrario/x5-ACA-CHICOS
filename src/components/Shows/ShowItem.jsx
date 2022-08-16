//CHEKEAR DE SI YA BORRAR TODO LO QUE SON DATOS DE LOS SHOWS YA QUE ESTA TODO EN OTRA CARPETA
import React from "react" 
//import {Link} from "react-router-dom";
import { DataContext } from "../context"; //tiene que estar enlasado al dataprovider
//aca dentro de esta funcion le borre el key
const ShowItem = ({ title,image,category,price, id}) => {
    {
     const value = useContext (DataContext);
     const addCarrito = value.addCarrito;   
    }
  return(
    <div>
        <div className="show">
                 <a href="#">
                   <div className="show__img">
                     <img src={image.default} alt={title}/>
                   </div>
                  </a>
                </div>
            <div className="show__footer">
              <h1>{title} </h1>
              <p> {category}</p>
              <p className="price">${price}</p>
          </div>
          <div className="buttom">
            <button className="btn " onClick={() => addCarrito(id)}>agregra al carrito carrito</button>
            <div>
              <a href="#" className="btn"> </a> 
            </div>
          </div>
s
    </div>
  );
};//OJO CON EL DIV QUE ABARCA TODO, QUIZAS NO HAY QUE PONERLO
export default ShowItem