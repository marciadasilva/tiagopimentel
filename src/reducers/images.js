const imagesReducerDefaultState = [];

const imagesReducer = (state = imagesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return [...state, action.image];
    case 'REMOVE_IMAGE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_IMAGE':
      return state.map(image => {
        if (image.id === action.id) {
          return {
            ...image,
            ...action.updates
          };
        } else {
          return image;
        }
      });
    case 'SET_IMAGES':
      return action.images;
    default:
      return state;
  }
};

export default imagesReducer;
