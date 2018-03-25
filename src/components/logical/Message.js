import React, { Component } from "react";

class Message extends Component {
  render() {
    return <div className="messageDiv">{this.props.message}</div>;
  }
}
Message.defaultProps = {
  name: "Pick an ick, Mick"
};

export default Message;
