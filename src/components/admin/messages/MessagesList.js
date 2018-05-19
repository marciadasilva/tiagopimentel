import React from 'react';
import { connect } from 'react-redux';

import MessagesListItem from './MessagesListItem';
import selectMessages from '../../../selectors/messages';
import { startEditMessage } from '../../../actions/messages';

export class MessagesList extends React.Component {
  onRead = message => {
    let con = { read: 'true' };
    this.props.startEditMessage(message.id, con);
  };
  render() {
    return (
      <div className="content-container">
        {this.props.messages.length > 0 ? (
          <div className="list-header">
            <div className="show-for-mobile">Mensagens</div>
            <div className="show-for-desktop">Mensagem</div>
          </div>
        ) : (
          ''
        )}
        <div className="list-body--message">
          {this.props.messages.length === 0 ? (
            <div className="list-item list-item--message">
              <span>Nenhuma mensagem recebida</span>
            </div>
          ) : (
            this.props.messages.map(message => {
              return (
                <MessagesListItem
                  key={message.id}
                  message={message}
                  onRead={this.onRead}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: selectMessages(state.messages, state.filters)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditMessage: (id, message) => dispatch(startEditMessage(id, message))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
