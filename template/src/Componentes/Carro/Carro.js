import React from "react";
import { Carros, Imagem, Lista } from "./StyleCarro";

export function Carro(props) {
    return (
      <Carros>
      <Lista>
        <h2>Meu carro</h2>
  
        <ul>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
        </ul>
      </Lista>
      </Carros>
    );
  }
  
