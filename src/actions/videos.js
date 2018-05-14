import database, { storage } from '../firebase/firebase';
import firebase from 'firebase';

export const addVideo = video => ({
  type: 'ADD_VIDEO',
  video
});

export const startAddVideo = (videoData = {}) => {
  return (dispatch, getState) => {
    const {
      description = '',
      category = '',
      videoFile = '',
      createdAt = 0
    } = videoData;

    const video = {
      description,
      category,
      videoFile,
      createdAt
    };

    return database
      .ref(`videos`)
      .push(video)
      .then(ref => {
        dispatch(
          addVideo({
            id: ref.key,
            ...video
          })
        );
      });
  };
};

export const removeVideo = ({ id } = {}) => ({
  type: 'REMOVE_VIDEO',
  id
});

const removeVideoFirebase = async (id, dispatch) => {
  let removed = await removeVideoFile(id);
  return database
    .ref(`videos/${id}`)
    .remove()
    .then(() => {
      dispatch(removeVideo({ id }));
    });
};

const removeVideoFile = id => {
  let url = null;
  const videoToRemove = database
    .ref(`videos/${id}/videoFile`)
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
  return videoToRemove;
};

export const startRemoveVideo = ({ id } = {}) => {
  return (dispatch, getState) => {
    return removeVideoFirebase(id, dispatch);
  };
};

export const editVideo = (id, updates) => ({
  type: 'EDIT_VIDEO',
  id,
  updates
});

export const startEditVideo = (id, updates, oldVideo) => {
  if (oldVideo) {
    const videoToRemove = firebase.storage().refFromURL(oldVideo);
    videoToRemove
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
      .ref(`videos/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editVideo(id, updates));
      });
  };
};

export const setVideos = videos => ({
  type: 'SET_VIDEOS',
  videos
});

export const startSetVideos = () => {
  return (dispatch, getState) => {
    return database
      .ref(`videos`)
      .once('value')
      .then(snapshot => {
        const videos = [];

        snapshot.forEach(childSnapshot => {
          videos.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setVideos(videos));
      });
  };
};
