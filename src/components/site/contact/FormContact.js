import React from 'react';
import moment from 'moment';
import { WhatsappIcon } from 'react-share';

export class FormContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      messageText: '',
      error: '',
      createdAt: moment()
    };
  }

  componentWillUnmount() {}

  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onEmailChange = e => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onPhoneChange = e => {
    const phone = e.target.value;
    this.setState(() => ({ phone }));
  };
  onMessageChange = e => {
    const messageText = e.target.value;
    this.setState(() => ({ messageText }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.messageText) {
      this.setState(() => ({
        error:
          'Nome, email e mensagem são informações obrigatórias para enviar uma mensagem.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        messageText: this.state.messageText,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form className="form form-site" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Nome"
          autoFocus
          className="text-input-site"
          value={this.state.name}
          onChange={this.onNameChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="text-input-site"
          value={this.state.email}
          onChange={this.onEmailChange}
          required
        />
        <input
          type="text"
          placeholder="Número do telefone"
          className="text-input-site"
          value={this.state.phone}
          onChange={this.onPhoneChange}
        />
        <textarea
          placeholder="Mensagem"
          className="textarea-site"
          value={this.state.messageText}
          onChange={this.onMessageChange}
          required
        />

        <div>
          <button className="button button--home">Enviar</button>
        </div>
      </form>
    );
  }
}
export default FormContact;
