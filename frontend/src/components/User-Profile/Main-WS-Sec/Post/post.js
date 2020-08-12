import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as API from '../../../../api';
import { connect } from 'react-redux';
import Comment from './comment';


class Post extends Component {
    componentDidMount() {
        if (this.props.postData.job_id) {
            this.getData();
        }
        this.getCountLike();
    }
    componentDidUpdate(preprops) {
        let { postData } = this.props;
        if (preprops.postData != postData) {
            if (this.props.postData.job_id) {
                this.getData();
            }
            else {
                this.setState({
                    job: null
                })
            }
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            job: null,
            countCmt: 0,
            likeData: null
        }
    }

    getData = () => {
        return API.getJob(this.props.account, this.props.postData.job_id)
            .then(res => {
                if (res.status == 200 && res.data.success == true) {
                    this.setState({
                        job: res.data.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    getCountCmt = (count) => {
        this.setState({
            countCmt: count
        })
    }

    getCountLike = () => {
        let { postData, account } = this.props;
        return API.getLike(account, postData.post_id)
            .then(res => {
                if (res.status == 200 && res.data.success) {
                    this.setState({
                        likeData: res.data
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    onLike = () => {
        let { postData, account } = this.props;
        let { likeData } = this.state;

        if (likeData.is_liked) {
            return API.unlike(account, {
                post_id: postData.post_id
            })
                .then(res => {
                    if (res.status == 200) {
                        this.getCountLike();
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }

        return API.like(account, {
            post_id: postData.post_id
        })
            .then(res => {
                if (res.status == 200) {
                    this.getCountLike();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        let { postData, history, userInformation } = this.props;
        let { job, countCmt, likeData } = this.state;
        let timeAgo = Date.now() - new Date(postData.updated_at);
        return (
            <div>
                <div className="post-bar" style={{ marginBottom: 0 }}>
                    <div className="post_topbar" style={{ width: 80 + '%' }}>
                        <div className="usy-dt">
                            <img src={postData && postData.avatar ? `http://localhost:8000/images/avatar/${postData.avatar}`
                                : "http://via.placeholder.com/50x50"}
                                style={{ width: 50 + 'px', height: 50 + 'px' }} alt="" />
                            <div className="usy-name">
                                <h3>{postData.name}</h3>
                                <span>
                                    <img src={require("../../../../assets/images/clock.png")}
                                        alt="" />{timeAgo / 3600000 >= 1 ? parseInt(timeAgo / 3600000) + ' hour ago' :
                                            timeAgo / 60000 >= 1 ? parseInt(timeAgo / 60000) + ' minutes ago' :
                                                parseInt(timeAgo / 1000) + 's ago'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="epi-sec" style={{ width: 20 + '%', float: "right", marginTop: 20 + 'px' }}>
                        <ul className="bk-links">
                            <li><Link to={`/messages?other_id=${postData.user_id}`}
                                onClick={() => {
                                    history.push(`/messages?other_id=${postData.user_id}`)
                                    history.go();
                                }}>
                                <i className="la la-envelope"></i>
                            </Link>
                            </li>
                        </ul>
                    </div>
                    {job ?
                        <div className="job_descp">
                            <h3>Job: {job.name}</h3>
                            <ul className="job-dt">
                                <li><a href="#" title="">{job.availabilty_name}</a></li>
                                <li><span>${job.pay_rate}/ hr</span></li>
                            </ul>
                        </div>
                        : ''}
                    <div className="job_descp">
                        <br />{postData.content}<br />
                    </div>

                    {/* experience , pr_lg*/}
                    {job ?
                        <div className="job_descp">
                            <br />
                            <ul className="skill-tags">
                                <li><a href="#" title="">{job.experience_name}</a></li>
                                {/* program language */}
                                {job.program_language ? 
                                    job.program_language.map((pr_lg, index) => {
                                        return(
                                            <li key={index}><a href="#" title="">{pr_lg.program_language_name}</a></li>
                                        )
                                    })
                                    :''
                                }
                            </ul>
                        </div>
                        : ''}

                    <div className="job-status-bar">
                        <ul className="like-com">
                            <li>
                                <a onClick={this.onLike} style={{ color: likeData && likeData.is_liked ? 'red' : '#b2b2b2' }}><i className="la la-heart"></i> Like</a>
                                <img src={require("../../../../assets/images/liked-img.png")} />
                                <span>{likeData ? likeData.count : 0}</span>
                            </li>
                            <li><a className="com"><img src={require("../../../../assets/images/com.png")} /> Comment {countCmt}</a></li>
                        </ul>
                    </div>
                </div>
                <Comment userInformation={userInformation} post_id={postData.id} getCountCmt={this.getCountCmt} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        account: state.account
    }
}

export default withRouter(connect(mapStateToProps, null)(Post))