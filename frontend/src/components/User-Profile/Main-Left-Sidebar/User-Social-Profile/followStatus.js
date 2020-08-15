import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as API from '../../../../api';
import {withRouter} from 'react-router-dom';

class FollowStatus extends Component {

    onFollow = () => {
        let {account, userInformation, regetData, history} = this.props;
        
        return API.followUser(account,userInformation.user_id)
        .then(res=>{
            alert(res.data.message);
            history.go();
            regetData(account);
        })
        .catch(err=>{
            console.log(err);
            alert('Something went wrong')
        })
    }

    unFollow = () => {
        let {account, userInformation, regetData} = this.props;
        
        return API.unfollowUser(account,userInformation.user_id)
        .then(res=>{
            alert(res.data.message);
            history.go();
            regetData(account);
        })
        .catch(err=>{
            console.log(err);
            alert('Something went wrong')
        })
    }

    render() {
        const style={
            display: 'inline-block',
            color: '#ffffff',
            fontSize: 16 + 'px',
            fontWeight: 600,
            padding: 11 + 'px ' + 15 + 'px'
        }

        let {userInformation } = this.props
        return (
            <div className="user_pro_status">
                {!userInformation.my_profile ?
                    <ul className="flw-hr">
                        <li>
                            {!userInformation.is_follow?
                                <div className="flww" style={{...style, cursor:'pointer'}} onClick={this.onFollow}><i className="la la-plus"></i> Follow</div>
                                : <div className="flww" 
                                        style={{...style,backgroundColor:'red'}} 
                                        onClick={this.unFollow}>
                                            <i className="la la-minus"></i> 
                                            Unfollow
                                </div>
                            }
                        </li>
                    </ul>
                : ''}

                <ul className="flw-status">
                    <li>
                        <span>Following</span>
                        <b>{userInformation.following ? userInformation.following : 0}</b>
                    </li>
                    <li>
                        <span>Followers</span>
                        <b>{userInformation.followed ? userInformation.followed : 0}</b>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        account: state.account
    }
}

export default withRouter(connect(mapStateToProps,null)(FollowStatus))