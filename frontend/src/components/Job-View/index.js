import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as API from '../../api';
import { connect } from 'react-redux';
import SuggestionUser from '../User-Profile/Main-Left-Sidebar/suggestionUser';
import TopViewer from '../User-Profile/Main-Right-Sidebar/topViewer';
import Filter from './filter'


class Job extends Component {
    componentDidMount() {
        this.getData();
    }

    constructor(props) {
        super(props);
        this.state = {
            listJob: []
        }
    }

    getData = () => {
        return API.getJobs()
            .then(res => {
                if (res.status == 200) {
                    this.setState({
                        listJob: res.data.jobs
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    filterData = (listJobFilter) => {
        this.setState({
            listJob: listJobFilter
        })
    }

    renderListJob = () => {
        let { listJob } = this.state;
        let { history } = this.props;
        return listJob.map((job, index) => {
            let timeAgo = Date.now() - new Date(job.updated_at);
            return (
                <div className="post-bar" style={{ marginBottom: 0 }} style={{borderBottom:'20px solid #e5e5e5'}} key={index}>
                    <div className="post_topbar" style={{ width: 80 + '%' }}>
                        <div className="usy-dt">
                            <img src={job && job.avatar ? `http://localhost:8000/images/avatar/${job.avatar}`
                                : "http://via.placeholder.com/50x50"}
                                style={{ width: 50 + 'px', height: 50 + 'px' }} alt="" />
                            <div className="usy-name">
                                <h3>{job.user_name}</h3>
                                <span>
                                    <img src={require("../../assets/images/clock.png")}
                                        alt="" />{timeAgo / 3600000 >= 1 ? parseInt(timeAgo / 3600000) + ' hour ago' :
                                            timeAgo / 60000 >= 1 ? parseInt(timeAgo / 60000) + ' minutes ago' :
                                                parseInt(timeAgo / 1000) + 's ago'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="epi-sec" style={{ width: 20 + '%', float: "right", marginTop: 20 + 'px' }}>
                        <ul className="bk-links">
                            <li><Link to={`/messages?other_id=${job.user_id}`}
                                onClick={() => {
                                    history.push(`/messages?other_id=${job.user_id}`)
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
                        <br />{job.description}<br />
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
                                        return (
                                            <li key={index}><a href="#" title="">{pr_lg.program_language_name}</a></li>
                                        )
                                    })
                                    : ''
                                }
                            </ul>
                        </div>
                        : ''}
                </div>
            )
        })
    }
    render() {
        return (
            <div className="main-section">
                <div className="container">
                    <div className="main-section-data">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="main-left-sidebar">
                                    <br/><br/><br/>
                                    <SuggestionUser/>
                                    <br/><br/>
                                    <TopViewer />
                                </div>
                            </div>
                            <div className="col-lg-6 container">
                                <div className="main-ws-sec">
                                    <br/> <br/>
                                    {this.renderListJob()}
                                </div>
                            </div>
                            <Filter filterData={this.filterData}/>
                        </div>
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

export default withRouter(connect(mapStateToProps, null)(Job))