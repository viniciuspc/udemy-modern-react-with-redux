import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // When caling an action creator inside of other action creator
  // make sure to dispatch the function returned by the action creator
  await dispatch(fetchPosts());
  // return an array of only unique user ids
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

// React Thunk will call our function, passing dispatch and getStae as arguments
// With dispatch we can write any data we want at redux state store
// With getSteate we can read any data we want from redux state store
// Then we need to manualy dispatch an action
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

//A function that returns a function that calls _fetchUser(id, dispatch)
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

// //A function that returns a function that calls _fetchUser(id, dispatch)
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
//
// // Uderscore Indicates a private function.
// // This function is the memoize function
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
