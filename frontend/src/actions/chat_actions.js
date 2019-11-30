import * as ChatAPIUtil from '../util/chat_api_util';

export const RECEIVE_CHATS = "RECEIVE_CHATS";
export const RECEIVE_CHAT = "RECEIVE_CHAT";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

const receiveChats = chats => ({
  type: RECEIVE_CHATS,
  chats
});

const receiveChat = chat => ({
  type: RECEIVE_CHAT,
  chat
});

const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const fetchChats = () => dispatch => {
  return ChatAPIUtil.fetchChats()
    .then( chats => dispatch(receiveChats(chats)))
    .catch(err => console.log(err));
};

export const fetchChat = chatId => dispatch => {
  return ChatAPIUtil.fetchChat(chatId)
    .then( chat => dispatch(receiveChat(chat)))
    .catch(err => console.log(err));
};

export const fetchMessages = () => dispatch => {
  return ChatAPIUtil.fetchMessages()
    .then(messages => dispatch(receiveMessages(messages)))
    .catch(err => console.log(err));
};

export const createChat = data => dispatch => {
  return ChatAPIUtil.createChat(data)
    .then(chat => dispatch(receiveChat(chat)))
    .catch(err => console.log(err));
};

export const createMessage = data => dispatch => {
  return ChatAPIUtil.createMessage(data)
    .then(message => dispatch(receiveMessage(message)))
    .catch(err => console.log(err));
};
