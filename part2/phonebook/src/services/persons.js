import axios from "axios";
const baseURL = "http://localhost:3000/persons/";

const getAll = () => {
  return axios.get(baseURL);
};

const create = (newObject) => {
  return axios.post(baseURL, newObject);
};

const remove = (id) => {
  return axios
    .delete(`${baseURL}${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export default { getAll, create, remove };
