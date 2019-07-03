const config = {};

config.API_BASE_URL = process.ENV.API_URL ? process.ENV.API_URL : 'http://localhost:8000';

export default config;