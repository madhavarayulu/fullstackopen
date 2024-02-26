import axios from "axios";
const baseURL = "api/persons";

const getAll = () => {
  return axios.get(baseURL);
};

const create = (newObject) => {
  console.log(newObject)
  return axios.post(baseURL, newObject);
};

const remove = (id) => {
  return axios
    .delete(`${baseURL}/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const modify = (id, updatedObject) => {
  return axios
    .put(`${baseURL}/${id}`, updatedObject)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export default { getAll, create, remove, modify };
