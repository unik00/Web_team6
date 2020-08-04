import React, { Component } from 'react';

class FollowStatus extends Component {
    render() {
        return (
            <div className="user_pro_status">
                <ul className="flw-hr">
                    <li><a href="#" title="" className="flww"><i className="la la-plus"></i> Follow</a></li>
                    <li><a href="#" title="" className="hre">Hire</a></li>
                </ul>
                <ul className="flw-status">
                    <li>
                        <span>Following</span>
                        <b>34</b>
                    </li>
                    <li>
                        <span>Followers</span>
                        <b>155</b>
                    </li>
                </ul>
            </div>
        )
    }
}

export default FollowStatus