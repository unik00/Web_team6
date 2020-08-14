import React, { Component } from 'react';
import * as API from '../../api';
import {connect} from 'react-redux';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listNotice: []
        }
    }
    getNotice = () => {
        let {account} = this.props;
        return API.getNotice(account)
        .then(res=>{
            if(res.data.success){
                this.setState({
                    listNotice:res.data.notices
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    renderNotice = () => {
        let {listNotice} = this.state;
        return listNotice.map((notice,index) => {
            let timeAgo = Date.now() - new Date(notice.created_at);
            return(
                <div className="notfication-details" key={index}>
                    <div className="notification-info">
                        <h3><a>{notice.name}</a> {notice.content}</h3><br/>
                        <span>{timeAgo / 3600000 >= 1 ? parseInt(timeAgo / 3600000) + ' hour ago' :
                                            timeAgo / 60000 >= 1 ? parseInt(timeAgo / 60000) + ' minutes ago' :
                                                parseInt(timeAgo / 1000) + 's ago'}</span>
                    </div>
                </div>
            )
        })
    }
    removeAll = () => {
        let {account} = this.props
        return API.removeNotice(account)
        .then(res=>{
            if(res.data.success){
                this.setState({
                    listNotice:[]
                })
                return alert(res.data.message)
            }
            else return alert('Something ent wrong')
        })
        .catch(err=>{
            console.log(err);
            return alert('Something went wrong')
        })
    }
    render() {
        return (
            <li>
                <a className="not-box-open" onClick={this.getNotice} style={{cursor: 'pointer'}}>
                    <span><img src={require("../../assets/images/icon7.png")} alt="" /></span>
					Notification
				</a>
                <div className="notification-box">
                    <div className="nt-title">
                        <a style={{cursor: 'pointer'}} onClick={this.removeAll}>Clear all</a>
                    </div>
                    <div className="nott-list">
                        {this.renderNotice()}
                    </div>
                </div>
            </li>
        )
    }
}

const mapStateToProps = state => {
    return {
        account: state.account
    }
}

export default connect(mapStateToProps,null)(Notification)