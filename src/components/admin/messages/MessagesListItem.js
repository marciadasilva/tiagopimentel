import React from 'react';
import { connect } from 'react-redux';

const MessagesListItem = props => (
  <div className="list-item--message">
    <div>
      <h3 className="list-item__title">
        {props.message.name} - {props.message.email}
      </h3>
      {props.message.phone ? (
        <p className="list-item__sub-title">
          Telefone: <strong>{props.message.phone}</strong>
        </p>
      ) : (
        ''
      )}
      <p className="list-item__sub-title">
        Mensagem: <strong>{props.message.message}</strong>
      </p>
    </div>
    <button className="button" onClick={() => props.onRead(props.message)}>
      Marcar como Lida
    </button>
  </div>
);

export default MessagesListItem;
