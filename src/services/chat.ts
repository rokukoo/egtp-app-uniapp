import type { Chat, Message } from "@/types";
import { Method, http } from "@/utils/http";

export const getOrCreateChatApi = (storeId: string) => {
  return http<Chat>({
    method: Method.GET,
    url: `/chat/getOrCreateChat/${storeId}`,
  }).then((res) => {
    if (res.data) {
      return res.data;
    }
  });
};

export const getChatApi = (chatId: string) => {
  return http<Chat>({
    method: Method.GET,
    url: `/chat/getChat?chatId=${chatId}`,
  }).then((res) => {
    if (res.data) {
      return res.data;
    }
  });
};

export const sendMessageApi = (chatId: string, content: string) => {
  return http<Message>({
    method: Method.POST,
    url: "/chat/sendMessage",
    data: {
      from: "web", // Add this line to the data object
      chatId,
      content,
    },
  });
};

export const listChatApi = () => {
  return http<Chat[]>({
    method: Method.GET,
    url: "/chat/list",
    data: {
      from: "user",
    },
  });
};
