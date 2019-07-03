const configuration = {};

configuration.production = {
  API_BASE_URL: process.env.API_URL
}
configuration.default = {
  API_BASE_URL: 'http://localhost:8000'
}


const config = process.env.NODE_ENV === 'production' ? configuration.production : configuration.default;

export default config;