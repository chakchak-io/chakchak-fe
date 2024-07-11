import axios from 'axios';
import qs from 'qs';

import { BaseAPI } from './default-api';

// import { env } from "~/env.mjs"

export const instance = axios.create({
  // baseURL: env.SERVER_ENDPOINT,
  withCredentials: true,
  paramsSerializer: {
    encode: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

const client = new BaseAPI(undefined, undefined, instance);
export default client;
