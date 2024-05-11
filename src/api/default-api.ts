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

  public getUserAccount = async (userId: string) => {
    console.log('getAppAccount', userId);
    // const response = await this.axios.get<{
    //   id: string;
    //   name: string;
    //   email: string;
    // }>('/app-account');
    // return response.data;

    return {
      data: {
        id: uuid(),
        name: 'Tinkerbell',
        email: 'tinerbell@eventfairy.com',
      },
    };
  };

  public updateUserAccount = async (userId: string) => {
    console.log('updateUser', userId);

    return {
      data: {
        id: uuid(),
        name: 'Tinkerbell modified',
        email: 'tinerbell@eventfairy.com',
      },
    };
  };

  public deleteUserAccount = async (userId: string): Promise<void> => {
    console.log('deleteUser', userId);

    return;
  };

  public getEventEnrollmentInfo = async () => {
    return {
      data: [
        {
          id: uuid(),
          name: 'Tinkerbell',
          email: 'tinerbell@eventfairy.com',
        },
      ],
    };
  };
}
