import React, { useState } from "react";
import logo from "./img/logo.jpg";
import "./Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

//imagenes
import user from "./img/user.jpg";
import Secure from "./img/Secure.jpg";
import linea from "./img/linea.jpg";

const Formulario = () => {
  const [inputNombre, cambiarInputNombre] = useState("");

  const [inputContraseña, cambiarInputContraseña] = useState("");
  // Funcion que se encargara de validar los datos y enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Comprobamos validacion del formulario ...
    // Si todo es correcto enviamos el formulario

    console.log("Formulario Enviado!");
  };

  // Funcion que se encarga de cambiar el estado del inputNombre
  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  };

  // Funcion que se encarga de cambiar el estado del inputCorreo

  const handleInputContraseña = (e) => {
    cambiarInputContraseña(e.target.value);
  };

  return (
    <div id="container" name="fondo">
      <form action="" onSubmit={handleSubmit} className="formulario">
        <div class="logo">
          <h3 id="titulo">NOTES</h3>
          <h3 id="tituloDos">BIENVENIDO</h3>
        </div>
        <img id="linea" src={linea} />
        <img id="logo" class="logo" src={logo}></img>

        <div>
          <img id="user" src={user}></img>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre de usuario"
            id="nombre"
            value={inputNombre}
            onChange={handleInputNombre}
          />
        </div>

        <div>
          <img id="secure" src={Secure}></img>
          <input
            type="text"
            name="celular"
            id="celular"
            value={inputContraseña}
            onChange={handleInputContraseña}
            placeholder="Contraseña"
          ></input>
        </div>

        <button id="boton" type="submit">
          Enviar
        </button>
        <button id="botonDos" type="submit">
          Recuperar contraseña
        </button>
      </form>
    </div>
  );
};

export default Formulario;
