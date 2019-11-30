import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signup = userData => {
  return axios.post("/api/users/register", userData);
};

export const signin = userData => {
  return axios.post("/api/users/signin", userData);
};

export const verify = data => {
  return axios.post("/api/users/verify", data);
};
