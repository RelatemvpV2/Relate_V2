import axios from 'axios';

const recommendationApiService = axios.create({
	// baseURL: "http://13.235.239.143:5000/v1/api", // Your API base URL
	// baseURL: 'https://rzf8hgnfma.execute-api.ap-south-1.amazonaws.com/prod/v1/api', // OLD API base URL
	baseURL:
		process.env.NODE_ENV === 'development'
		? 'https://jqjafti8m4.execute-api.eu-central-1.amazonaws.com'
		: 'https://jqjafti8m4.execute-api.eu-central-1.amazonaws.com', // NEW API base URL
});

// Request interceptor to include auth token in specific requests
recommendationApiService.interceptors.request.use(
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

export default recommendationApiService;
