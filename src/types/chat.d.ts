import type { Store } from "./store";

export type Chat = {
  id?: string;
  lastTime?: string;
  userUnreadCount?: number;
  messages?: Message[];
  store?: Store;
};

export type Message = {
  id: string;
  chatId: string;
  content: string;
  sendTime: string;
  isSelf: boolean;
};
