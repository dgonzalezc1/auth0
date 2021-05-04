import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Info = () => {
    const { user} = useAuth0();

    return (
        <div>
            <h1>Perfil</h1>
             <img src={user.picture} alt={user.name}/>
            <p>Nombre</p>
            <p>{user.name}</p>
            <p>Correo electrónico</p>
            <p>{user.email}</p>
            
        </div>
    );
};

export default Info
