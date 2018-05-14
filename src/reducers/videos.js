const videosReducerDefaultState = [];

const videosReducer = (state = videosReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_VIDEO':
      return [...state, action.video];
    case 'REMOVE_VIDEO':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_VIDEO':
      return state.map(video => {
        if (video.id === action.id) {
          return {
            ...video,
            ...action.updates
          };
        } else {
          return video;
        }
      });
    case 'SET_VIDEOS':
      return action.videos;
    default:
      return state;
  }
};

export default videosReducer;
