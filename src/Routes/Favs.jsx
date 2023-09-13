import React from "react";
import { useOdontoStates } from "../Context/Context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favs} = useOdontoStates()



  return (
    <div>
      {favs.map(fav => <Card odontologo={fav} key={fav.id}/>)}
    </div>
  );
};

export default Favs;
