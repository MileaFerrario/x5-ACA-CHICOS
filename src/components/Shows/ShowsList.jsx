import React, { useContext } from "react";
import { DataContext} from "./components/context/DataProviderHooks";
import ShowItem from "./ShowItem";
//----------------------fijarse re corregir buttom a bottom, no confunfirse----
//le agregue el export, si falla saquenlo
export const ShowsList = () => {
    const value = useContext(DataContext)
    const [shows] = value.shows;
//FIJENSE SI EL CONSOLE LOG HAY QUE SACARLO
    console.log(shows)
  //intenter ver si a title cambiarlo por> produ
    return (
        <div>
            <h1 className="title"> Eventos disponibles</h1>
            <div className="shows">
                {
                    shows.map(show => (
                        <ShowItem
                            key={show.id}
                            title={show.title}
                            image={show.image}
                            category={show.category}
                            price={show.price}
                            id={show.id}
                            cantidad={show.cantidad}
                        />
                    ))
                }
            </div>
        </div>
    );
};
export default ShowsList;