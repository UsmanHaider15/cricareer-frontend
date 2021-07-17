import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

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

const axiosObj = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default axiosObj;
