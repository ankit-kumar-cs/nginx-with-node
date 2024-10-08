import axios from "axios"

export const fetchBasicApp1Information = async () => {
	return await axios.get('app1/info');
}

export const fetchBasicApp2Information = async () => {
	return await axios.get('app2/info');
}

export const isUserLoggedIn = async (username) => {
	console.log('In the get login', username);
	
	return await axios.get('auth/login', {
		params: {
			username: username
		}
	});
}

export const login = async (username) => {
	console.log('In the post login');
	
	return await axios.post('auth/login/do', {
		username
	});
}

export const logout = async (username) => {
	return await axios.put('auth/logout', {
		username
	});
}