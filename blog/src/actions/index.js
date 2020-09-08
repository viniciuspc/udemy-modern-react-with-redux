import jsonPlaceholder from "../apis/jsonPlaceholder";
export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get("/post");
  console.log("teste");
  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};
