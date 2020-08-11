import React, { Component } from 'react';
import SuggesstionUser from '../../User-Profile/Main-Left-Sidebar/suggestionUser';
import UserInfor from './userInfor';

class MainLeftSidebar extends Component {
    render() {
        let {userInformation} = this.props;
        return (
            <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                <div className="main-left-sidebar no-margin">
                    <UserInfor userInformation={userInformation}/>
                    <SuggesstionUser/>
                </div>
            </div>
        )
    }
}

export default MainLeftSidebar;