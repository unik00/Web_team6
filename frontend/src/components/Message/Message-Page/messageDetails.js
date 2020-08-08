import React, { Component } from 'react'
import * as API from '../../../api';
import {connect} from 'react-redux';

class MessageDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            sendMessageContent : ''
        }
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }
    
    renderCurrentConversation = () => {
        let { currentConversation } = this.props;
        return currentConversation.map((content, index) => {
            return (
                <div className={content.is_sender ? "main-message-box st3" : "main-message-box ta-right"} key={index}>
                    <div className={content.is_sender ? "message-dt st3":"message-dt"} style={{float:content.is_sender ? "left": "right"}}>
                        <div className="message-inner-dt" 
                            style={{overflow:'auto'}}
                        >
                                <p>{content.content}</p>
                        </div>
                        <span>{content.updated_at}</span>
                    </div>
                    <div className="messg-usr-img">
                        <img src="http://via.placeholder.com/50x50" alt="" />
                    </div>
                </div>
            )
        })
    }

    sendMessage = (e) => {
        e.preventDefault();
        let {sendMessageContent} = this.state;
        let { currentMessage,currentConversationIndex,readMessage,account, getMessages, newMessage } = this.props;
        let recipient_id = currentMessage && currentMessage.other_id ? currentMessage.other_id : newMessage && newMessage.user_id ? newMessage.user_id : '';
        API.SendMessage(account,{
            recipient_id,
            message:sendMessageContent
        })
        .then(res=>{
            if(res.status == 200 && res.data.success == true) {
                if(currentConversationIndex == -1) {
                    window.location.reload();
                    return getMessages();
                }
                this.setState({
                    sendMessageContent:''
                })
                return readMessage(currentMessage.id,currentConversationIndex);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        let { currentMessage, newMessage } = this.props;
        return (
            <div className="main-conversation-box">
                <div className="message-bar-head">
                    <div className="usr-msg-details">
                        <div className="usr-ms-img">
                            <img src="http://via.placeholder.com/50x50" alt="" />
                        </div>
                        <div className="usr-mg-info">
                            <h3>{currentMessage ? currentMessage.name : newMessage ? newMessage.name : ''}</h3>
                            <p>Online</p>
                        </div>
                    </div>
                    <a href="#" title=""><i className="fa fa-ellipsis-v"></i></a>
                </div>
                <div className="messages-line" style={{overflow:'scroll'}}>
                    <br/><br/><br/><br/><br/><br/>
                    {this.renderCurrentConversation()}
                </div>
                <div className="message-send-area">
                    <form>
                        <div className="mf-field">
                            <input type="text" name="sendMessageContent" placeholder="Type a message here" onChange={this.inputOnchange}/>
                            <button onClick={this.sendMessage}>Send</button>
                        </div>
                        <ul>
                            <li><a href="#" title=""><i className="fa fa-smile-o"></i></a></li>
                            <li><a href="#" title=""><i className="fa fa-camera"></i></a></li>
                            <li><a href="#" title=""><i className="fa fa-paperclip"></i></a></li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        account: state.account
    }
}

export default connect(mapStateToProps,null)(MessageDetails)