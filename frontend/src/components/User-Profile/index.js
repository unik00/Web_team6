import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as API from '../../api';
import {withRouter} from 'react-router-dom'

import CoverImage from './coverImage';
import MainLeftSidebar from './Main-Left-Sidebar/index';
import MainWsSec from './Main-WS-Sec/index';
import MainRightSidebar from './Main-Right-Sidebar/index';

class UserProfile extends Component {
    componentDidUpdate(prevProps) {
        let {history, account} = this.props;
        
        if(!account.is_login) return history.push('/signin');

        if (prevProps.account !== account) {
            API.ViewMyProfile(account)
                .then(res => {
                    if(res.status == 200){
                        this.setState({
                            ...res.data
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            address: null,
            birthday: null,
            class: null,
            gender: "",
            linkCV: null,
            linkFB: null,
            linkGit: null,
            mssv: null,
            my_profile: true,
            name: "",
            name_school: null,
            phone: null,
            school_id: null,
            status: null,
            type: "",
        }
    }

    render() {
        return (
            <div>
                <CoverImage />
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <MainLeftSidebar />
                                    <MainWsSec userInformation={this.state}/>
                                    <MainRightSidebar userInformation={this.state}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
}

export default withRouter(connect(mapStateToProps, '')(UserProfile))