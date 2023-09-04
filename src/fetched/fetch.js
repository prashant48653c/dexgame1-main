import axios from 'axios';

const API_URL = 'https://api.rawg.io/api';
const API_KEY = 'bf97d1478e0f47d1a28416155a8a0f04';

const params = {
  key: API_KEY,
  // You can add more parameters here, like ordering, filtering, etc.
};

export const fetchData = async (url) => {
  try {
    console.log("fetchData ran");
    const { data } = await axios.get(`${API_URL}/${url}`, {
      params: params,  // Corrected parameter placement
    });
   return data
  } catch (error) {
    console.log(error);
  }
};
