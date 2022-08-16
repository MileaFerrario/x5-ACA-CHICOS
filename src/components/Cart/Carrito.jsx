import React, { useContext } from "react";
import Card from "./fFOTO DEL CARRITOO";
//REVISAR IMPOORT CARRITO
//import { DataContext } from "context/DataProvider";

export const Carrito = () => {
    const value = useContext(DataContext)
    const [menu,setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const tooglefalse = () =>{
        setMenu(false);
    };
    const show1 = menu ? "carritos show" : "carrito";
	const show2 = menu ? "carrito show" : "carrito";


    const resta = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
			}
			setCarrito([...carrito])
		})
	}

    const suma = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
				item.cantidad +=1;
			}
			setCarrito([...carrito])
		})
	}


    const removeShow = id =>{
		if(window.confirm("¿Usted quiere suspender su compra?")){
			carrito.forEach((item, index)=>{
                if( item.id === id){
                    item.cantidad = 1;
					carrito.splice(index, 1)
                 }
                })
                setCarrito([...carrito])
            }     
			}


    return (
  <div className={show1}>
      <div className={show2}>
      <div className="carrito_close" onClick={tooglefalse}>
        <box-icon name="x"></box-icon>
      </div>
      <h2>Tu carrito</h2>
      <div className="carrito_center"></div>
      {

        carrito.length === 0 ? <h2 style={{
            textAlign: "center", fontSize: "3rem"
        }}> Carrito sin entradas </h2> : <>

       {
        carrito.map((show)=>(
            <div className="carrito_item" key={show.id}>
            <img src={show.image.default} alt="show.title"></img>
            <div>
                <h3>{show.title}</h3>
                <p className="price">${show.price}</p>
            </div>
             <div>
                <box-icon className="up-arrow" type="solid" onClick={()=> suma(show.id)}></box-icon>
                <p className="cantidad">{show.cantidad}</p>
                <box-icon name="down-arrow" type="solid" onClick={()=> resta(show.id)}></box-icon>
             </div>
             <div className="remove_item" onClick={()=> removeShow(show.id)}>
                <box-icon name="trash"></box-icon>
             </div>
        </div>
        ))
      }
      </>
    }
      <div className="carrito__footer">
        <h3>Total: ${total}</h3>
        <button className="btn">Pagar</button>
      </div>
    </div>
      
  </div>
    )
    };
    
