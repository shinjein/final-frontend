import axios from "axios";
const baseUrl = `${process.env.REACT_APP_PROJECTS_API}/api`;

export const createcitylist = (city, user) => {
  return axios.post(`${baseUrl}/createcitylist`,
  {city, user})
}

export const searchedCities = (city, userID) => {
  return axios.post(`${baseUrl}/searchedcities`, 
  { city, userID })
}

export const listedcities = () => {
  return axios.get(`${baseUrl}/listedcities`, 
  {withCredentials: true})
}

export const deleteCity = (city) => {
  return axios.get(`${baseUrl}/delete/:city`, 
  {withCredentials: true})
}

/* Contacts */
export const mycontacts = () => {
  return axios.get(`${baseUrl}/mycontacts`,
  { withCredentials: true })
}

 //lists direct contacts and secondary contacts based in city.
 // 

 export const citycontacts = (city) => {                                
  return axios.get(`${baseUrl}/citycontacts/${city}`,
  { withCredentials: true })
}

 export const connections = (city, username) => {                                
  return axios.get(`${baseUrl}/citycontacts/${city}/${username}`,
  { withCredentials: true })
}

export const addContact = (contact) => {
  return axios.post(`${baseUrl}/addcontact`, 
  {contact}, {withCredentials: true})
}
 
/* Authentication Routes */

export const signup = ( username, password, email, base ) => {
  return axios.post(`${baseUrl}/signup`, 
  { username, password, email, base });
};

export const login = (username, password) => {
  return axios.post(
    `${baseUrl}/login`,
    { username, password },
    { withCredentials: true }
  );
};

export const logout = () => {
  return axios.post(`${baseUrl}/logout`, null, 
  {withCredentials: true});
}

export const loggedin = () => {
  return axios.get(`${baseUrl}/loggedin`, 
  {withCredentials: true});
}