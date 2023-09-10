import React, { useReducer, reducer } from "react";
import { Link } from 'react-router-dom'

const Card = ({ name, username, id }) => {

  const initialState = {
    dentistas: [
      { name: "Gerardo HuevosLargos",userName: "Gerardo",id: 1 },
      { name: "Marcela AgachateYConocela",userName: "Marcela",id: 2 },
      { name: "Greogrio DelOjoGiratorio",userName: "Gregorio",id: 3 },
      { name: "Victor Gutierrez",userName: "Victor",id: 4 },
      { name: "Paola Nobile",userName: "Paola",id: 5 },
      { name: "Sabrina Pena",userName: "Sabrina",id: 6 },
    ],
  }

  const enlace = [
    {titulo: 'Detail', route: '/recipe/:id'} 
  ]

  
  const [state] = useReducer (reducer, initialState)
  
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className="card">
        {state.dentistas.map(dentista => (
          <Link to={enlace.route} key={id}>
                <div style={{margin: 25}} >
                <img src={require("../img/doctor.jpg")} alt="Card" width={200}/>
                <p>id: {dentista.id}</p>
                <p>Nombre y apellido: {dentista.name}</p>
                <p>nombre: {dentista.userName}</p>      
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={addFav} className="favButton">⭐</button>
              </div>
          </Link>
      ))}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
    </div>
  );
};

export default Card;
