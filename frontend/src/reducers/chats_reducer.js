import { RECEIVE_CHATS, RECEIVE_CHAT } from "../actions/chat_actions";


const ChatsReducer = (
    state = {},
    action 
    ) => {
      Object.freeze(state);
      let newState = Object.assign({}, state);
      switch(action.type) {
        case RECEIVE_CHATS: 
          newState = action.chats.data;
          return newState;
        case RECEIVE_CHAT:
          newState = action.chat.data;
          return newState;
        default: 
          return state;
      }
};

export default ChatsReducer;