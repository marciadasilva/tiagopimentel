import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import SlideMenu from "../SlideMenu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import selectImages from "../../../selectors/images";

class MuayThai extends React.Component {
  componentDidMount() {
    document.title = "Tiago Pimentel - Muay Thai";
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
            <h2 className="classes-page__title">Muay Thai</h2>
            <span className="classes-page__icon classes-page__icon--thai" />
            <div className="classes-page__description">
              <p>
                O Muay thai é uma luta de origem tailandesa. Esta modalidade de
                luta inclui golpes de combate em pé, e é conhecida como "a arte
                das oito armas", pois caracteriza-se pelo uso combinado de
                punhos, cotovelos, joelhos, canelas e pés, estando associada a
                uma boa preparação física que a torna uma luta de contato total
                bastante eficiente.
              </p>
              <br />
              <p>
                Na Tailândia não existe um sistema de graduação do atleta de
                Muay Thai. Os atletas lutam nas categorias amador e
                profissional, não existe faixa e o nível do atleta não é
                representado por cores, como no sistema ocidental. A graduação
                do Muay Thai no ocidente, e que vai de acordo com a Confederação
                Brasileira de Muay Thai, é feita em um sistema de cores. O
                atleta usa um kruang, que é uma corda trançada que é amarrada no
                braço do atleta, e as cordas são coloridas. Cada cor do kruang
                representa um nível diferente.
              </p>
              <br />
              <p>
                O sistema de cores da graduação do muay thai começa no kruang
                totalmente branco, que é chamado de grau branco. As outras cores
                são o vermelho, o azul escuro, o azul claro e o preto. De acordo
                com a classificação feita pela CBMT as cores representam o nível
                do atleta. A classificação usada pela a CBMT é a seguinte:
                <br />
                <br />
                <i className="fas fa-bullseye classes-page__description--icon" />
                <b> Grau Branco</b>
                <br />
                <i className="fas fa-bullseye classes-page__description--icon" />
                <b> Grau branco com ponta vermelha</b>
                <br />
                <i className="fas fa-bullseye classes-page__description--icon" />
                <b> Grau vermelho ponta azul clara</b>
                <br />
                <i className="fas fa-bullseye classes-page__description--icon" />
                <b> Grau azul claro</b>
                <br />
                <i className="fas fa-bullseye classes-page__description--icon" />
                <b> Grau azul claro ponta azul escura</b>
                <br />
                <i className="fas fa-bullseye classes-page__description--icon" />
                <b> Grau azul escuro (instrutor)</b>
                <br />
                <i className="fas fa-bullseye classes-page__description--icon" />
                <b> Grau azul escuro ponta preta (instrutor máster)</b>
                <br />
                <i className="fas fa-bullseye classes-page__description--icon" />
                <b> Grau preto (professor)</b>
                <br />
                <i className="fas fa-bullseye classes-page__description--icon" />
                <b> Kruang preto e branco, com a ponta preta (mestre)</b>
                <br />
                <i className="fas fa-bullseye classes-page__description--icon" />
                <b>
                  {" "}
                  Kruang preto e branco, com a ponta vermelha (grão mestre)
                </b>
                <br />
                <br />
              </p>
            </div>

            <section className="classes-page__gallery-list">
              <h3>Últimos treinos</h3>
              <div className="classes-page__gallery">
                {this.props.images
                  .filter(image => image.category === "thai")
                  .slice(
                    0,
                    this.props.images.length >= 4 ? 4 : this.props.images.length
                  )
                  .map(image => {
                    return (
                      <div key={image.id}>
                        <div className="">
                          <img
                            className="gallery__image"
                            src={image.imageFile}
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div>
                <Link to="/galeria" className="button button--home">
                  Ver mais
                </Link>
              </div>
            </section>
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
                <Link className="classes-page__item" to="/particular">
                  <span>Particulares</span>
                  <img
                    src="/images/private.jpg"
                    alt="Particulares"
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

const mapStateToProps = state => ({
  images: selectImages(state.images, state.filters)
});

export default connect(mapStateToProps)(MuayThai);
