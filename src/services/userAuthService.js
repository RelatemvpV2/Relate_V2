import axios from 'axios';

const userAuthApiService = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'https://h3fvm7vxdi.execute-api.eu-central-1.amazonaws.com'
			: 'https://h3fvm7vxdi.execute-api.eu-central-1.amazonaws.com', // NEW API base URL
});

// Request interceptor to include auth token in specific requests
userAuthApiService.interceptors.request.use(
	(config) => {
		let authToken = localStorage.getItem('token');

		if (authToken) {
			// Check if the request URL requires authorization (e.g.,)
			if (true) {
				config.headers['Authorization'] = `Bearer ${authToken}`;
			}
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default userAuthApiService;
