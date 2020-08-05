import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FormUpdateSocialLink from '../../Form-Update/formUpdateSocialLink'

class SocialLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openEditForm: false
        }
    }

    toggleEditForm = () => {
        let { openEditForm } = this.state;
        console.log('a');
        this.setState({
            openEditForm: !openEditForm
        })
    }

    render() {
        let {openEditForm} = this.state
        let { userInformation, regetData } = this.props
        return (
            <div className="widget widget-portfolio">
                <div className="wd-heady">
                    <h3 onClick={this.toggleEditForm}>Social</h3>
                    <div onClick={this.toggleEditForm} 
                        style={{ display: 'inline-block', float: 'right', cursor: 'pointer' }}>
                            <i className="fa fa-pencil"></i>
                    </div>
                </div>
                <ul className="social_links">
                    <li><Link to={'a'}><i className="la la-globe"></i> {userInformation.linkCV}</Link></li>
                    <li><a href="#" title=""><i className="fa fa-facebook-square"></i>{userInformation.linkFB}</a></li>
                    <li><a href="#" title=""><i className="fa fa-github"></i>{userInformation.linkGit}</a></li>
                </ul>
                {openEditForm?
                    <FormUpdateSocialLink toggleEditForm={this.toggleEditForm}
                        regetData={regetData}
                        linkFB={userInformation.linkFB}
                        linkCV={userInformation.linkCV}
                        linkGit={userInformation.linkGit} />
                    :''
                }
            </div>
        )
    }
}

export default SocialLink