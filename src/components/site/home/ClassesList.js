import React from 'react';
import ClassesItem from './ClassesItem';

const ClassesList = () => {
  return (
    <section className="classes-grid">
      <div className="classes">
        <span className="classes__border" />
        <div className="classes__list">
          <ClassesItem
            name="Jiu Jitsu"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            cta="Ver Mais"
            imgUrl="/images/jiujitsu.png"
          />
          <ClassesItem
            name="Muay Thai"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            cta="Ver Mais"
            imgUrl="/images/muay.png"
          />
          <ClassesItem
            name="Aulas Particulares"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            cta="Ver Mais"
            imgUrl="/images/particulares.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassesList;
