import React, { Component } from 'react'

import SearchBar from './searchBar';
import Messages from './messages';
import Notification from './notification';
import UserAccount from './userAccount';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="header-data">
                        <div className="logo">
                            <a href="index.html" title=""><img src={require('../../assets/images/logo.png')} alt="" /></a>
                        </div>
                        <SearchBar/>
                        <nav>
                            <ul>
                                <li>
                                    <a href="index.html" title="">
                                        <span><img src={require("../../assets/images/icon1.png")} alt="" /></span>
									Home
								</a>
                                </li>
                                <li>
                                    <a href="companies.html" title="">
                                        <span><img src={require("../../assets/images/icon2.png")} alt="" /></span>
									Companies
								</a>
                                    <ul>
                                        <li><a href="companies.html" title="">Companies</a></li>
                                        <li><a href="company-profile.html" title="">Company Profile</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="projects.html" title="">
                                        <span><img src={require("../../assets/images/icon3.png")} alt="" /></span>
									Projects
								</a>
                                </li>
                                <li>
                                    <a href="profiles.html" title="">
                                        <span><img src={require("../../assets/images/icon4.png")} alt="" /></span>
									Profiles
								</a>
                                    <ul>
                                        <li><a href="user-profile.html" title="">User Profile</a></li>
                                        <li><a href="my-profile-feed.html" title="">my-profile-feed</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="jobs.html" title="">
                                        <span><img src={require("../../assets/images/icon5.png")} alt="" /></span>
									Jobs
								</a>
                                </li>
                                <Messages/>
                                <Notification/>
                            </ul>
                        </nav>
                        <div className="menu-btn">
                            <a href="#" title=""><i className="fa fa-bars"></i></a>
                        </div>
                        
                        <UserAccount/>
                    </div>
                </div>
            </header >
        )
    }
}

export default Header;