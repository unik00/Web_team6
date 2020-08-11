import React, { Component } from 'react';
import Post from './post';

import * as API from '../../../../api';

class PostBar extends Component {
    componentDidMount() {
        this.getdata();
    }

    constructor(props) {
        super(props);
        this.state = {
            listPost: [],
            postType: 'Normal'
        }
    }


    getdata(type) {
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

    changeType = (type) => {
        this.setState({
            postType: type
        })
        return this.getdata(type);
    }

    renderPost = () => {
        let { listPost } = this.state;
        return listPost.map((post, index) => {
            return <Post key={index} postData={post} />
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