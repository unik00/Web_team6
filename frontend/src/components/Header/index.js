import React, { Component } from 'react'

import SearchBar from './searchBar';
import Messages from './messages';
import Notification from './notification';
import UserAccount from './userAccount';

import {Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as API from '../../api';

class Header extends Component {
    componentDidUpdate(prevProps) {
        let { account, history } = this.props;

        if (prevProps.account !== account) {
            return API.ViewMyProfile(account)
            .then(res => {
                if (res.status == 200) {
                    if(res.data.type == "Admin"){
                        history.push('/admin');
                    }
                    this.setState({
                        userInformation :res.data
                    })
                    this.getAvatar({...res.data});
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
    
    constructor(props) {
        super(props)
        this.state = {
            userInformation: null,
            avatar:''
        }
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
        let {history} = this.props
        let {avatar, userInformation} = this.state
        return (
            <header>
                <div className="container">
                    <div className="header-data">
                        <div className="logo">
                            <a href="/" title=""><img src={require('../../assets/images/logo.png')} alt="" /></a>
                        </div>
                        <SearchBar/>
                        <nav>
                            <ul>
                                <li>
                                    <Link to={'/'} onClick={()=>{history.push('/'); history.go()}}>
                                        <span><img src={require("../../assets/images/icon1.png")} alt="" /></span>
									Home
								</Link>
                                </li>
                                <li>
                                    <Link to={'/all-user'} onClick={()=>{history.push('/all-user'); history.go()}}>
                                        <span><img src={require("../../assets/images/icon2.png")} alt="" /></span>
									Companies
								</Link>
                                </li>
                                <li>
                                    <Link to={'/user-profile'} onClick={()=>{history.push('/user-profile'); history.go()}}>
                                        <span><img src={require("../../assets/images/icon4.png")} alt="" /></span>
									Profiles
								</Link>
                                </li>
                                <li>
                                    <Link to={'/jobs'} onClick={()=>{history.push('/jobs'); history.go()}}>
                                        <span><img src={require("../../assets/images/icon5.png")} alt="" /></span>
									Jobs
								</Link>
                                </li>
                                <li>
                                    <Link to={'/stats'} onClick={()=>{history.push('/stats'); history.go()}}>
                                        <span><img src={require("../../assets/images/icon3.png")} alt="" /></span>
                                        Stats
                                    </Link>
                                </li>
                                <Messages/>
                                <Notification/>
                            </ul>
                        </nav>
                        <div className="menu-btn">
                            <a href="#" title=""><i className="fa fa-bars"></i></a>
                        </div>
                        
                        <UserAccount avatar={avatar} userInformation={userInformation}/>
                    </div>
                </div>
            </header >
        )
    }
}

const mapStateToProps = state => {
    return{
        account: state.account
    }
}

export default withRouter(connect(mapStateToProps,null)(Header));