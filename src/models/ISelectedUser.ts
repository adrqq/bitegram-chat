import { ProfileStatus } from "../types/ProfileStatus";

export interface ISelectedUser {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  isActivated: boolean;
  bio: string;
  profilePicture: string;
  incomingFriendRequests: string[];
  friends: string[];
  status: ProfileStatus;
}