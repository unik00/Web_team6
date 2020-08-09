import React, { Component } from 'react';

import Avatar from './avatar';
import FollowStatus from './followStatus';

class MainLeftSidebar extends Component{
    render(){
        let {userInformation,  regetData} =this.props
        return(
            <div className="user_profile">
                <Avatar userInformation={userInformation}/>
               {<FollowStatus userInformation={userInformation} regetData={regetData}/>}
            </div>
        )
    }
}

export default MainLeftSidebar