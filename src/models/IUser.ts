export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  isActivated: boolean;
  bio: string;
  profilePicture: string;
  incomingFriendRequests: string[];
  outgoingFriendRequests: string[];
  friends: string[];
  chats: string[];
  groups: string[];
}