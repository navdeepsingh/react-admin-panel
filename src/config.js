const config = {};

config.API_BASE_URL = (process.env.API_URL !== undefined) ? process.env.API_URL : 'http://localhost:8000';

export default config;