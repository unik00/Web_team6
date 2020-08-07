import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as API from '../../../api';
import { connect } from 'react-redux';

class MessageBox extends Component {
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
            currentConversation: []
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
                    this.readMessage(res.data.data[0].id, 0)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    renderMessageNotification = () => {
        let { listMessage } = this.state
        return listMessage.map((message, index) => {
            return (
                <div className="notfication-details" key={index}>
                    <div className="notification-info">
                        <h3><Link to={'/message'} onClick={() => { this.props.history.push('/message'); this.props.history.go() }}>
                            {message.name}
                        </Link> </h3>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="notification-box msg">
                <div className="nott-list">
                    {this.renderMessageNotification()}
                    <div className="view-all-nots">
                        <Link to={'/message'} onClick={() => { this.props.history.push('/message'); this.props.history.go() }}>View All Messsages</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        account: state.account
    }
}

export default withRouter(connect(mapStateToProps, null)(MessageBox))