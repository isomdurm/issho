import * as ChatAPIUtil from '../util/chat_api_util';

export const RECEIVE_CHATS = "RECEIVE_CHATS";
export const RECEIVE_CHAT = "RECEIVE_CHAT";

const receiveChats = chats => ({
  type: RECEIVE_CHATS,
  chats
});

const receiveChat = chat => ({
  type: RECEIVE_CHAT,
  chat
});

export const fetchChats = () => dispatch => {
  return ChatAPIUtil.fetchChats()
    .then( chats => dispatch(receiveChats(chats)))
    .catch(err => console.log(err));
};

export const fetchChat = () => dispatch => {
  return ChatAPIUtil.fetchChat()
    .then( chat => dispatch(receiveChat(chat)))
    .catch(err => console.log(err));
};

export const createChat = data => dispatch => {
  return ChatAPIUtil.createChat(data)
    .then(chat => dispatch(receiveChat(chat)))
    .catch(err => console.log(err));
};
