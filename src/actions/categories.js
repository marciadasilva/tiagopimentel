import database from '../firebase/firebase';
import firebase from 'firebase';

export const addCategory = category => ({
  type: 'ADD_CATEGORY',
  category
});

export const startAddCategory = (categoryData = {}) => {
  return (dispatch, getState) => {
    const {
      name = '',
      description = '',
      image = '',
      createdAt = 0
    } = categoryData;
    const category = { name, description, image, createdAt };

    return database
      .ref(`categories`)
      .push(category)
      .then(ref => {
        dispatch(
          addCategory({
            id: ref.key,
            ...category
          })
        );
      });
  };
};

export const removeCategory = ({ id } = {}) => ({
  type: 'REMOVE_CATEGORY',
  id
});

const removeCategoryFirebase = async (id, dispatch) => {
  let removed = await removeImage(id);
  return database
    .ref(`categories/${id}`)
    .remove()
    .then(() => {
      dispatch(removeCategory({ id }));
    });
};

export const removeImage = id => {
  let url = null;
  const imageToRemove = database
    .ref(`categories/${id}/image`)
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

export const startRemoveCategory = ({ id } = {}) => {
  return (dispatch, getState) => {
    return removeCategoryFirebase(id, dispatch);
  };
};

export const editCategory = (id, updates) => ({
  type: 'EDIT_CATEGORY',
  id,
  updates
});

export const startEditCategory = (id, updates, oldImage) => {
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
      .ref(`categories/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editCategory(id, updates));
      });
  };
};

export const setCategories = categories => ({
  type: 'SET_CATEGORIES',
  categories
});

export const startSetCategories = () => {
  return (dispatch, getState) => {
    return database
      .ref(`categories`)
      .once('value')
      .then(snapshot => {
        const categories = [];

        snapshot.forEach(childSnapshot => {
          categories.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setCategories(categories));
      });
  };
};
