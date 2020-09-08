import jsonPlaceholder from "../apis/jsonPlaceholder";

// React Thunk will call our function, passing dispatch and getStae as arguments
// With dispatch we can write any data we want at redux state store
// With getSteate we can read any data we want from redux state store
// Then we need to manualy dispatch an action
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
