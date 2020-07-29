import React, { Component } from 'react';

import SigninForm from './signinForm';
import SignupForm from './signupForm'

class Signin extends Component {
    render() {
        return (
            <div className="sign-in-page sign-in">
                <div className="signin-popup">
                    <div className="signin-pop">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="cmp-info">
                                    <div className="cm-logo">
                                        <img src={require('../../assets/images/cm-logo.png')} alt="" />
                                        <p>Workwise,  is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
                                    </div>
                                    <img src={require('../../assets/images/cm-main-img.png')} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="login-sec">
                                    <ul className="sign-control">
                                        <li data-tab="tab-1" className="current"><a href="#" title="">Sign in</a></li>
                                        <li data-tab="tab-2"><a href="#" title="">Sign up</a></li>
                                    </ul>
                                    <SigninForm/>
                                    <SignupForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin