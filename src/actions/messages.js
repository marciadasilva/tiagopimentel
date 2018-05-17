import database from '../firebase/firebase';
import firebase from 'firebase';

export const addMessage = message => ({
  type: 'ADD_MESSAGE',
  message
});

export const startAddMessage = (messageData = {}) => {
  return (dispatch, getState) => {
    const {
      name = '',
      email = '',
      phone = '',
      messageText = '',
      read = 'false',
      createdAt = 0
    } = messageData;
    const message = { name, email, phone, messageText, read, createdAt };

    return database
      .ref(`messages`)
      .push(message)
      .then(ref => {
        dispatch(
          addMessage({
            id: ref.key,
            ...message
          })
        );
      });
  };
};

export const removeMessage = ({ id } = {}) => ({
  type: 'REMOVE_MESSAGE',
  id
});

export const startRemoveMessage = ({ id } = {}) => {
  return (dispatch, getState) => {
    return database
      .ref(`messages/${id}`)
      .remove()
      .then(() => {
        dispatch(removeMessage({ id }));
      });
  };
};

export const editMessage = (id, updates) => ({
  type: 'EDIT_MESSAGE',
  id,
  updates
});

export const startEditMessage = (id, updates) => {
  return (dispatch, getState) => {
    return database
      .ref(`messages/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editMessage(id, updates));
      });
  };
};

export const setMessages = messages => ({
  type: 'SET_MESSAGES',
  messages
});

export const startSetMessages = () => {
  return (dispatch, getState) => {
    return database
      .ref(`messages`)
      .once('value')
      .then(snapshot => {
        const messages = [];

        snapshot.forEach(childSnapshot => {
          messages.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setMessages(messages));
      });
  };
};
