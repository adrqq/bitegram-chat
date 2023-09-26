import axios, { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";
const BASE_URL = 'http://127.0.0.1:537';


export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/login', {
      email,
      password,
    });
  }

  static async register(email: string, password: string, firstName: string, lastName: string, nickname: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/register', {
      email,
      password,
      firstName,
      lastName,
      nickname
    });
  }

  static async sandActivationMail(email: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/send-activation-link', {
      email,
    });
  }

  static async checkAuth(): Promise<AxiosResponse<AuthResponse>> {
    const response = await axios.get<AuthResponse>(`${BASE_URL}/auth/refresh`, { withCredentials: true });

    return response;
  }
}