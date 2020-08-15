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
        let {account,history} = this.props;
        
        return API.followUser(account,other_id)
        .then(res=>{
            alert(res.data.message);
            this.getListUser();
            history.go();
        })
        .catch(err=>{
            console.log(err);
            alert('Something went wrong')
        })
    }

    unFollow = (other_id) => {
        let {account,history} = this.props;
        
        return API.unfollowUser(account,other_id)
        .then(res=>{
            alert(res.data.message);
            this.getListUser();
            history.go();
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
                <div  className="suggestion-usd" key={index}>
                        <img src={user && user.avatar ? `http://localhost:8000/images/avatar/${user.avatar}` 
                            :"http://via.placeholder.com/35x35"} alt="" 
                            style={{width:35+'px', height: 35 + 'px'}}/>
                        <Link className="sgt-text" to={`user-profile?other_id=${user.id}`} 
                            onClick={()=>{history.push(`user-profile?other_id=${user.id}`);history.go()}}>
                            <br/>
                            <h4>{user.name}</h4>
                        </Link>
                        {!user.is_follow ?
                            <span><i className="la la-plus" onClick={() => this.onFollow(user.id)}></i></span>
                            :<span><i className="la la-minus" onClick={() => this.unFollow(user.id)}></i></span>
                        }
                </div>
            )
        }) : ''
    }

    render() {
        let {history} = this.props
        return (
            <div className="suggestions full-width">
                <div className="sd-title">
                    <h3>You may know...</h3>
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