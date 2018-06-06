import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SlideMenu from '../SlideMenu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectImages from '../../../selectors/images';

class JiuJitsu extends React.Component {
  componentDidMount() {
    document.title = 'Tiago Pimentel - JiuJitsu';
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    document.title = 'Tiago Pimentel';
  }
  render() {
    return (
      <div id="outer-container ">
        <SlideMenu
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
        <div id="page-wrap">
          <Header />
          <main className="classes-page">
            <h2 className="classes-page__title">Jiu Jitsu</h2>
            <span className="classes-page__icon">---------------</span>
            <div className="classes-page__description">
              <p>
                O Jiu-Jitsu é uma arte marcial de raiz japonesa que se utiliza
                essencialmente de golpes de alavancas, torções e pressões para
                levar um oponente ao chão e dominá-lo. Literalmente, jū em
                japonês signfica “suavidade”, “brandura”, e jutsu, “arte”,
                “técnica”. Daí seu significado, “arte suave”.
              </p>
              <br />
              <p>
                O jiu-jitsu é uma luta que se baseia principalmente na defesa
                dos golpes do adversário sem machucá-lo. Portanto os lutadores
                treinam golpes que imobilizam os oponentes. Para realizar a
                mobilização os praticantes utilizam de força e peso do
                adversário contra ele mesmo. Nesse tipo de arte marcial os
                golpes desferidos não devem ter o intuito de machucar ou
                desconcentrar o oponente como acontece, por exemplo, no boxe ou
                muay thai.
              </p>
              <br />
              <p>
                Ao iniciar a prática do Jiu-Jitsu o aluno recebe uma faixa e
                conforme sua evolução e desempenho, o aluno pode trocar de
                faixa. As faixas possuem a seguinte ordem:
                <br />
                <br />
                <i className="fas fa-bullseye classes-page__description--icon"></i> <b>Faixa Branca</b> – para iniciantes de qualquer idade.
                <br />
                <i className="fas fa-bullseye classes-page__description--icon"></i> <b>Faixa Azul</b> – normalmente para lutadores a partir de 15
                anos que treinam em um período de um ano e meio até dois anos.
                <br />
                <i className="fas fa-bullseye classes-page__description--icon"></i> <b>Faixa Roxa</b> – varia com o desempenho. É geralmente
                entregue para atletas a partir de 17 anos que estão na
                modalidade há dois anos. <br />
                <i className="fas fa-bullseye classes-page__description--icon"></i> <b>Faixa Roxa</b> – varia com o desempenho. É geralmente
                entregue para atletas a partir de 17 anos que estão na
                modalidade há dois anos. <br />
                <i className="fas fa-bullseye classes-page__description--icon"></i> <b>Faixa Marrom</b> – normalmente um ano e meio de treino
                para atletas a partir dos 18 anos. <br />
                <i className="fas fa-bullseye classes-page__description--icon"></i> <b>Faixa Preta</b> – a partir dos 19 anos de idade. <br />
                <i className="fas fa-bullseye classes-page__description--icon"></i> <b>Faixa Coral (vermelha e preta)</b> – para mestres. <br />
                <i className="fas fa-bullseye classes-page__description--icon"></i> <b>Faixa Vermelha</b> – destinada ao grande mestre. <br />
              </p>
            </div>

            <section className="classes-page__gallery-list">
              <h3 className="classes-page__title">Últimos treinos</h3>
              <div className="classes-page__gallery">
                {this.props.images
                  .filter(image => image.category === 'jiujitsu')
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
                <Link to="/muaythai">Muay Thai</Link>
                <Link to="/particular">Particulares</Link>
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

export default connect(mapStateToProps)(JiuJitsu);
