import React, { Component } from 'react';

class Avatar extends Component {
    render() {
        return (
            <div className="user-pro-img">
                <img src="http://via.placeholder.com/170x170" alt="" />
                <a href="#" title=""><i className="fa fa-camera"></i></a>
            </div>
        )
    }
}

export default Avatar