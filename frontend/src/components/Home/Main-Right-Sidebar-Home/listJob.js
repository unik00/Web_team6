import React, { Component } from 'react';
import * as API from '../../../api'

class ListJob extends Component {
    componentDidMount() {
        return API.getJobs().then(res => {
            if (res.data.jobs) {
                this.setState({
                    listJob: res.data.jobs
                })
            }
        })
            .catch(err => console.log(err))
    }

    constructor(props) {
        super(props);
        this.state = {
            listJob: []
        }
    }

    renderJob = () => {
        let { listJob } = this.state
        return listJob.map((job, index) => {
            return (
                <div className="job-info" key={index} style={{borderBottom: 1+'px' + ' solid'}}>
                    <div className="job-details">
                        <h3>{job.name}</h3>
                        <p>{job.description}</p>
                    </div>
                    <div className="hr-rate">
                        <span>${job.pay_rate}/hr</span>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="widget widget-jobs">
                <div className="sd-title">
                    <h3>Top Jobs</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>
                <div className="jobs-list">
                    {this.renderJob()}
                </div>
            </div>
        )
    }
}

export default ListJob;