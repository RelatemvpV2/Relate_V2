import axios from 'axios';

const answerApiService = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'https://jqjafti8m4.execute-api.eu-central-1.amazonaws.com'
			: 'https://jqjafti8m4.execute-api.eu-central-1.amazonaws.com', // NEW API base URL
});

// Request interceptor to include auth token in specific requests
answerApiService.interceptors.request.use(
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

export default answerApiService;
