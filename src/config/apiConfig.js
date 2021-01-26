/* * Global configuration for axios * */
import axios from 'axios';
import requestHandler from './apiRequestConfigHandler';
import { successResponseHandler, errorResponseHandler } from './apiResponseHandler';

const configureServices = () => {
// Set the base url for api calls
  axios.defaults.baseURL = process.env.REACT_APP_UNSPLASH_BASE_URL;

  // Request interceptor
  axios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => Promise.reject(error),
  );

  // Response interceptor
  axios.interceptors.response.use(
    (response) => successResponseHandler(response),
    (error) => errorResponseHandler(error),
  );
};

// Gets the api request configuration
const getConfig = () => {
  const conf = {
    headers: {
        'Authorization': 'Client-ID ' + process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    }
  };
  return conf;
};

export { configureServices, getConfig };