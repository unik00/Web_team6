import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom';
import * as API from '../../../api';

class MainLeftSidebar extends Component {
    componentDidUpdate(preprops){
        if(preprops.userInformation != this.props.userInformation){
            this.getAvatar();
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            avatar:''
        }
    }

    getAvatar = () => {
        let {userInformation} = this.props;
        return API.getAvatar(userInformation.user_id)
        .then(res=>{
            if(res.data.success == true && res.data.path !== "http://backend_upstream/images/avatar"){
                return this.setState({
                    avatar:res.data.path
                })
            }
            this.setState({
                avatar:''
            })
        })
        .catch(err=>{
            this.setState({
                avatar:''
            })
            console.log(err);
        })
    }

    render() {
        let {history, userInformation} = this.props
        let {avatar} = this.state
        return (
            <div className="user-data full-width">
                <div className="user-profile">
                    <div className="username-dt">
                        <div className="usr-pic">
                            <img src={avatar ? `http://localhost:8000/${avatar.slice(24,avatar.length)}`
                            : "http://via.placeholder.com/100x100"} alt=""
                            style={{width:100+'px', height: 100 + 'px'}}/>
                        </div>
                    </div>
                    <div className="user-specs">
                        <h3>{userInformation.name}</h3>
                    </div>
                </div>
                <ul className="user-fw-status">
                    <li>
                        <h4>Following</h4>
                        <span>{userInformation && userInformation.following ? userInformation.following : 0}</span>
                    </li>
                    <li>
                        <h4>Followers</h4>
                        <span>{userInformation && userInformation.followed ? userInformation.followed : 0}</span>
                    </li>
                    <li>
                        <Link to={'/user-profile'} onClick={()=>{history.push('/user-profile'); history.go()}}>View Profile</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
}

export default withRouter(connect(mapStateToProps, '')(MainLeftSidebar));