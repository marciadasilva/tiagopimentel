import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ClassesItem from './ClassesItem';

const ClassesList = () => {
  return (
    <section className="classes-grid">
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
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
              description="De iniciantes a lutadores, aulas particulares de boxe de Muay Thai são excelentes para dar atenção pessoal a um indivíduo pode precisar dominar uma técnica difícil de boxe Muay Thai ou para ajuda extra com sua classificação de boxe Muay Thai. "
              cta="Ver Mais"
              imgUrl="/images/particulares.png"
              link="/particular"
            />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ClassesList;
