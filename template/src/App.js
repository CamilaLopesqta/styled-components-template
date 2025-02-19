import React from "react";
import { Garagem } from "./Componentes/Garagem/Garagem";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
    
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <>
    <GlobalStyle />
    <div className="App">
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
    </>
  );
}