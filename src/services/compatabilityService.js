import axios from 'axios';

const compatibilityApiService = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? 'https://api.lilypad.co.in/v1/api/compatibility'
			: 'https://api.lilypad.co.in/v1/api/compatibility', // NEW API base URL
});

// Request interceptor to include auth token in specific requests
compatibilityApiService.interceptors.request.use(
	(config) => {
		let authToken = localStorage.getItem('token');

		if (authToken) {
			// Check if the request URL requires authorization (e.g., cart-related endpoints)
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

export default compatibilityApiService;
