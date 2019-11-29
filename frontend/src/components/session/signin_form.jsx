import React from "react";
import { withRouter } from "react-router-dom";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.fetchTopHeadlines = this.fetchTopHeadlines.bind(this);
  }

  componentDidMount() {
    this.fetchTopHeadlines();
  }

  fetchTopHeadlines() {
    fetch('/api/top-headlines', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).catch((error) => {
      console.log(error)
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/");
    }

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
      email: this.state.email,
      password: this.state.password
    };

    this.props.signin(user);
  }

  renderErrors() {
    let errorsArray = Object.keys(this.state.errors);
    let error = this.state.errors[errorsArray[0]];
    return (
      <div className="error">
        <div className="error-text">{error}</div>
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
              type="submit"
              value="Log In"
              className="session-form-submit"
            />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignInForm);
