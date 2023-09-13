import { Link } from 'react-router-dom'
import { useOdontoStates } from '../Context/Context';

const Card = ({odontologo}) => {

  const {favs, setFavs} = useOdontoStates()
  console.log({favs});
  return (
        <div>
          <div style={{display: 'flex', justifyContent: 'center'}} className="card">
            <Link to={`/recipe/`+ odontologo.id}>
                <img src={require("../img/doctor.jpg")} alt="Card" width={200}/>
                <p>id: {odontologo.id}</p>
                <p>Nombre y apellido: {odontologo.name}</p>
                <p>nombre: {odontologo.username}</p>       
            </Link> 
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <button onClick={()=> setFavs([...favs, odontologo])} className="favButton">⭐</button>
            </div>
          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          
        </div>  
    );
};

export default Card;
