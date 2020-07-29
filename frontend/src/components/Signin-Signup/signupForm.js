import React, { Component } from 'react';
import * as API from '../../api';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            type: 'Student',
            password: '',
            password_confirmation: '',
            agreeConditions: false,
            error: ''
        }
    }

    inputOnchange = (e) => {
        let { agreeConditions } = this.state;
        let target = e.target;
        if (target.name == 'agreeConditions') {
            return this.setState({
                agreeConditions: !agreeConditions
            })
        }
        this.setState({
            [target.name]: target.value
        })
    }

    onChangeAccountType = (e) => {
        this.setState({
            type: e.target.value
        })
    }

    onSignup = (e) => {
        e.preventDefault();
        console.log(this.state);
        let { username, email, password, password_confirmation, type, agreeConditions } = this.state;

        if (agreeConditions) {
            return API.Signup({
                username,
                email,
                type,
                password,
                password_confirmation
            })
                .then(res => {
                    console.log(res);
                    this.setState({
                        error: ''
                    })
                    //if success redirect to profile with type
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            this.setState({
                error: 'Please agree to the workwise Terms & Conditions.'
            })
        }
    }

    render() {
        let { agreeConditions, type, error } = this.state;
        return (
            <div className="sign_in_sec" id="tab-2">
                <h3>Sign up</h3>
                <div className="dff-tab current" id="tab-3">
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
                                    <input type="text" name="email" placeholder="Email" onChange={this.inputOnchange} />
                                    <i className="la la-envelope"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <select value={type} onChange={this.onChangeAccountType}>
                                        <option value='Student'>Student</option>
                                        <option value='Company' >Company</option>
                                        <option value="School">School</option>
                                    </select>
                                    <i className="la la-dropbox"></i>
                                    <span><i className="fa fa-ellipsis-h"></i></span>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="password" name="password" placeholder="Password" onChange={this.inputOnchange} />
                                    <i className="la la-lock"></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="password" name="password_confirmation" placeholder="Repeat Password" onChange={this.inputOnchange} />
                                    <i className="la la-lock"></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="checky-sec st2">
                                    <div className="fgt-sec">
                                        <input type="checkbox" name="agreeConditions" id="c2" checked={agreeConditions} onChange={this.inputOnchange} />
                                        <label htmlFor="c2">
                                            <span></span>
                                        </label>
                                        <small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
                                    </div>
                                </div>
                            </div>
                            <div style={{ color: 'red' }}>{error}</div>
                            <div className="col-lg-12 no-pdd" className="col-lg-12 no-pdd">
                                <button onClick={this.onSignup}>Get Started</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm