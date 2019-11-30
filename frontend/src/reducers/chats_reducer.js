import { RECEIVE_CHATS, RECEIVE_CHAT, RECEIVE_MESSAGES, RECEIVE_MESSAGE } from "../actions/chat_actions";


const ChatsReducer = (
    state = {
      messages: {}, chats: {}
    },
    action 
    ) => {
      Object.freeze(state);
      let newState = Object.assign({}, state);
      switch(action.type) {
        case RECEIVE_CHATS: 
          newState = action.chats.data;
          return newState;
        case RECEIVE_CHAT:
          newState = action.chats.data;
          return newState;
        case RECEIVE_MESSAGES: 
          newState = action.messages.data;
          return newState;
        case RECEIVE_MESSAGE:
          newState = action.messages.data;
          return newState;
        default: 
          return state;
      }
};

export default ChatsReducer;