import React from 'react';
import ClassesItem from './ClassesItem';

const ClassesList = () => {
  return (
    <section className="classes-grid">
      <div className="classes">
        <span className="classes__border" />
        <div className="classes__list">
          <ClassesItem
            name="Jiu-Jitsu"
            description="O Jiu-Jitsu é uma arte marcial que utiliza golpes de alavancas, torções e pressões para levar um oponente ao chão e dominá-lo. Em japonês, jū signfica “suavidade”, “brandura”, e jutsu, “arte”, “técnica”. Daí seu significado, “arte suave”."
            cta="Ver Mais"
            imgUrl="/images/jiujitsu.png"
            link="/jiujitsu"
          />
          <ClassesItem
            name="Muay Thai"
            description="O Muay thai é uma luta de origem tailandesa. Esta modalidade de
            luta inclui golpes de combate em pé, e é conhecida como “a arte
            das oito armas”, pois caracteriza-se pelo uso combinado de
            punhos, cotovelos, joelhos, canelas e pés."
            cta="Ver Mais"
            imgUrl="/images/muay.png"
            link="/muaythai"
          />
          <ClassesItem
            name="Aulas Particulares"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            cta="Ver Mais"
            imgUrl="/images/particulares.png"
            link="/particular"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassesList;
