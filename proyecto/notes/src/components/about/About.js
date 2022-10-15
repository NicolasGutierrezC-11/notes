import React from "react";
import "./About.css";
import logo from "../img/logo.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>NOTES</h3>
        <p>Es una plataforma de gestion de notas para tu colegio</p>
        <h3>Contactanos</h3>
        <p>Ciudad: Villavicecion-Meta</p>
        <p>Numero de contacto: 3102848247</p>
        <p>Correo: notes@gmail.com</p>
      </div>
      <div className="about-img">
        <div className="footer-sns">
          <div>
            <img src={logo} alt="about" id="logoAbout" />
          </div>
          <div className="design-by">REDES SOCIALES DEL COLEGIO</div>
          <div className="sns-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
