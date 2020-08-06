import React, { Component } from 'react';

import SocialLink from './socialLink';

class MainRightSidebar extends Component {
    render() {
        let { userInformation, regetData } = this.props
        return (
            <div className="col-lg-3" style={{position:'relative', zIndex:0}}>
                <div className="right-sidebar">
                    <div className="message-btn"  style={{position:'sticky', zIndex:0}}>
                        <a href="#" title=""><i className="fa fa-envelope"></i> Message</a>
                    </div>
                    <SocialLink userInformation={userInformation} regetData={regetData}/>
                </div>
            </div>
        )
    }
}

export default MainRightSidebar