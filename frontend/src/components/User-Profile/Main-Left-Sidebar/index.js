import React, { Component } from 'react';

import UserSocialProfile from './User-Social-Profile/index';
import SuggesstionUser from './suggestionUser';

class MainLeftSidebar extends Component {
    render() {
        let {userInformation, regetData} =this.props
        return (
            <div className="col-lg-3">
                <div className="main-left-sidebar">
                    <UserSocialProfile userInformation={userInformation} regetData={regetData}/>
                    <SuggesstionUser/>
                </div>
            </div>
        )
    }
}

export default MainLeftSidebar