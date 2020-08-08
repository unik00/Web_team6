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
        return (
            <div className="user-account">
                <div className="user-info">
                    <img src="http://via.placeholder.com/30x30" alt="" />
                    <a href="#" title="">John</a>
                    <i className="la la-sort-down"></i>
                </div>
                <div className="user-account-settingss">
                    <h3>Online Status</h3>
                    <ul className="on-off-status">
                        <li>
                            <div className="fgt-sec">
                                <input type="radio" name="cc" id="c5" />
                                <label htmlFor="c5">
                                    <span></span>
                                </label>
                                <small>Online</small>
                            </div>
                        </li>
                        <li>
                            <div className="fgt-sec">
                                <input type="radio" name="cc" id="c6" />
                                <label htmlFor="c6">
                                    <span></span>
                                </label>
                                <small>Offline</small>
                            </div>
                        </li>
                    </ul>
                    <h3>Custom Status</h3>
                    <div className="search_htmlForm">
                        <form>
                            <input type="text" name="search" />
                            <button type="submit">Ok</button>
                        </form>
                    </div>
                    <h3>Setting</h3>
                    <ul className="us-links">
                        <li><a href="profile-account-setting.html" title="">Account Setting</a></li>
                        <li><a href="#" title="">Privacy</a></li>
                        <li><a href="#" title="">Faqs</a></li>
                        <li><a href="#" title="">Terms & Conditions</a></li>
                    </ul>
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