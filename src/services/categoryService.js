import axios from 'axios';

const categoryApiService = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'https://a3jgv638e4.execute-api.eu-central-1.amazonaws.com'
			: 'https://a3jgv638e4.execute-api.eu-central-1.amazonaws.com', // NEW API base URL
});

// Request interceptor to include auth token in specific requests
categoryApiService.interceptors.request.use(
	(config) => {
		let authToken = localStorage.getItem('token');		
		if (authToken) {
			// Check if the request URL requires authorization
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

export default categoryApiService;
