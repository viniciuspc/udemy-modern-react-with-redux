import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID FBNAJtal50LRmh0HIqz4OpZpoWNXDUOkqE3ur7K7G0g",
  },
});
