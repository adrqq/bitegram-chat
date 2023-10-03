import axios, { AxiosResponse } from "axios";
const BASE_URL = 'http://127.0.0.1:537';

export default class UserService {
  static searchUsers(searchQuery: string): Promise<AxiosResponse<any>> {
    const response = axios.get(`${BASE_URL}/user/search`, {
      params: {
        searchQuery,
      },
    });

    return response;
  }
}