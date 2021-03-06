import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as API from '../../api';
import { withRouter } from 'react-router-dom'

import CoverImage from './coverImage';
import MainLeftSidebar from './Main-Left-Sidebar/index';
import MainWsSec from './Main-WS-Sec/index';
import MainRightSidebar from './Main-Right-Sidebar/index';

class UserProfile extends Component {
    componentDidUpdate(prevProps) {
        let { history, account } = this.props;

        if (!account.is_login){
            history.push('/signin');
            return history.go();
        }

        if (prevProps.account !== account) {
            this.getData(account);
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
            my_profile: false,
            name: "",
            name_school: null,
            phone: null,
            school_id: null,
            status: null,
            type: "",
            avatar:''
        }
    }
    
    getData = (account) => {
        let other_id = (new URLSearchParams(this.props.location.search)).get('other_id');
        if (other_id) {
            return API.ViewOtherProfile(account, other_id)
                .then(res => {
                    if (res.status == 200) {
                        this.setState({
                            ...res.data
                        })
                    }
                })
                .catch(err => console.log(err))
        }
        return API.ViewMyProfile(account)
            .then(res => {
                if (res.status == 200) {
                    this.setState({
                        ...res.data
                    })
                    this.getAvatar({...res.data});
                }
            })
            .catch(err => {
                console.log(err)
            })
    } 

    getAvatar = (userInformation) => {
        return API.getAvatar(userInformation.user_id)
        .then(res=>{
            if(res.data.success == true && res.data.path !== "http://backend_upstream/images/avatar"){
                return this.setState({
                    avatar:res.data.path
                })
            }
            this.setState({
                avatar:''
            })
        })
        .catch(err=>{
            this.setState({
                avatar:''
            })
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <CoverImage userInformation={this.state}/>
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <MainLeftSidebar userInformation={this.state} regetData={this.getData}/>
                                    <MainWsSec userInformation={this.state} regetData={this.getData}/>
                                    <MainRightSidebar userInformation={this.state} regetData={this.getData} />
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