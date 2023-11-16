export interface lastMessage {
  content: string;
  timestamp: string;
  isRead: boolean;
};

export interface IChat {
  id: string;
  friendId: string;
  friendNickname: string;
  friendProfilePicture: string;
  lastMessage: lastMessage;
};