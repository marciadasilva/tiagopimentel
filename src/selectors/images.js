import moment from 'moment';

const getVisibleImages = (images, { text, sortBy }) => {
  return images
    .filter(image => {
      const textMatch =
        image.description.toLowerCase().includes(text.toLowerCase()) ||
        image.category.toLowerCase().includes(text.toLowerCase());

      return textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'category') {
        return a.category < b.category ? -1 : 1;
      }
    });
};

export default getVisibleImages;
