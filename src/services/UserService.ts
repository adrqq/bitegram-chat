import axios, { AxiosResponse } from 'axios';
import { ISelectedChat } from '../models/ISelectedChat';
import { IChat } from '../models/IChat';
const BASE_URL = 'http://127.0.0.1:537/user';

export default class UserService {
  static async searchUsers(searchQuery: string, userId: string): Promise<AxiosResponse<any>> {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        searchQuery,
        userId,
      },
    });

    return response;
  }

  static async getUserById(userId: string): Promise<AxiosResponse<any>> {
    const response = await axios.get(`${BASE_URL}/get-user-by-id`, {
      params: {
        userId,
      },
    });

    return response;
  }

  static async sendFriendRequest(
    userId: string,
    friendId: string
  ): Promise<AxiosResponse<any>> {
    const response = await axios.post(`${BASE_URL}/send-friend-request`, {
      userId,
      friendId,
    });

    return response;
  }

  static async checkFriendStatus(
    userId: string,
    friendId: string
  ): Promise<AxiosResponse<any>> {
    const response = await axios.get(`${BASE_URL}/check-friend-status`, {
      params: {
        userId,
        friendId,
      },
    });

    return response;
  }

  static async createChat(
    userId: string,
    friendId: string
  ): Promise<AxiosResponse<ISelectedChat>> {
    const response = await axios.post(`${BASE_URL}/create-chat`, {
      userId,
      friendId,
    });

    return response;
  }

  static async getChatById(
    chatId: string
  ): Promise<AxiosResponse<ISelectedChat>> {
    const response = await axios.get(`${BASE_URL}/get-chat-by-id`, {
      params: {
        chatId,
      },
    });

    return response;
  }

  static async getChatsInfoList(
    chatIds: string[]
  ): Promise<AxiosResponse<IChat>> {
    const response = await axios.get(`${BASE_URL}/get-chats-info-list`, {
      params: {
        chatIds,
      },
    });

    return response;
  }
}
