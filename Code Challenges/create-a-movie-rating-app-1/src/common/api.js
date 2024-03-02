import axios from 'axios';

const globalConfig = {
  host: 'https://imdb8.p.rapidapi.com/',
  // cookies: { expires: 21, secure: false },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
  },
};

axios.defaults.baseURL = globalConfig.host;

export default {
  async get(url) {
    try {
      const res = await axios.get(url, globalConfig);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  async put(url, data) {
    try {
      const res = await axios.put(url, data, globalConfig);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  async post(url, data) {
    try {
      const res = await axios.post(url, data, globalConfig);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },

  async delete(url) {
    try {
      const res = await axios.delete(url, globalConfig);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
};
