import axios from "axios";

export const fetchChats = () => {
  return axios.get(`/api/chats`);
};

export const fetchChat = chatId => {
  return axios.post(`/api/chats/${chatId}`);
};

export const createChat = data => {
  return axios.post(`/api/chats/${data.chat}`, data);
};

export const fetchMessages = () => {
  return axios.get(`/api/messages`);
};

export const fetchMessage = messageId => {
  return axios.post(`/api/messages/${messageId}`);
};


export const createMessage = data => {
  return axios.post(`/api/messages/${data}`, data);
};
