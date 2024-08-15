import axios, { AxiosInstance } from 'axios';
import { v4 as uuid } from 'uuid';

type Configuration = {
  basePath?: string;
};

const BASE_PATH = 'http://localhost:8080';

const globalAxios = axios.create({
  baseURL: BASE_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});

// @TODO: replace to real API

interface AppAccount {
  id: string;
  name: string;
  email: string;
}

export class BaseAPI {
  protected configuration: Configuration | undefined;

  constructor(
    configuration?: Configuration,
    protected basePath: string = BASE_PATH,
    protected axios: AxiosInstance = globalAxios,
  ) {
    if (configuration) {
      this.configuration = configuration;
    }
    this.basePath = basePath;
    this.axios = axios;
  }

  public getAppAccount = async () => {
    // const response = await this.axios.get<{
    //   id: string;
    //   name: string;
    //   email: string;
    // }>('/app-account');
    // return response.data;

    return {
      id: uuid(),
      name: 'Tinkerbell',
      email: 'tinerbell@eventfairy.com',
    } as AppAccount;
  };
}
