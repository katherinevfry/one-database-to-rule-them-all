import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = 'https://the-one-api.dev/v2';
const token = firebaseConfig.apiKey;

const getMovies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movie`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  })
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getMovies;
