import React from "react";
import { withRouter } from "react-router-dom";

class VerifyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	data: {
    		pin: "",
      		requestId: this.props.user.requestId
    	}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentDidMount() {
  	console.log(this.props);
  	console.log("here");
  }

  componentWillReceiveProps(nextProps) {
  }

  update(field) {
    return e =>
      this.setState({
        data: {
        	pin: e.currentTarget.value,
        	requestId: this.props.user.requestId
        }
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.verify(this.state.data)
    	.then(() => {
        	this.props.history.push("/signin");
      	});
  }

  render() {
    return (
      <div className="verify-form-container">
        <form className="verify-form fade-in-down" onSubmit={this.handleSubmit}>
          <div className="verify-form-items">
            <input
              type="text"
              value={this.state.data.pin}
              onChange={this.update()}
              placeholder="Pin"
              className="verify-form-item"
            />

            <input
              type="submit"
              value="Verify"
              className="verify-form-submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(VerifyForm);
