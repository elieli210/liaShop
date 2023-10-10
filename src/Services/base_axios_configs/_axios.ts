// Axios
import axios from "axios";
// Axios

// Urls
import { baseUrl } from "../../Constants/urls";
// Urls

export const _axios = axios.create({
  baseURL: baseUrl,
});
