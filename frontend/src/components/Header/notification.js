import React, { Component } from 'react';

class Notification extends Component {
    render() {
        return (
            <li>
                <a href="#" title="" className="not-box-open">
                    <span><img src={require("../../assets/images/icon7.png")} alt="" /></span>
					Notification
				</a>
                <div className="notification-box">
                    <div className="nt-title">
                        <h4>Setting</h4>
                        <a href="#" title="">Clear all</a>
                    </div>
                    <div className="nott-list">
                        <div className="notfication-details">
                            <div className="notification-info">
                                <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                                <span>2 min ago</span>
                            </div>
                        </div>
                        <div className="view-all-nots">
                            <a href="#" title="">View All Notification</a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default Notification