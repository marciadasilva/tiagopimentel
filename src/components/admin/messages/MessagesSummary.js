import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectMessages from '../../../selectors/messages';

export const MessagesSummary = ({ messageCount }) => {
  const messageWord = messageCount === 1 ? 'mensagem' : 'mensagens';
  const readWord = messageCount === 1 ? 'lida' : 'lidas';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          <span>{messageCount}</span> {messageWord} não {readWord}
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleMessages = selectMessages(state.messages, state.filters);

  return {
    messageCount: visibleMessages.length
  };
};

export default connect(mapStateToProps)(MessagesSummary);
