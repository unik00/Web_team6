import React, { Component } from 'react';
import * as API from '../../../../api';
import {connect} from 'react-redux';

class Avatar extends Component {
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
    
    handleInputChange = (event) => {
        let {account} = this.props
        const formData = new FormData()
        formData.append('image',event.target.files[0])
        return API.uploadAvatar(account,formData)
        .then(res=>{
            console.log(res);
            if(res.data.success == true){
                this.getAvatar();
            }
        })
        .catch(err=>{
            console.log(err);
        })
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
        let {avatar} = this.state
        let {userInformation} = this.props
        return (
            <div className="user-pro-img">
                <img src={avatar ? `http://localhost:8000/${avatar.slice(24,avatar.length)}`
                     : "http://via.placeholder.com/170x170"} alt=""
                     style={{width:170+'px', height: 170 + 'px'}}/>
                {userInformation.my_profile ?
                    <a onChange={this.handleInputChange}>
                        <label htmlFor="upload-photo-avatar"><i className="fa fa-camera"></i></label>
                        <input type="file" id="upload-photo-avatar" style={{opacity:0, position:'absolute',zIndex:-1}}/>
                    </a>
                :''}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        account: state.account
    }
}

export default connect(mapStateToProps,null)(Avatar);