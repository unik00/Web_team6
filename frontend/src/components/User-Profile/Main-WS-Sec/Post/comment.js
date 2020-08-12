import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as API from '../../../../api';
import { connect } from 'react-redux';


class Comment extends Component {
    componentDidMount() {
        this.getData();
    }

    constructor(props) {
        super(props);
        this.state = {
            comments: null,
            cmtContent: ''
        }
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    getData = () => {
        let { account, post_id } = this.props;
        return API.getComment(account, post_id).then(res => {
            if (res.status == 200 && res.data.success) {
                let { getCountCmt } = this.props;
                getCountCmt(res.data.count ? res.data.count : 0);
                this.setState({
                    comments: res.data.comments
                })
            }
        })
            .catch(err => {
                console.log(err);
            })
    }

    onComment = (e) => {
        let { account, post_id } = this.props;
        let { cmtContent } = this.state;
        return API.comment(account, {
            post_id,
            content: cmtContent
        })
            .then(res => {
                if (res.status == 200 && res.data.success) {
                    return this.getData();
                } else {
                    alert('server error');
                }
            })
            .catch(err => {
                console.log(err);
                alert('server error');
            })
    }

    renderCmt = () => {
        let { comments } = this.state;
        return comments ? comments.map((cmt, index) => {
            let timeAgo = Date.now() - new Date(cmt.updated_at);
            return (
                <li key={index}>
                    <div className="comment-list">
                        <div className="bg-img">
                            <img src={cmt && cmt.avatar ? `http://localhost:8000/images/avatar/${cmt.avatar}`
                                : "http://via.placeholder.com/40x40"}
                                style={{ width: 40 + 'px', height: 40 + 'px' }} alt="" />
                        </div>
                        <div className="comment">
                            <h3>{cmt.name}</h3>
                            <span><img src="images/clock.png" alt="" />{timeAgo / 3600000 >= 1 ? parseInt(timeAgo / 3600000) + ' hour ago' :
                                timeAgo / 60000 >= 1 ? parseInt(timeAgo / 60000) + ' minutes ago' :
                                    parseInt(timeAgo / 1000) + 's ago'}</span>
                            <p>{cmt.content}</p>
                        </div>
                    </div>
                </li>
            )
        }) : ''
    }


    render() {
        let { userInformation } = this.props;
        let { cmtContent } = this.state;
        // let timeAgo = Date.now() - new Date(postData.updated_at);
        return (
            <div className="comment-section">
                <div className="plus-ic">
                    <i className="la la-plus"></i>
                </div>
                <div className="comment-sec">
                    <ul>
                        {this.renderCmt()}
                    </ul>
                </div>
                <div className="post-comment">
                    <div className="cm_img">
                        <img src={userInformation && userInformation.avatar ? `http://localhost:8000/${userInformation.avatar.slice(24, userInformation.avatar.length)}`
                            : "http://via.placeholder.com/40x40"}
                            style={{ width: 40 + 'px', height: 40 + 'px' }} alt="" />
                    </div>
                    <div className="comment_box">

                        <input type="text" name="cmtContent" value={cmtContent} onChange={this.inputOnchange} placeholder="Post a comment" />
                        <button onClick={this.onComment}>Send</button>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        account: state.account
    }
}

export default withRouter(connect(mapStateToProps, null)(Comment))