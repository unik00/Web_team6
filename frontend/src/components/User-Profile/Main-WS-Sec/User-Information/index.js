import React, { Component } from 'react';
import BasicInformation from './basicInformation';
import Contact from './contact';
import Description from './description';
import Experiant from './experiant';

class UserInfo extends Component {
    render() {
        let {userInformation} = this.props
        return (
            <div className="product-feed-tab" id="info-dd">
                {userInformation.type == 'Student' ? <BasicInformation userInformation={userInformation}/> : ''}
                <Contact userInformation={userInformation}/>
                {userInformation.type != 'Student' ? <Description description={userInformation.description}/> : ''}
                {userInformation.type == 'Student' ? <Experiant/> : ''}
            </div>
        )
    }
}

export default UserInfo