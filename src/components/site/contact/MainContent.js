import React from "react";
import FormContact from "./FormContact";
import { connect } from "react-redux";
import { startAddMessage } from "../../../actions/messages";
import { confirmAlert } from "react-confirm-alert";
import { withRouter } from "react-router-dom";

import Maps from "../home/Maps";

export class MainContent extends React.Component {
  onSubmit = message => {
    this.props.startAddMessage(message);
    confirmAlert({
      title: "Confirmação",
      message: "Mensagem enviada com sucesso.",
      buttons: [
        {
          label: "Ok"
        }
      ]
    });
    this.props.history.push("/contato");
  };
  render() {
    return (
      <main className="contact">
        <h2 className="contact__title">Entre em Contato</h2>
        <span className="contact__icon" />
        {/* <p className="contact__description"> */}
        {/* </p> */}

        <div className="contact__group">
          <div className="contact__map">
            <Maps width={"100%"} />
          </div>
          <div className="contact__info">
            <span className="contact__info-name">Para mais informações</span>
            <h3 className="contact__info-title">Contato</h3>
            <p className="contact__info-description">
              Mande uma mensagem e saiba mais informações sobre as aulas e como
              começar a treinar. <br />
              Ou se preferir venha conhecer a academia.
            </p>
            <p className="contact__info-description">
              Endereço: Marechal Mallet, 999 - Ijuí - RS <br />
              Telefone: 55 989043854 <br />
              Email: tiago@email.com
            </p>
          </div>
          <div className="contact__info2">Fundo branco</div>
        </div>

        <div className="contact__group2">
          <div className="contact__form">
            <h3 className="contact__form-title">Envie uma mensagem</h3>
            <FormContact onSubmit={this.onSubmit} />
          </div>

          <div className="contact__aside-form">
            <p className="contact__aside-description">
              Você tem alguma dúvida? Não se preocupe, estamos sempre
              disponíveis para responder a qualquer dúvida.
            </p>
            <p className="contact__aside-description">
              Você pode nos mandar uma mensagem pelo WhatsApp, ligar ou
              preencher o formulário ao lado e vamos entrar em contato com você
              o mais breve possível.
            </p>
            <ul className="contact__social">
              <li className="contact__social-item">
                <a
                  className="contact__social-link"
                  href="https://www.facebook.com/tiago.pimentelbengochea"
                  target="blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="contact__social-item">
                <a
                  className="contact__social-link"
                  href="https://www.instagram.com/pimenteltiago_/"
                  target="blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddMessage: message => dispatch(startAddMessage(message))
});

export default withRouter(connect(undefined, mapDispatchToProps)(MainContent));
