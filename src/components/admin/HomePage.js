import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MenuAdmin from './MenuAdmin';
import selectMessages from '../../selectors/messages';

class HomePage extends React.Component {
  render() {
    const message =
      this.props.messages.length > 1 ? 'novas mensagens' : 'nova mensagem';
    console.log(message);
    return (
      <main className="dashboard">
        <MenuAdmin />
        <section className="dashboard__content">
          <div className="dashboard__image-home">
            {this.props.messages.length > 0 ? (
              <div className="dashboard__card-alert">
                <p>
                  Você tem {this.props.messages.length} {message}!
                </p>
                <Link to="/admin/messages" className="button">
                  Ver Mensagens
                </Link>
              </div>
            ) : (
              ''
            )}
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: selectMessages(state.messages, state.filters)
  };
};

export default connect(mapStateToProps)(HomePage);
