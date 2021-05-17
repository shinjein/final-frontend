import axios from "axios";
const baseUrl = `${process.env.REACT_APP_PROJECTS_API}/api`;

export const searchedCities = (city, userID) => {
  return axios.post(`${baseUrl}/searchedcities`, 
  { city, userID })
}

export const listedcities = (id) => {
  return axios.get(`${baseUrl}/listedcities/${id}`, { id })
}

/* Authentication Routes */

export const signup = ( username, screenname, email, password, base ) => {
  return axios.post(`${baseUrl}/signup`, { username, screenname, email, password, base });
};

export const login = (username, password) => {
  return axios.post(
    `${baseUrl}/login`,
    { username, password },
    { withCredentials: true }
  );
};

export const logout = () => {
  return axios.post(`${baseUrl}/logout`, null, {withCredentials: true});
}

export const loggedin = () => {
  return axios.get(`${baseUrl}/loggedin`, {withCredentials: true});
}