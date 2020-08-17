import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import SocialLink from './socialLink';
import TopViewer from './topViewer';

class MainRightSidebar extends Component {
    render() {
        let { userInformation, regetData,history } = this.props
        return (
            <div className="col-lg-3" style={{position:'relative', zIndex:0}}>
                <div className="right-sidebar">
                    <div className="message-btn"  style={{position:'sticky', zIndex:0}}>
                        <Link to={`messages?other_id=${userInformation.user_id}`} 
                            onClick={()=>{
                                history.push(`messages?other_id=${userInformation.user_id}`)
                                history.go()
                            }}>
                                <i className="fa fa-envelope"></i> Message
                        </Link>
                    </div>
                    {userInformation.type == 'Student' ? 
                        <SocialLink userInformation={userInformation} regetData={regetData}/>
                    :''}
                    <TopViewer/>
                </div>
            </div>
        )
    }
}

export default withRouter(MainRightSidebar)