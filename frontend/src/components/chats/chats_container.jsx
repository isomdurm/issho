import { connect } from "react-redux";
import { fetchChats, createChat } from "../../actions/chat_actions";
import Chats from './chats';


const mSTP = (state, ownProps) => {
  return {
    user: state.session.user
  };
};

const mDTP = dispatch => ({
  getChats: () => dispatch(fetchChats()),
  createChat: data => dispatch(createChat(data))
});

export default connect(mSTP, mDTP)(Chats);
