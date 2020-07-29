import React, { Component } from 'react';

import SocialLink from './socialLink';

class MainRightSidebar extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="right-sidebar">
                    <div className="message-btn">
                        <a href="#" title=""><i className="fa fa-envelope"></i> Message</a>
                    </div>
                    <div className="widget widget-portfolio">
                        <div className="wd-heady">
                            <h3>Portfolio</h3>
                            <img src="images/photo-icon.png" alt="" />
                        </div>
                        <SocialLink/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainRightSidebar