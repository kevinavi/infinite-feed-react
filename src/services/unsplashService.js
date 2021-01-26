import axios from 'axios';
import { getConfig } from '../config/apiConfig';

export const getListOfPhotos = async () => {
    // Count of photos to be loaded on every api call
    const requiredCountOfPhotos = 12;

    try {
      const config = getConfig();

      // GET https://api.unsplash.com/photos/random?count=12
      const response = await axios.get('photos/random', {
        ...config,
        params: {
          count: requiredCountOfPhotos
        }
      });
      return response.data;
    } catch (err) {
      throw err.response;
    }
  };