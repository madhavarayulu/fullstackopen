import axios from "axios";
const baseURL = "http://localhost:3000/persons"

const getAll = () => {
  return axios.get(baseURL)
}

const create = newObject => {
  return axios.post(baseURL, newObject)
}

export default { getAll, create }