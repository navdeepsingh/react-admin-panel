const config = {};

config.production = {
  'API_BASE_URL': process.env.API_URL
}
config.default = {
  'API_BASE_URL': 'http://localhost:8000'
}


const chosenConfig = process.env.NODE_ENV === 'production' ? config.production : config.default;

export default chosenConfig;