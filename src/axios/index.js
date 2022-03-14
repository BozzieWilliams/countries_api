import axios from "axios";
const instance = axios.create({
	baseURL: "./localData.json",
});
export default instance;

// https://restcountries.com/v2/all
