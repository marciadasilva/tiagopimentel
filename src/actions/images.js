import database, { storage } from '../firebase/firebase';
import firebase from 'firebase';

export const addImage = image => ({
  type: 'ADD_IMAGE',
  image
});

export const startAddImage = (imageData = {}) => {
  return (dispatch, getState) => {
    const {
      description = '',
      category = '',
      imageFile = '',
      createdAt = 0
    } = imageData;

    const image = {
      description,
      category,
      imageFile,
      createdAt
    };

    return database
      .ref(`images`)
      .push(image)
      .then(ref => {
        dispatch(
          addImage({
            id: ref.key,
            ...image
          })
        );
      });
  };
};

export const removeImage = ({ id } = {}) => ({
  type: 'REMOVE_IMAGE',
  id
});

const removeImageFirebase = async (id, dispatch) => {
  let removed = await removeImageFile(id);
  return database
    .ref(`images/${id}`)
    .remove()
    .then(() => {
      dispatch(removeImage({ id }));
    });
};

const removeImageFile = id => {
  let url = null;
  const imageToRemove = database
    .ref(`images/${id}/imageFile`)
    .once('value')
    .then(snapshot => {
      url = firebase.storage().refFromURL(snapshot.val());
      url
        .delete()
        .then(() => {
          // console.log('deleted');
        })
        .catch(error => {
          console.log('error: ' + error);
        });
    });
  return imageToRemove;
};

export const startRemoveImage = ({ id } = {}) => {
  return (dispatch, getState) => {
    return removeImageFirebase(id, dispatch);
  };
};

export const editImage = (id, updates) => ({
  type: 'EDIT_IMAGE',
  id,
  updates
});

export const startEditImage = (id, updates, oldImage) => {
  if (oldImage) {
    const imageToRemove = firebase.storage().refFromURL(oldImage);
    imageToRemove
      .delete()
      .then(() => {
        //console.log('deleted');
      })
      .catch(error => {
        console.log('error: ' + error);
      });
  }
  return (dispatch, getState) => {
    return database
      .ref(`images/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editImage(id, updates));
      });
  };
};

export const setImages = images => ({
  type: 'SET_IMAGES',
  images
});

export const startSetImages = () => {
  return (dispatch, getState) => {
    return database
      .ref(`images`)
      .once('value')
      .then(snapshot => {
        const images = [];

        snapshot.forEach(childSnapshot => {
          images.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setImages(images));
      });
  };
};
