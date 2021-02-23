import React from 'react';
import './styles.js'
import {Wrapper,Titulo, Emprendedor} from './styles'


export const InformacioProyecto = ({
                                    fotoPerfil,
                                    nombreProyecto,
                                    nombreUsuario,
}

) => (
  <div>
    <Wrapper>
      <img src={fotoPerfil} width="60" height="60" ></img>
     
        <Titulo>
          <text >{nombreProyecto}</text>
        </Titulo>
        <br/>
        <Emprendedor>
          <text >{nombreUsuario}</text>
        </Emprendedor>
    </Wrapper>
    
  </div>
);

