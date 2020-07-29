import React, { Component } from 'react';

class Messages extends Component {
    render() {
        return (
            <li>
                <a href="#" title="" className="not-box-open">
                    <span><img src={require("../../assets/images/icon6.png")} alt="" /></span>
					Messages
				</a>
                <div className="notification-box msg">
                    <div className="nt-title">
                        <h4>Setting</h4>
                        <a href="#" title="">Clear all</a>
                    </div>
                    <div className="nott-list">
                        <div className="notfication-details">
                            <div className="notification-info">
                                <h3><a href="messages.html" title="">Jassica William</a> </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
                                <span>2 min ago</span>
                            </div>
                        </div>
                        <div className="view-all-nots">
                            <a href="messages.html" title="">View All Messsages</a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default Messages