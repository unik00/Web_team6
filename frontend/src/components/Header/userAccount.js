import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../redux/action/account'
import * as API from '../../api'

class UserAccount extends Component {
    onLogout = () => {
        let {account, history, logout} = this.props;
        if(!account){
            return alert('You must login first');
        }

        return API.Logout(account)
        .then(res=>{
            if(res.status == 200){
                logout();
                history.push('/signin');
                return history.go();
            }
            return alert(`logout return status ${res.status}`)
        })
        .catch(err=>{
            console.log(err);
            return alert(`Something went wrong`)
        })
    }
    render() {
        let {avatar, userInformation} = this.props
        return (
            <div className="user-account">
                <div className="user-info">
                     <img src={avatar ? `http://localhost:8000/${avatar.slice(24,avatar.length)}`
                            : "http://via.placeholder.com/30x30"} alt=""
                            style={{width:30+'px', height: 30 + 'px'}}/>
                    <a href="#" title="">{userInformation?userInformation.name:''}</a>
                    <i className="la la-sort-down"></i>
                </div>
                <div className="user-account-settingss">
                    <h3 className="tc">
                        <button onClick={this.onLogout} style={{border:'none', cursor: 'pointer'}} title="">Logout</button>
                    </h3>
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

const mapDispatchToProps = (dispatch, props) => {
    return{
        logout: () => {
            dispatch(actions.logout());
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserAccount))