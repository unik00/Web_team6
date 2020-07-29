import React, { Component } from 'react';
import {connect} from 'react-redux';
import  { Redirect } from 'react-router-dom'
import * as API from '../../api'
import * as actions from '../../redux/action/account'

class SigninForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            remember_me: false,
            error:  ''
        }
    }

    inputOnchange = (e) => {
        let { remember_me } = this.state;
        let target = e.target;
        if(target.name == 'remember_me'){
            return this.setState({
                remember_me: !remember_me
            })
        }
        this.setState({
            [target.name]: target.value
        })
    }

    onSignin = (e) => {
        e.preventDefault();
        let {username, password, remember_me} = this.state
        API.Signin({
            username,
            password,
            remember_me
        })
        .then(res=>{
            if(res.status == 200) {
                this.props.signin(res.data);
                this.setState({
                    error: ''
                })
                //redirect to home page
            }
        })
        .catch(err=>{
            console.log(err);
            this.setState({
                error: 'Username or Password is wrong!'
            })
        })
    }

    render() {
        let {remember_me ,error} = this.state;
        return (
            <div className="sign_in_sec current" id="tab-1">
                <h3>Sign in</h3>
                <form>
                    <div className="row">
                        <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                                <input type="text" name="username" placeholder="Username" onChange={this.inputOnchange} />
                                <i className="la la-user"></i>
                            </div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                                <input type="password" name="password" placeholder="Password" onChange={this.inputOnchange} />
                                <i className="la la-lock"></i>
                            </div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                            <div className="checky-sec">
                                <div className="fgt-sec">
                                    <input type="checkbox" name="remember_me" id="c1" checked={remember_me}  onChange={this.inputOnchange}/>
                                    <label htmlFor="c1">
                                        <span></span>
                                    </label>
                                    <small>Remember me</small>
                                </div>
                                <a href="#" title="">Forgot Password?</a>
                            </div>
                            <div style={{color: 'red'}}>{error}</div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                            <button onClick={this.onSignin}>Sign in</button>
                        </div>
                    </div>
                </form>
                <div className="login-resources">
                    <h4>Login Via Social Account</h4>
                    <ul>
                        <li><a href="#" title="" className="fb"><i className="fa fa-facebook"></i>Login Via Facebook</a></li>
                        <li><a href="#" title="" className="tw"><i className="fa fa-twitter"></i>Login Via Twitter</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        signin: (account) => {
            dispatch(actions.signin(account));
        }
    }
}

export default connect('',mapDispatchToProps)(SigninForm);