import React, { Component } from 'react';
import * as API from '../../api';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import MainLeftSidebar from './Main-Left-Sidebar_Home/index';
import MainRightSidebar from './Main-Right-Sidebar-Home/index';
import MainSwSecHome from './Main-SW-Sec-Home/index';

class Home extends Component {
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
        let userInformation = this.state;
        return (
            <main>
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <MainLeftSidebar userInformation={userInformation}/>
                                <MainSwSecHome userInformation={userInformation}/>
                                <MainRightSidebar/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
}

export default withRouter(connect(mapStateToProps, '')(Home));