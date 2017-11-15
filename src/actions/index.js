import * as types from './actionTypes';

export const clearUsers = () => ({ type: types.CLEAR_USERS });

export const addUser = username => dispatch => {
  dispatch({ type: types.FETCH_USER, username });

  return fetch(`https://api.github.com/users/${username}/events`)
    .then(response => response.json())
    .then(function(data) {
      if (data.message) throw new Error(data.message);

      const score = calcScore(data);
      dispatch({
        type: types.FETCH_USER_SUCCESS,
        user: { username, score },
      });
    })
    .catch(function(error) {
      dispatch({
        type: types.FETCH_USER_FAILURE,
        error: error.message,
      });
    });
}

function calcScore(events) {
  return events
    .map(event => event.type)
    .map(eventType => lookupScore(eventType))
    .reduce((carry, value) => carry + value, 0);
}

function lookupScore(eventType) {
  const scores = {
    PushEvent: 5,
    CreateEvent: 4,
    IssuesEvent: 3,
    CommitCommentEvent: 2,
  };

  return scores[eventType] || 1;
}
