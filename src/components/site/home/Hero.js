import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-grid">
      <div className="hero">
        <div className="hero__text">
          <h2 className="hero__title">Tiago Pimentel</h2>
          <div className="hero__bullet--margin">
            <p>
              <span>
                <img className="hero__bullet" src="./images/mark.png" />
              </span>
              Aulas de Jiu Jitsu
            </p>
            <p>
              <span>
                <img className="hero__bullet" src="./images/mark.png" />
              </span>
              Aulas de Muay Thai e Boxe
            </p>
          </div>
          <div className="button__site--margin">
            <a href="#horarios" className="button__site">
              <span>Horários</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
