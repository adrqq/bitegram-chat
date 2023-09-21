import axios, { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";


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
}