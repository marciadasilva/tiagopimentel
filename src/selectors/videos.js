import moment from 'moment';

const getVisibleVideos = (videos, { text, sortBy }) => {
  return videos
    .filter(video => {
      const textMatch =
        video.description.toLowerCase().includes(text.toLowerCase()) ||
        video.category.toLowerCase().includes(text.toLowerCase());

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

export default getVisibleVideos;
