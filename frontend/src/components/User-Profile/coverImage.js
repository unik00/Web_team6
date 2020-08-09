import React, { Component } from 'react';
import * as API from '../../api';
import {connect} from 'react-redux';

class CoverImage extends Component {
    componentDidUpdate(preprops){
        if(preprops.userInformation != this.props.userInformation){
            this.getCover();
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            cover:''
        }
    }
    
    handleInputChange = (event) => {
        let {account} = this.props
        const formData = new FormData()
        formData.append('image',event.target.files[0])
        return API.uploadCover(account,formData)
        .then(res=>{
            if(res.data.success == true){
                this.getCover();
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    getCover = () => {
        let {userInformation} = this.props;
        console.log(userInformation);
        return API.getCover(userInformation.user_id)
        .then(res=>{
            if(res.data.success == true && ré.data.success !== "http://backend_upstream/images/cover"){
                return this.setState({
                    cover:res.data.path
                })
            }
            return this.setState({
                cover:''
            })
        })
        .catch(err=>{
            return this.setState({
                cover:''
            })
            console.log(err);
        })
    }

    render() {
        let {cover} = this.state
        console.log(cover);
        return (
            <section className="cover-sec">
                <img src={cover ? `http://localhost:8000/${cover.slice(24,cover.length)}` 
                    : "http://via.placeholder.com/1600x400"} alt=""
                    style={{width:1600+'px', height: 400 + 'px'}}/>
                <a onChange={this.handleInputChange}>
                    <label htmlFor="upload-photo"><i className="fa fa-camera"></i> Change Image</label>
                    <input type="file" id="upload-photo" style={{opacity:0, position:'absolute',zIndex:-1}}/>
                </a>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return{
        account: state.account
    }
}

export default connect(mapStateToProps,null)(CoverImage);