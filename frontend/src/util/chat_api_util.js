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

