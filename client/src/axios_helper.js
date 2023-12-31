import axios from "axios";

export const getAuthToken = () => {
  const token = window.localStorage.getItem("auth_token");
  return token ? token : "";
};

export const setAuthHeader = (token) => {
  window.localStorage.setItem("auth_token", token);
};

export const removeAuthHeader = () => {
  window.localStorage.removeItem("auth_token");
};

axios.defaults.baseURL = "http://localhost:8080/api/v1";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const request = (method, url, data) => {
  let headers = {};
  if (getAuthToken() !== null && getAuthToken() !== "null") {
    headers = { Authorization: `Bearer ${getAuthToken()}` };
  }

  return axios({
    method: method,
    url: url,
    data: data,
    headers: headers,
  });
};
