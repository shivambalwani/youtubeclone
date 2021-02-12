import axios from "axios";

export default axios.create({
    baseURL: "https://www.googlepapis.com/youtube/v3",
    params: {
part: "snippet",
maxResults: 5,
key: "AIzaSyAtYBL84wU0hD-z3QSSTIejsYyy8ykh0rc"
    }
});