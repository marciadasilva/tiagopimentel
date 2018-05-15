import React from "react";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <section className="schedule">
      <div className="schedule__container">
        <h3 className="schedule__title">Cronograma</h3>
        <div className="schedule__flex">
          <div className="schedule__grid1">
            <div className="schedule__week">Segunda</div>
            <div className="schedule__week">Terça</div>
            <div className="schedule__week">Quarta</div>
            {/* ordem por dia de semana: segunda, terça... */}
            {/* 1 linha */}
            <div className="schedule__hour schedule__active">
              <em>Jiu Jitsu</em>
              <p>18:00 - 19:15</p>
              <div className="button__site--margin schedule__button">
                <Link to="/" className="button__site ">
                  <span>Contato</span>
                </Link>
              </div>
            </div>
            <div className="schedule__hour schedule__active">
              <em>Jiu Jitsu</em>
              <p>18:00 - 19:15</p>
              <div className="button__site--margin schedule__button">
                <Link to="/" className="button__site ">
                  <span>Contato</span>
                </Link>
              </div>
            </div>
            <div className="schedule__hour schedule__active">
              <em>Jiu Jitsu</em>
              <p>18:00 - 19:15</p>
              <div className="button__site--margin schedule__button">
                <Link to="/" className="button__site ">
                  <span>Contato</span>
                </Link>
              </div>
            </div>
            {/* 2 linha */}
            <div className="schedule__hour schedule__active">
              <em>Muay Thai </em>
              <p>19:15 - 20:30</p>
              <div className="button__site--margin schedule__button">
                <Link to="/" className="button__site ">
                  <span>Contato</span>
                </Link>
              </div>
            </div>
            <div className="schedule__hour" />
            <div className="schedule__hour schedule__active">
              <em>Muay Thai </em>
              <p>19:15 - 20:30</p>
              <div className="button__site--margin schedule__button">
                <Link to="/" className="button__site ">
                  <span>Contato</span>
                </Link>
              </div>
            </div>
            {/* 3 linha */}
            <div className="schedule__hour schedule__active">
              <em>Sogi</em>
              <p>20:30 - 21:30</p>
              <div className="button__site--margin schedule__button">
                <Link to="/" className="button__site ">
                  <span>Contato</span>
                </Link>
              </div>
            </div>
            <div className="schedule__hour" />
            <div className="schedule__hour schedule__active">
              <em>Sogi</em>
              <p>20:30 - 21:30</p>
              <div className="button__site--margin schedule__button">
                <Link to="/" className="button__site ">
                  <span>Contato</span>
                </Link>
              </div>
            </div>
            <div className="schedule__hour" />
            <div className="schedule__hour" />
            <div className="schedule__hour" />
          </div>
          <div className="schedule__grid2">
            <div className="schedule__week">Quinta</div>
            <div className="schedule__week">Sexta</div>
            <div className="schedule__week">Sábado</div>
            <div className="schedule__hour schedule__active">
              <em>Jiu Jitsu</em>
              <p>18:00 - 19:15</p>
              <div className="button__site--margin schedule__button">
                <Link to="/" className="button__site ">
                  <span>Contato</span>
                </Link>
              </div>
            </div>
            <div className="schedule__hour" />
            <div className="schedule__hour schedule__active">
              <em>Sogi</em>
              <p>14:00 - 15:15</p>
              <div className="button__site--margin schedule__button">
                <Link to="/" className="button__site ">
                  <span>Contato</span>
                </Link>
              </div>
            </div>

            <div className="schedule__hour" />
            <div className="schedule__hour" />
            <div className="schedule__hour schedule__active">
              <em>Muay Thai </em>
              <p>15:20 - 16:30</p>
              <div className="button__site--margin schedule__button">
                <Link to="/" className="button__site ">
                  <span>Contato</span>
                </Link>
              </div>
            </div>
            <div className="schedule__hour" />
            <div className="schedule__hour" />
            <div className="schedule__hour" />
            <div className="schedule__hour" />
            <div className="schedule__hour" />
            <div className="schedule__hour" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
