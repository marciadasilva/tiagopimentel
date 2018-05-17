import moment from 'moment';

const getVisibleMessages = (messages, { text, sortBy, startDate, endDate }) => {
  return messages.filter(message => message.read === 'false').sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'name') {
      return a.name > b.name ? 1 : -1;
    }
  });
};

export default getVisibleMessages;
