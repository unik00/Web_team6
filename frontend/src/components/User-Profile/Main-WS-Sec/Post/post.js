import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as API from '../../../../api';
import { connect } from 'react-redux';


class Post extends Component {
    componentDidUpdate(preprops) {
        let {postData} = this.props;
        if(preprops.postData != postData)
            if (this.props.postData.job_id) {
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
            else{
                this.setState({
                    job:null
                })
            }
    }

    constructor(props) {
        super(props);
        this.state = {
            job: null
        }
    }


    render() {
        let { postData, history } = this.props;
        let { job } = this.state;
        let timeAgo = Date.now() - new Date(postData.updated_at);
        return (
            <div className="post-bar">
                <div className="post_topbar" style={{ width: 80 + '%' }}>
                    <div className="usy-dt">
                        <img src={postData && postData.avatar ? `http://localhost:8000/images/avatar/${postData.avatar}`
                            : "http://via.placeholder.com/50x50"}
                            style={{ width: 50 + 'px', height: 50 + 'px' }} alt="" />
                        <div className="usy-name">
                            <h3>{postData.name}</h3>
                            <span>
                                <img src={require("../../../../assets/images/clock.png")}
                                    alt="" />{timeAgo / 3600000 > 0 ? parseInt(timeAgo / 3600000) + ' hour ago' :
                                        timeAgo / 60000 > 0 ? parseInt(timeAgo / 60000) + ' minutes ago' :
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
                    <br/>{postData.content}<br/>
                </div>
                {job ?
                    <div className="job_descp">
                        <br/>
                        <ul className="skill-tags">
                            <li><a href="#" title="">{job.experience_name}</a></li>
                        </ul>
                    </div>
                : ''}
                <div className="job-status-bar">
                    <ul className="like-com">
                        <li>
                            <a><i className="la la-heart"></i> Like</a>
                            <img src={require("../../../../assets/images/liked-img.png")} />
                            <span>25</span>
                        </li>
                        <li><a className="com"><img src={require("../../../../assets/images/com.png")} /> Comment 15</a></li>
                    </ul>
                    <a><i className="la la-eye"></i>Views 50</a>
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

export default withRouter(connect(mapStateToProps, null)(Post))