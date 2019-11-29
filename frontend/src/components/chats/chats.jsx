import React from "react";

class Chats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	chat: {
      		users: "",
      		name: "",
      		color: "",
      		emoji: ""
      	}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  	this.props.getChats();
  }


  update(field) {
    return e => {
    	this.setState({ 
    		[field]: e.target.value
    	});
    } 
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let chat = this.state.chat;

    this.props.createChat(chat);
  }

  render() {
  	let chats = this.props.chats;
    return (
    
      <div className="chats">
        <h2 className="chats-title bold">Chats</h2>
  

        <form onSubmit={this.handleSubmit} className="chat-form">
          	<input
                onChange={this.update("users")}
                type="text"
                value={this.state.users}
                placeholder="Users"
            />

            <input
                onChange={this.update("name")}
                type="text"
                value={this.state.name}
                placeholder="Chat Name"
            />

            <input
                onChange={this.update("color")}
                type="text"
                value={this.state.color}
                placeholder="Chat Color"
            />

            <input
                onChange={this.update("emoji")}
                type="text"
                value={this.state.emoji}
                placeholder="Chat Emoji"
            />

          <input type="submit" value="Create Chat" className="chat-button bold"/>
        </form>
  
      </div>
    );
  }
}

export default Chats;