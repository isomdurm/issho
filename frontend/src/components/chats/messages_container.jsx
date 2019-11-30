import { connect } from "react-redux";
import { fetchChat, fetchMessages, createMessage } from "../../actions/chat_actions";
import Messages from './messages';


const mSTP = (state, ownProps) => {
  return {
    messages: state.messages
  };
};

const mDTP = dispatch => ({
  getChat: () => dispatch(fetchChat()),
  getMessages: () => dispatch(fetchMessages()),
  createMessage: data => dispatch(createMessage(data))
});

export default connect(mSTP, mDTP)(Messages);
