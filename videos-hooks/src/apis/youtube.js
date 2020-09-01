import axios from "axios";

const KEY = "AIzaSyDE9wRqolHK9YQLu-P1c71RzKvG6s6dNuI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
