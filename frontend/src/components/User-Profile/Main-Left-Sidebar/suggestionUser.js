import React, { Component } from 'react';
import * as API from '../../../api';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class SuggesstionUser extends Component {
    componentDidUpdate(prevProps) {
        let { account } = this.props;

        if (prevProps.account !== account) {
            this.getListUser();
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            listUser: []
        }
    }

    getListUser = () => {
        let { account } = this.props;
        API.getListUser(account).then(res => {
            this.setState({
                listUser: res.data.Users
            })
        })
            .catch(err => {
                console.log(err);
            })
    }

    onFollow = (other_id) => {
        let {account} = this.props;
        
        return API.followUser(account,other_id)
        .then(res=>{
            alert(res.data.message);
            this.getListUser();
        })
        .catch(err=>{
            console.log(err);
            alert('Something went wrong')
        })
    }

    unFollow = (other_id) => {
        let {account} = this.props;
        
        return API.unfollowUser(account,other_id)
        .then(res=>{
            alert(res.data.message);
            this.getListUser();
        })
        .catch(err=>{
            console.log(err);
            alert('Something went wrong')
        })
    }

    renderSuggestionUser = () => {
        let { listUser } = this.state;
        let {history} = this.props;
        return listUser ? listUser.map((user, index) => {
            return (
                <Link to={`user-profile?other_id=${user.id}`} 
                    onClick={()=>{history.push(`user-profile?other_id=${user.id}`);history.go()}} 
                    className="suggestion-usd" key={index}>
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div className="sgt-text">
                            <br/>
                            <h4>{user.name}</h4>
                        </div>
                        {!user.is_follow ?
                            <span><i className="la la-plus" onClick={() => this.onFollow(user.id)}></i></span>
                            :<span><i className="la la-minus" onClick={() => this.unFollow(user.id)}></i></span>
                        }
                </Link>
            )
        }) : ''
    }

    render() {
        let {history} = this.props
        return (
            <div className="suggestions full-width">
                <div className="sd-title">
                    <h3>People Viewed Profile</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>
                <div className="suggestions-list">
                    {this.renderSuggestionUser()}
                    <div className="view-more">
                        <Link to={"/all-user"}  onClick={() => { history.push(`/all-user`); history.go() }}>View More</Link>
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

export default withRouter(connect(mapStateToProps, null)(SuggesstionUser));