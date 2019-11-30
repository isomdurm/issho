import React from "react";

class Chats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	loaded: false,
    	message: {
      		body: ""
    	}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  	this.props.getMessages()
  		.then(() => this.props.getChat(this.props.match.params.id))
  		.then(() => this.setState({ loaded: true }));
  }

  update() {
    return e => {
    	this.setState({
        	message: {
          		sender: this.props.user.id,
          		body: e.currentTarget.value,
          		chat: this.props.match.params.id
        	}
      	});
    } 
  }

  handleSubmit(e) {
    e.preventDefault();
    let body = this.state.message;

    this.props.createMessage(body);
  }

  render() {
  	if (!this.state.loaded) {
      return null;
    }

  	let messages = this.props.messages;

  	let messageUl = <ul></ul>

  	if (messages) {
  		messageUl = <ul>
          				{messages.map(message => {
            				return <li key={message.id}> { message._id } </li>
          				})}
        			</ul>
  	}

    return (
    
      <div className="chats">
        <h2 className="chats-title bold">messages</h2>

        { messageUl }

        <form onSubmit={this.handleSubmit} className="message-form">
          	<input
                onChange={this.update("body")}
                type="text"
                value={this.state.body}
                placeholder="message"
            />
          
          	<input type="submit" value="Send Message" className="chat-button bold"/>
        </form>
  
      </div>
    );
  }
}

export default Chats;