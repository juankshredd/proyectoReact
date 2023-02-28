import React from "react";
import ReactDOM from "react-dom/client";
import { EstaDisponible } from "./EstaDisponible";
import { ProteinaCard } from "./Product";
import { Navegacion } from "./Navegacion";
import { CreatinaCard } from "./Product";
import {Boton} from './Boton'
import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Titulo() {
  const tienda = {
    nombre: "Sitio de ventas online",
    version: "de Prueba",
  };
  return (
    <div>
      <h1>{tienda.nombre}</h1>
      <h5>{tienda.version}</h5>
    </div>
  );
}

root.render(
  <>
    <Titulo/>
    <Navegacion/>
    <ProteinaCard
      nombre="Proteina 100% Whey 2lbs"
      precio={120000}
      disponible={EstaDisponible.EstaDisponible}
      nutrition_facts={{
        proteina: "29 gr",
        carbohidrato : "0.01 gr",
        grasa : "0.01 gr"
      }}>
        <EstaDisponible/>
      </ProteinaCard>
    <CreatinaCard  nombre="Creatina Universal nutrition"
      precio={75000}
      disponible={EstaDisponible.EstaDisponible}
      creatina_facts={{
        creatina: "5 gr",
        carbohidrato : "5 gr",
        grasa : "0 gr"
      }}>
        <EstaDisponible/>
    </CreatinaCard>
    <Boton text="Click me"/>
    <Boton text="Go to"/>
    <Boton text="Comprar tambien"/>
    <TaskCard/>
  </>
);