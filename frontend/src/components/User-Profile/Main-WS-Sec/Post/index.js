import React, { Component } from 'react';
import Post from './post';

import * as API from '../../../../api';

class PostBar extends Component {
    componentDidMount() {
        this.getdata('Normal');
    }

    componentDidUpdate(preprops){
        let {userInformation} = this.props;
        if(preprops.userInformation != userInformation){
            this.getdata('Normal', userInformation);
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            listPost: [],
            postType: 'Normal'
        }
    }


    getdata(type='Normal', userInformation=null) {
        if(this.props.isInProfile) {
            if(userInformation && userInformation.user_id){
                if (type == 'Job') {
                    return API.getMyJobPost(userInformation.user_id).then(res => {
                        if (res.data && res.data.posts) {
                            this, this.setState({
                                listPost: res.data.posts
                            })
                        }
                    })
                }
                else{
                    return API.getMyNormalPost(userInformation.user_id).then(res => {
                        if (res.data && res.data.posts) {
                            this, this.setState({
                                listPost: res.data.posts
                            })
                        }
                    })
                }
            }
        }
        else{
            if (type == 'Job') {
                return API.getJobPost().then(res => {
                    if (res.data && res.data.posts) {
                        this, this.setState({
                            listPost: res.data.posts
                        })
                    }
                })
            }
            else{
                return API.getNormalPost().then(res => {
                    if (res.data && res.data.posts) {
                        this, this.setState({
                            listPost: res.data.posts
                        })
                    }
                })
            }
        }
    }

    changeType = (type) => {
        let {userInformation} = this.props;
        this.setState({
            postType: type
        })
        return this.getdata(type,userInformation);
    }

    renderPost = () => {
        let { listPost } = this.state;
        let {userInformation} = this.props;
        return listPost.map((post, index) => {
            return <Post userInformation={userInformation} key={index} postData={post} />
        })
    }
    render() {
        let {postType} = this.state
        return (
            <div>
                <ul className="sign-control-khanh">
                    <li className={postType=="Normal"?"current":''} onClick={() => this.changeType('Normal')}><a >Normal Post</a></li>
                    <li className={postType=="Job"?"current":''} onClick={() => this.changeType('Normal')}onClick={() => this.changeType('Job')}><a >Job Post</a></li>
                </ul>
                {this.renderPost()}
            </div>
        )
    }
}

export default PostBar