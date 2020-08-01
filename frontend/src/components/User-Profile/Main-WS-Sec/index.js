import React, { Component } from 'react'

import UserTabSec from './userTabSec';
import PostBar from '../../PostBar/index';
import UserInfo from './User-Information/index';
import Image from './images';

class MainWsSec extends Component {
    render() {
        let {userInformation} = this.props;
        return (
            <div className="col-lg-6">
                <div className="main-ws-sec">
                    <UserTabSec />
                    <div className="product-feed-tab current" id="feed-dd">
                        <div className="posts-section">
                            <PostBar />
                            <div className="process-comm">
                                <div className="spinner">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <UserInfo userInformation={userInformation}/>
                    <Image/>
                </div>
            </div>
        )
    }
}

export default MainWsSec