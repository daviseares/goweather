import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export default api;
