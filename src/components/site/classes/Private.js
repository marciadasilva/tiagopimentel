import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import SlideMenu from "../SlideMenu";
import { Link } from "react-router-dom";

class Private extends React.Component {
  componentDidMount() {
    document.title = "Tiago Pimentel - Particulares";
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    document.title = "Tiago Pimentel";
  }
  render() {
    return (
      <div id="outer-container ">
        <SlideMenu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <Header />
          <main className="classes-page">
            <h2 className="classes-page__title">Aulas Particulares</h2>
            <span className="classes-page__icon classes-page__icon--private" />
            <div className="classes-page__description">
              <p>
                De iniciantes a lutadores, aulas particulares de boxe de Muay
                Thai são excelentes para dar atenção pessoal a um indivíduo pode
                precisar dominar uma técnica difícil de boxe Muay Thai ou para
                ajuda extra com sua classificação de boxe Muay Thai. Ao
                contrário das aulas em grupo, as aulas particulares são
                adaptadas às suas necessidades individuais, com erros
                imediatamente corrigidos e motivação intensamente focada, os
                alunos aprendem em um ritmo acelerado. Esse tipo de treinamento
                monitorado prova ser o mais eficiente, já que os maus hábitos
                podem ser facilmente identificados.
              </p>
            </div>

            <section className="classes-page__gallery-list">
              <h3 className="classes-page__title">Outras Aulas</h3>
              <div className="classes-page__others">
                <Link className="classes-page__item" to="/jiujitsu">
                  <span>Jiu-Jitsu</span>
                  <img
                    src="/images/jitsu.jpg"
                    alt="Jiu-Jitsu"
                    className="classes-page__thai"
                  />
                </Link>
                <Link className="classes-page__item" to="/muaythai">
                  <span>Muay Thai</span>
                  <img
                    src="/images/thai.png"
                    alt="Muay Thai"
                    className="classes-page__thai"
                  />
                </Link>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Private;
