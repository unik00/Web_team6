import React, { Component } from 'react';
import BasicInformation from './basicInformation';
import Contact from './contact';
import Description from './description';
import Experience from './experience';
import StudentHobby from './studentHobby';
import StudentProgrammingLanguage from './studentProgrammingLanguage'
import StudentLanguage from './studentLanguage'

class UserInfo extends Component {
    render() {
        let {userInformation, regetData} = this.props
        return (
            <div className="product-feed-tab" id="info-dd">
                {userInformation.type == 'Student' ? <BasicInformation userInformation={userInformation}  regetData={regetData}/> : ''}
                <Contact userInformation={userInformation} regetData={regetData}/>
                {userInformation.type != 'Student' ? <Description my_profile={userInformation.my_profile} description={userInformation.description} regetData={regetData}/> : ''}
                {userInformation.type == 'Student' ? <StudentHobby userInformation={userInformation}/>: ''}
                {userInformation.type == 'Student' ? <StudentProgrammingLanguage userInformation={userInformation}/>: ''}
                {userInformation.type == 'Student' ? <StudentLanguage userInformation={userInformation}/>: ''}
                {userInformation.type == 'Student' ? <Experience userInformation={userInformation}/> : ''}
            </div>
        )
    }
}

export default UserInfo