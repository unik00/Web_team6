import React, { Component } from 'react';

import Avatar from './avatar';
import FollowStatus from './followStatus';

class MainLeftSidebar extends Component{
    render(){
        return(
            <div className="user_profile">
                <Avatar/>
                <FollowStatus/>
            </div>
        )
    }
}

export default MainLeftSidebar