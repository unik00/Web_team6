import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentBox: 0
        }
    }
    
    renderListMessage = () => {
        let { listMessage, readMessage } = this.props;
        let {currentBox} = this.state;
        return listMessage.map((message, index) => {
            return (
                <li className={currentBox == index ?"active":''} key={index} onClick={() => this.readMessage(message.id, index)}>
                    <div className="usr-msg-details">
                        <div className="usr-ms-img">
                            <img src="http://via.placeholder.com/50x50" alt="" />
                            <span className="msg-status"></span>
                        </div>
                        <div className="usr-mg-info">
                            <br/>
                            <h3>{message.name}</h3>
                        </div>
                        <span className="posted_time">{message.updated_at}</span>
                        {message.unread != 0 ? <span className="msg-notifc">{message.unread}</span>:''}
                    </div>
                </li>
            )
        })
    }
    readMessage = (idConversation, index) => {
        this.setState({
            currentBox:index
        });
        this.props.readMessage(idConversation, index);
    }
    render() {
        return (
            <div className="messages-list">
                <ul>
                    {this.renderListMessage()}
                </ul>
            </div>
        )
    }
}

export default MessageList