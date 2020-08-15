import React, { Component } from 'react'
import * as API from '../../api';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class FormAddPost extends Component {
    componentDidMount(){
        return API.getJobs().then(res =>{
            if(res.data && res.data.jobs){
                this.setState({
                    arrJob: res.data.jobs,
                    job_id: res.data.jobs[0].id
                })
            }
            else{
                this.setState({
                    error: "server error"
                })
            }
        }).catch(err=>{
            console.log(err);
            this.setState({
                error: "server error"
            })
        })
    }
    constructor(props) {
        super(props);
        let { type } = this.props
        this.state = {
            type:type?type : 'Normal',
            arrJob:[],
            job_id:'',
            job_name:'',
            content:'',
            
            isOpenAddPostForm: false,
            error:''
        }
    }

    renderJob = () => {
        let { arrJob } = this.state;
        return arrJob.map((job, index) => {
            return <option key={job.id} value={index}>{job.name}</option>
        });
    }

    onChangeJob = (e) => {
        let { arrJob } = this.state;
        let value = e.target.value;
        this.setState({
            job_id: arrJob[value].id,
            job_name: arrJob[value].name
        })
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onAddPost = (e) => {
        e.preventDefault();
        let { type, job_id, content } = this.state
        let { account,toggleAddPostForm, history } = this.props;
        let data = {
            type,
            job_id,
            content
        }

        API.addPost(account,data)
            .then(res => {
                if(res.status == 200 && res.data.success == true){
                    alert('successfully');
                    toggleAddPostForm();
                    history.push('/user-profile');
                    return history.go();
                }
                this.setState({
                    error: res.data.message
                })
            })
            .catch(err => {
                console.log(err);
                let errors = [];
                let message = '';
                if (err.response && err.response.data) {
                    message = err.response.data['message'];
                    errors = err.response.data.errors ? Object.values(err.response.data.errors)[0] : []
                }
                this.setState({
                    error: errors[0] ? errors[0] : (message ? message : 'Server error........')
                })
            })
    }

    render() {
        let { toggleAddPostForm } = this.props
        let { type, content, error} = this.state
        return (
            <div>
                <div className="overview-box open" style={{ backgroundColor: '#00000000' }} id="bs-info-bx-form">
                    <div className="overview-edit">
                        <h3>Post</h3>
                        <form>
                            {type == 'Job' ? <h4>Job:</h4> : '' }
                            {type == 'Job' ?
                                <select onChange={this.onChangeJob} style={{ paddingLeft: 15 + 'px' }}>
                                    {this.renderJob()}
                                </select> 
                            : ''}

                            <h4>Content:</h4>
                            <textarea rows="20" name="content" placeholder="content" onChange={this.inputOnchange} value={content}/>

                            <div style={{ color: 'red' }}>{error}</div>
                            <button onClick={this.onAddPost} className="save">Save</button>
                            <button onClick={toggleAddPostForm} className="cancel">Cancel</button>
                        </form>
                        <div onClick={toggleAddPostForm} style={{ cursor: 'pointer' }} className="close-box"><i className="la la-close"></i></div>
                    </div>
                </div>
                <div className="overlay-background-edit"></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        account: state.account
    }
}
export default withRouter(connect(mapStateToProps,null)(FormAddPost))