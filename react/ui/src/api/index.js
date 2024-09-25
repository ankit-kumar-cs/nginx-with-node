import axios from "axios"

export const fetchBasicApp1Information = async () => {
	return await axios.get('app1/hello');
}

export const fetchBasicApp2Information = async () => {
	return await axios.get('app2');
}