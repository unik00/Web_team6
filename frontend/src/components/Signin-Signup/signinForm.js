import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as API from '../../api'
import * as actions from '../../redux/action/account'

class SigninForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            remember_me: false,
            error: ''
        }
    }

    inputOnchange = (e) => {
        let { remember_me } = this.state;
        let target = e.target;
        if (target.name == 'remember_me') {
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
        let { username, password, remember_me } = this.state;
        let {history} = this.props;
        API.Signin({
            username,
            password,
            remember_me
        })
            .then(res => {
                if (res.status == 200) {
                    console.log(res);
                    this.setState({
                        error: ''
                    })

                    if(res.data.is_active == false){
                        return alert('Account is not active by admin')
                    }
                    this.props.signin(res.data);
                    history.push('/user-profile');
                    return history.go();
                }
                return alert(`login with status ${res.status}`)
            })
            .catch((err) => {
                console.log(err);
                let errors = [];
                let message = '';
                if (err.response && err.response.data) {
                    message = err.response.data['message'];
                    errors = err.response.data.errors ? Object.values(err.response.data.errors)[0] : []
                }
                this.setState({
                    error: errors[0] ? errors[0] : (message ? message : 'username or password is incorrect')
                })
            })
    }

    render() {
        let { remember_me, error } = this.state;
        
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
                                    <input type="checkbox" name="remember_me" id="c1" checked={remember_me} onChange={this.inputOnchange} />
                                    <label htmlFor="c1">
                                        <span></span>
                                    </label>
                                    <small>Remember me</small>
                                </div>
                                <a href="#" title="">Forgot Password?</a>
                            </div>
                            <div style={{ color: 'red' }}>{error}</div>
                        </div>
                        <div className="col-lg-12 no-pdd">
                            <button onClick={this.onSignin}>Sign in</button>
                        </div>
                    </div>
                </form>
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

export default withRouter(connect('', mapDispatchToProps)(SigninForm));