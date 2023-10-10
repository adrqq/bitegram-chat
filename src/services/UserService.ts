import axios, { AxiosResponse } from 'axios';
const BASE_URL = 'http://127.0.0.1:537/user';

export default class UserService {
  static searchUsers(searchQuery: string): Promise<AxiosResponse<any>> {
    const response = axios.get(`${BASE_URL}/search`, {
      params: {
        searchQuery,
      },
    });

    return response;
  }

  static getUserById(userId: string): Promise<AxiosResponse<any>> {
    const response = axios.get(`${BASE_URL}/${userId}`);

    return response;
  }

  static sendFriendRequest(
    userId: string,
    friendId: string
  ): Promise<AxiosResponse<any>> {
    const response = axios.post(`${BASE_URL}/send-friend-request`, {
      userId,
      friendId,
    });

    return response;
  }
}
