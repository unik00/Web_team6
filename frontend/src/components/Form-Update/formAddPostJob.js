import React, { Component } from 'react'
import * as API from '../../api';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class FormAddJob extends Component {
    constructor(props) {
        super(props);
        let { job_id,name, description, pay_rate, type_id,job_type_name, experience_id,experience_name, country_id, country_name,
            availabilty_id, availabilty_name } = this.props
        this.state = {
            uer_type:'',
            job_id: job_id ? job_id : '',
            name: name ? name : '',
            description: description ? description : '',
            pay_rate: pay_rate ? pay_rate : '',

            jobType: [{ id: 1, name: 'web' }, { id: 2, name: 'mobile' }, { id: 3, name: 'ai' }],
            type_id: type_id ? type_id : '',
            job_type_name: job_type_name ? job_type_name : '',

            experiences: [{ id: 1, name: 'html' }, { id: 2, name: 'css' }, { id: 3, name: 'js' }],
            experience_id: experience_id ? experience_id : '',
            experience_name: experience_name ? experience_name : '',

            countries: [{ id: 1, name: 'vietnam' }, { id: 2, name: 'china' }, { id: 3, name: 'japan' }],
            country_id: country_id ? country_id : '',
            country_name: country_name ? country_name : '',

            availabilties: [{ id: 1, name: 'part time' }, { id: 2, name: 'full time' }],
            availabilty_id: availabilty_id ? availabilty_id : '',
            availabilty_name: availabilty_name ? availabilty_name : '',

            error:''
        }
    }

    renderJobType = () => {
        let { jobType } = this.state;
        return jobType.map((job, index) => {
            return <option key={job.id} value={index}>{job.name}</option>
        });
    }

    onChangeJobType = (e) => {
        let { jobType } = this.state;
        let value = e.target.value;
        this.setState({
            type_id: jobType[value].id,
            job_type_name: jobType[value].name
        })
    }

    renderExpType = () => {
        let { experiences } = this.state;
        return experiences.map((exp, index) => {
            return <option key={exp.id} value={index}>{exp.name}</option>
        });
    }

    onChangeExpType = (e) => {
        let { experiences } = this.state;
        let value = e.target.value;
        this.setState({
            experience_id: experiences[value].id,
            experience_name: experiences[value].name
        })
    }

    renderCountries = () => {
        let { countries } = this.state;
        return countries.map((country, index) => {
            return <option key={country.id} value={index}>{country.name}</option>
        });
    }

    onChangeCountryType = (e) => {
        let { countries } = this.state;
        let value = e.target.value;
        this.setState({
            country_id: countries[value].id,
            country_name: countries[value].name
        })
    }

    renderAvailabilities = () => {
        let { availabilties } = this.state;
        return availabilties.map((avai, index) => {
            return <option key={avai.id} value={index}>{avai.name}</option>
        });
    }

    onChangeAvailabilityType = (e) => {
        let { availabilties } = this.state;
        let value = e.target.value;
        this.setState({
            availabilty_id: availabilties[value].id,
            availabilty_name: availabilties[value].name
        })
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onEditJob = (e) => {
        e.preventDefault();
        let { job_id,name, description, pay_rate, type_id, experience_id, country_id, availabilty_id } = this.state
        let { account,toggleAddJobForm, user_type } = this.props;
        let data = {
            type:user_type,
            job_id,
            name,
            description,
            pay_rate,
            type_id,
            experience_id,
            country_id,
            availabilty_id
        }
        return console.log(data);

        API.AddOrUpdateJob(account,data)
            .then(res => {
                if(res.status == 200){
                    alert('successfully');
                    toggleEditForm();
                    history.pushState('/user-profile');
                    history.go();
                }
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
                    error: errors[0] ? errors[0] : (message ? message : 'username or password is incorrect')
                })
            })
    }

    render() {
        let { toggleAddJobForm } = this.props
        let { name, description, pay_rate, error} = this.state
        return (
            <div>
                <div className="overview-box open" style={{ backgroundColor: '#00000000' }} id="bs-info-bx-form">
                    <div className="overview-edit">
                        <h3>Job Form</h3>
                        <form>
                            <h4>Job Name:</h4>
                            <input type="text" name="name" placeholder="Job name" value={name} onChange={this.inputOnchange} />

                            <h4>Type:</h4>
                            <select onChange={this.onChangeJobType} style={{ paddingLeft: 15 + 'px' }}>
                                {this.renderJobType()}
                            </select>

                            <h4>Type:</h4>
                            <select onChange={this.onChangeCountryType} style={{ paddingLeft: 15 + 'px' }}>
                                {this.renderCountries()}
                            </select>

                            <h4>Experience:</h4>
                            <select onChange={this.onChangeExpType} style={{ paddingLeft: 15 + 'px' }}>
                                {this.renderExpType()}
                            </select>

                            <h4>Salary:</h4>
                            <input type="number" name="pay_rate" placeholder="Salary" value={pay_rate} onChange={this.inputOnchange} />

                            <h4>Availability:</h4>
                            <select onChange={this.onChangeAvailabilityType} style={{ paddingLeft: 15 + 'px' }}>
                                {this.renderAvailabilities()}
                            </select>

                            <h4>Description:</h4>
                            <input type="text" name="description" placeholder="Description" value={description} onChange={this.inputOnchange} />

                            <div style={{ color: 'red' }}>{error}</div>
                            <button onClick={this.onEditJob} className="save">Save</button>
                            <button onClick={toggleAddJobForm} className="cancel">Cancel</button>
                        </form>
                        <div onClick={toggleAddJobForm} style={{ cursor: 'pointer' }} className="close-box"><i className="la la-close"></i></div>
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
export default withRouter(connect(mapStateToProps,null)(FormAddJob))