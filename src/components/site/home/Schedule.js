import React from 'react';
import { Link } from 'react-router-dom';

const Schedule = () => {
  return (
    <section className="schedule">
      <div className="schedule__container">
        <h3 className="schedule__title">Cronograma</h3>
        <div className="schedule__grid">
          <div className="schedule__week">Segunda</div>
          <div className="schedule__week">Terça</div>
          <div className="schedule__week">Quarta</div>
          <div className="schedule__week">Quinta</div>
          <div className="schedule__week">Sexta</div>
          <div className="schedule__week">Sábado</div>
          {/* ordem por dia de semana: segunda, terça... */}
          {/* 1 linha */}
          <div className="schedule__hour">Jiu Jitsu</div>
          <div className="schedule__hour">Jiu Jitsu</div>
          <div className="schedule__hour">Jiu Jitsu</div>
          <div className="schedule__hour">Jiu Jitsu</div>
          <div className="schedule__hour" />
          <div className="schedule__hour">Sogi</div>
          {/* 2 linha */}
          <div className="schedule__hour">Muay Thai </div>
          <div className="schedule__hour" />
          <div className="schedule__hour">Muay Thai </div>
          <div className="schedule__hour" />
          <div className="schedule__hour" />
          <div className="schedule__hour">Muay Thai </div>
          {/* 3 linha */}
          <div className="schedule__hour">Sogi </div>
          <div className="schedule__hour" />
          <div className="schedule__hour">Sogi </div>
          <div className="schedule__hour" />
          <div className="schedule__hour" />
          <div className="schedule__hour" />
          <div className="schedule__hour" />
          <div className="schedule__hour" />
          <div className="schedule__hour" />
          <div className="schedule__hour" />
          <div className="schedule__hour" />
          <div className="schedule__hour" />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
