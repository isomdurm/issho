import { connect } from "react-redux";
import { signin } from "../../actions/session_actions";
import SignInForm from "./signin_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: user => dispatch(signin(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
