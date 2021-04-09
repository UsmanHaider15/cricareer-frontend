import axios from "axios";

console.log("process.env", process.env);
const baseUrl =
  process.env.REACT_APP_ENVIRONMENT === "PROD"
    ? "https://criccareers.com"
    : "http://localhost:3001";

axios.defaults.baseURL = baseUrl;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    alert("An unexpected error occurred");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
