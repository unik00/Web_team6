import React, { Component } from 'react';
import MessageList from './messageList';
import MessageDetails from './messageDetails';

import * as API from '../../../api';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MessagePage extends Component {
    componentDidUpdate(prevProps) {
        let { account, history } = this.props;

        if (!account.is_login) return history.push('/signin');

        if (prevProps.account !== account) {
            this.getMessages();
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            listMessage: [],
            currentConversationIndex: 0,
            currentConversation: [],
            newMessage:null
        }
    }

    getMessages = () => {
        let { account } = this.props;
        let index = -1;
        let other_id = (new URLSearchParams(this.props.location.search)).get('other_id');
        API.GetMessages(account)
            .then(res => {
                if (res.status == 200 && res.data.success) {
                    this.setState({
                        listMessage: res.data.data
                    })
                    if (other_id) {
                        index = res.data.data.map(e => e.other_id).indexOf(parseInt(other_id))
                        if (index >= 0) {
                            this.readMessage(res.data.data[index].id, index);
                            this.setState({
                                currentConversationIndex: index,
                                newMessage: null
                            })
                        }
                        else {
                            return this.newConversation(other_id);
                        }
                    }
                    else
                        this.readMessage(res.data.data[0].id, 0)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    newConversation = (other_id) => {
        let {account} = this.props
        return API.ViewOtherProfile(account, other_id)
            .then(res => {
                if (res.status == 200) {
                    this.setState({
                        newMessage: res.data,
                        currentConversationIndex: -1
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    readMessage = (idConversation, index) => {
        let { account } = this.props;
        if(index != -1){
            API.ReadMessage(account, idConversation)
            .then(res => {
                if (res.status == 200 && res.data.success == true) {
                    this.setState({
                        currentConversation: res.data.data,
                        currentConversationIndex: index
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
        else{
            this.setState({
                currentConversation: [],
                currentConversationIndex: -1
            })
        }
    }
    render() {
        let { listMessage, currentConversation, currentConversationIndex, newMessage } = this.state;
        let { account } = this.props;
        if (account)
            return (
                <section className="messages-page">
                    <div className="container">
                        <div className="messages-sec">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 no-pdd">
                                    <div className="msgs-list">
                                        <div className="msg-title">
                                            <h3>Messages</h3>
                                        </div>
                                        <MessageList listMessage={listMessage} readMessage={this.readMessage} currentBox={currentConversationIndex} newMessage={newMessage}/>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
                                    <MessageDetails currentMessage={listMessage[currentConversationIndex]}
                                        currentConversation={currentConversation}
                                        newMessage={newMessage}
                                        readMessage={this.readMessage}
                                        getMessages={this.getMessages}
                                        currentConversationIndex={currentConversationIndex} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            )
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
}
export default withRouter(connect(mapStateToProps, null)(MessagePage));