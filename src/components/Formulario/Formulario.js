import React, { Fragment, useState } from "react";
import logo from "../Assets/logo.png";
import "./Formulario.css";
import swal from 'sweetalert';

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    rut: "",
    ci: "",
    mensaje: ""
  });

  const handleInputChange = (e) => {
    //console.log(e.target.value)
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(`
    Nombre: ${datos.nombre} \n 
    Apellido: ${datos.apellido}\n
    E-mail: ${datos.email}\n
    R.U.T: ${datos.rut}\n
    C.I: ${datos.ci}\n
    Mensaje: ${datos.mensaje}
    `);
    swal({
        title: "¡Formulario enviado!",
        text: "Gracias",
        icon: "success",
      });
  };
  return (
    <Fragment>
      <div className="header-form">
        <img src={logo}/>
        <h1>¡Bienvenido!</h1>
        <p>Por favor complete el formulario con sus datos.</p>
      </div>
      <form className="form" onSubmit={enviarDatos}>
        <div className="form-personal-data">
            <div>
          <label className="form-label">Nombre</label>
          <input
            name="nombre"
            type="text"
            placeholder="Ej: Juan Pablo"
            className="form-input"
            onChange={handleInputChange}
            required
          />
          </div>
          <div>
          <label className="form-label">Apellido</label>
          <input
            name="apellido"
            type="text"
            placeholder="Ej:Toniolo"
            className="form-input"
            onChange={handleInputChange}
            required
          />
          </div>
          <div>
          <label className="form-label">R.U.T</label>
          <input
            name="rut"
            type="text"
            minLength="9"
            maxLength="9"
            placeholder="Ej:12345678K"
            className="form-input"
            onChange={handleInputChange}
            required
          />
          </div>
          <div>
          <label className="form-label">C.I</label>
          <input
            name="ci"
            minLength="9"
            maxLength="9"
            type="number"
            placeholder="123456789"
            className="form-input"
            onChange={handleInputChange}
            required
          />
          </div>
        </div>
        <label className="form-label">E-mail</label>
        <input
          name="email"
          type="email"
          placeholder="Ej: jp@gmail.com"
          className="form-input"
          onChange={handleInputChange}
          required
        />
        <label className="form-label">¡Dejanos tu mensaje!</label>
        <textarea
          maxLength="150"
          name="mensaje"
          type="text"
          placeholder="Ej: Me gustaria recibir informacion sobre.."
          className="form-input form-textarea"
          onChange={handleInputChange}
          required
        ></textarea>
        <div className="form-div-button">
          <button className="form-button" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </Fragment>
  );
};
export default Formulario;
