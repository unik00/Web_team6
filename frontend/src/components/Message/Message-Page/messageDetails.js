import React, { Component } from 'react'
import * as API from '../../../api';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

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
            let timeAgo = Date.now() - new Date(content.created_at);
            return (
                <div className={content.is_sender ? "main-message-box st3" : "main-message-box ta-right"} key={index}>
                    <div className={content.is_sender ? "message-dt":"message-dt st3"} style={{float:content.is_sender ? "left": "right"}}>
                        <div className="message-inner-dt" 
                            style={{overflow:'auto'}}
                        >
                                <p>{content.content}</p>
                        </div>
                        <span>{timeAgo / 3600000 >= 1 ? parseInt(timeAgo / 3600000) + ' hour ago' :
                                            timeAgo / 60000 >= 1 ? parseInt(timeAgo / 60000) + ' minutes ago' :
                                                parseInt(timeAgo / 1000) + 's ago'}</span>
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
                    getMessages();
                }
                return readMessage(currentMessage.id,currentConversationIndex);
            }
            this.setState({
                sendMessageContent:''
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        let { currentMessage, newMessage, history } = this.props;
        let { sendMessageContent} = this.state;
        let time_last_onlien = currentMessage ? (Date.now() - new Date(currentMessage.last_online_at)) : 0;
        return (
            <div className="main-conversation-box">
                <div className="message-bar-head">
                    <div className="usr-msg-details">
                        <div className="usr-ms-img">
                            <img src="http://via.placeholder.com/50x50" alt="" />
                        </div>
                        <div className="usr-mg-info">
                            <Link to={`user-profile?id=${currentMessage ? currentMessage.other_id: ''}`}
                                onClick={()=>{history.push(`user-profile?id=${currentMessage ? currentMessage.other_id:''}`)
                                history.go()}}>
                                <h3>
                                    {currentMessage ? currentMessage.name : newMessage ? newMessage.name : ''}
                                </h3>
                            </Link>
                            <p>{time_last_onlien && time_last_onlien > 120000 ? 'Offline' : 'Online'}</p>
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
                            <input type="text" name="sendMessageContent" value={sendMessageContent} placeholder="Type a message here" onChange={this.inputOnchange}/>
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

export default withRouter(connect(mapStateToProps,null)(MessageDetails))