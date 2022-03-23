import axios from 'axios';

import config from '../../config/config';

const mercadoLibreApi = axios.create({
  baseURL: config.mercadoLibreApiUrl,
});

export default mercadoLibreApi;
