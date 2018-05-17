const messagesReducerDefaultState = [];

const messagesReducer = (state = messagesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.message];
    case 'REMOVE_MESSAGE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_MESSAGE':
      return state.map(message => {
        if (message.id === action.id) {
          return {
            ...message,
            ...action.updates
          };
        } else {
          return message;
        }
      });
    case 'SET_MESSAGES':
      return action.messages;
    default:
      return state;
  }
};

export default messagesReducer;
