import React, { Component } from 'react';
import BasicInformation from './basicInformation';
import Contact from './contact';
import Description from './description';
import Experiant from './experiant';

class UserInfo extends Component {
    render() {
        let {userInformation, regetData} = this.props
        return (
            <div className="product-feed-tab" id="info-dd">
                {userInformation.type == 'Student' ? <BasicInformation userInformation={userInformation}  regetData={regetData}/> : ''}
                <Contact userInformation={userInformation} regetData={regetData}/>
                {userInformation.type != 'Student' ? <Description description={userInformation.description} regetData={regetData}/> : ''}
                {userInformation.type == 'Student' ? <Experiant/> : ''}
            </div>
        )
    }
}

export default UserInfo