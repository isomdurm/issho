import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
      phoneNumber: "",
      requestId: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      phoneNumber: this.state.phoneNumber,
      requestId: this.state.requestId
    };

    this.props.signup(user)
      .then((user) => {
        this.props.history.push('/verify');
      });
  }

  renderErrors() {
    let errorsArray = Object.keys(this.state.errors);
    let error = this.state.errors[errorsArray[0]];
    return (
      <div className="error">
        <div className="error-text">
          {error}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <form className="session-form fade-in-down" onSubmit={this.handleSubmit}>
          <div className="session-form-items">
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.update("firstName")}
              placeholder="First Name"
              className="session-form-item"
            />

            <input
              type="text"
              value={this.state.lastName}
              onChange={this.update("lastName")}
              placeholder="Last Name"
              className="session-form-item"
            />

            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
              className="session-form-item"
            />

            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
              className="session-form-item"
            />

            <input
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
              className="session-form-item"
            />

            <input
              type="text"
              value={this.state.phoneNumber}
              onChange={this.update("phoneNumber")}
              placeholder="Number"
              className="session-form-item"
            />

            <input
              type="submit"
              value="Sign Up"
              // className="session-form-item"
              className="session-form-submit"
            />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
