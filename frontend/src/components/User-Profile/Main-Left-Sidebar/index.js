import React, { Component } from 'react';

import UserSocialProfile from './User-Social-Profile/index';
import SuggesstionUser from './suggestionUser';

class MainLeftSidebar extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="main-left-sidebar">
                    <UserSocialProfile/>
                    <SuggesstionUser/>
                </div>
            </div>
        )
    }
}

export default MainLeftSidebar