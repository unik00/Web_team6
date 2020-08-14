import React, { Component } from 'react'

import UserTabSec from './userTabSec';
import PostBar from './Post/index';
import UserInfo from './User-Information/index';
// import Image from './images';

class MainWsSec extends Component {
    render() {
        let {userInformation, regetData} = this.props;
        return (
            <div className="col-lg-6">
                <div className="main-ws-sec">
                    <UserTabSec name={userInformation.name}/>
                    <div className="product-feed-tab current" id="feed-dd">
                        <div className="posts-section">
                            <PostBar userInformation={userInformation} isInProfile={true}/>
                            <div className="process-comm">
                                <div className="spinner">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <UserInfo userInformation={userInformation} regetData={regetData}/>
                    {/* <Image/> */}
                </div>
            </div>
        )
    }
}

export default MainWsSec