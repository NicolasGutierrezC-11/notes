import React, { useState } from "react";
import logo from "./img/logo.jpg";
import "./Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

//imagenes
import user from "./img/user.jpg";
import colegio from "./img/colegio.jpg";
import celular from "./img/celular.jpg";
import email from "./img/email.jpg";
import linea from "./img/linea.jpg";

const Formulario = () => {
  const [inputNombre, cambiarInputNombre] = useState("");
  const [inputCorreo, cambiarInputCorreo] = useState("");
  const [inputCelular, cambiarInputCelular] = useState("");
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
  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };

  const handleInputCelular = (e) => {
    cambiarInputCelular(e.target.value);
  };

  return (
    <div name="fondo">
      <>
        <form action="" onSubmit={handleSubmit} className="formulario">
          <div class="logo">
            <h3 id="titulo">NOTES</h3>
            <h3 id="tituloDos">BIENVENIDO</h3>
          </div>
          <img id="linea" src={linea} />
          <img id="logoCupo" src={logo}></img>
          <div>
            <img id="user" src={user}></img>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y Apellidos del aspirante"
              id="nombre"
              value={inputNombre}
              onChange={handleInputNombre}
            />
          </div>
          <div>
            <img id="colegio" src={colegio} />
            <select
              type="text"
              name="grado"
              placeholder="Grado al que aspira"
              id="grado"
            >
              <option>Grado 1</option>
              <option>Grado 2</option>
              <option>Grado 3</option>
              <option>Grado 4</option>
              <option>Grado 5</option>
              <option>Grado 6</option>
              <option>Grado 7</option>
              <option>Grado 8</option>
              <option>Grado 9</option>
              <option>Grado 10</option>
              <option>Grado 11</option>
            </select>
          </div>

          <div>
            <img id="phone" src={celular} />
            <input
              type="text"
              name="celular"
              id="celular"
              value={inputCelular}
              onChange={handleInputCelular}
              placeholder="celular del acudiente"
            ></input>
          </div>

          <div>
            <img id="email" src={email} />
            <input
              type="text"
              name="correo"
              placeholder="Correo del acudiente"
              id="correo"
              value={inputCorreo}
              onChange={handleInputCorreo}
            />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </>
    </div>
  );
};

export default Formulario;
