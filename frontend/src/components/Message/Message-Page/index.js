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
            currentConversation:[]
        }
    }

    getMessages = () => {
        let { account } = this.props;
        API.GetMessages(account)
            .then(res => {
                if (res.status == 200 && res.data.success) {
                    console.log(res.data.data)
                    this.setState({
                        listMessage: res.data.data
                    })
                    this.readMessage(res.data.data[0].id,0)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    readMessage = (idConversation, index) => {
        let { account } = this.props;
        API.ReadMessage(account, idConversation)
            .then(res => {
                if(res.status == 200 && res.data.success == true){
                    console.log(res);
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
    render() {
        let { listMessage, currentConversation, currentConversationIndex } = this.state;
        let {account} = this.props;
        if(account)
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
                                    <MessageList listMessage={listMessage} readMessage={this.readMessage} />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
                                <MessageDetails currentMessage={listMessage[currentConversationIndex]} 
                                                currentConversation={currentConversation}
                                                readMessage={this.readMessage}
                                                currentConversationIndex={currentConversationIndex}/>
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