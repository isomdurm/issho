import { connect } from "react-redux";
import { verify } from "../../actions/session_actions";
import VerifyForm from "./verify_form";

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    session: state.session,
    errors: state.errors.session,
    user: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    verify: data => dispatch(verify(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyForm);
