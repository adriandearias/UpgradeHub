import React, { useEffect, useState } from 'react'
import "./Tienda.css"
import Funko from '../Funko/Funko';

const Tienda = () => {
    const [funkos, setFunkos] = useState([]);
    // const [suma, setSuma] = useState([]);

    console.log('Me renderizo');
    
    const getFunkos = async () => {
        const result = await fetch("https://back-funkos.vercel.app/api/v1/funkos/");
        const res = await result.json();
        setFunkos([...res]);
    }
//! este useEffect sin array de dependencias se va a ejecutar cada vez que rendericemos el componente
    useEffect(()=>{
        getFunkos();
        console.log('useEffect render');
    }, []) //? cuando suma cambie se volverá a renderizar la peticion
  //! , [] -> array de dependencias vacio significa que renderizare el 
  //! contenido de dentro la primera vez que ejecute mi componente
    return (
    <div>
      {funkos.map((funko) => 
        <div key={funko._id}>
            <Funko isCarrito/>
        </div>
      )}
    {/* <button onClick={()=> setSuma(suma+1)>{suma}}>RENDERIZAR</button> */}
    </div>
  )
}

export default Tienda
