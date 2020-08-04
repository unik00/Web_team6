import React, { Component } from 'react';

import SocialLink from './socialLink';

class MainRightSidebar extends Component {
    render() {
        let { userInformation } = this.props
        return (
            <div className="col-lg-3">
                <div className="right-sidebar" style={{position:'relative', zIndex:-1}}>
                    <div className="message-btn">
                        <a href="#" title=""><i className="fa fa-envelope"></i> Message</a>
                    </div>
                    <div className="widget widget-portfolio">
                        <div className="wd-heady">
                            <h3>Social</h3>
                            <div style={{display:'inline-block', float:'right'}} className="overview-open"><i className="fa fa-pencil"></i></div>
                            <img src="images/photo-icon.png" alt="" />
                        </div>
                        <SocialLink userInformation={userInformation}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainRightSidebar