import React, { Component } from 'react';

class SocialLink extends Component {
    render() {
        let {userInformation} = this.props
        return (
            <ul className="social_links">
                <li><a href="#" title=""><i className="la la-globe"></i> {userInformation.linkCV}</a></li>
                <li><a href="#" title=""><i className="fa fa-facebook-square"></i>{userInformation.linkFB}</a></li>
                <li><a href="#" title=""><i className="fa fa-github"></i>{userInformation.linkGit}</a></li>
            </ul>
        )
    }
}

export default SocialLink