import React, { Component } from 'react'
import * as API from '../../api';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class FormAddJob extends Component {

    componentDidMount() {
        API.getCountry().then(res => {
            if (res.data && res.data.countries) {
                this.setState({
                    countries: res.data.countries,
                    country_id: res.data.countries[0].id
                })
            } else this.renderErr('server error');
        })
            .catch(err => {
                console.log(err);
                this.renderErr('server error');
            })

        API.getJobType().then(res => {
            if (res.data && res.data.types) {
                this.setState({
                    jobType: res.data.types,
                    type_id: res.data.types[0].id
                })
            } else this.renderErr('server error');
        })
            .catch(err => {
                console.log(err);
                this.renderErr('server error');
            })

        API.getAvailabilties().then(res => {
            if (res.data && res.data.availabilties) {
                this.setState({
                    availabilties: res.data.availabilties,
                    availabilty_id: res.data.availabilties[0].id
                })
            } else this.renderErr('server error');
        })
            .catch(err => {
                console.log(err);
                this.renderErr('server error');
            })

        API.getJobExperience().then(res => {
            if (res.data && res.data.experiences) {
                this.setState({
                    experiences: res.data.experiences,
                    experience_id: res.data.experiences[0].id
                })
            } else this.renderErr('server error');
        })
            .catch(err => {
                console.log(err);
                this.renderErr('server error');
            })

        API.getProgramLanguage().then(res => {
            if (res.data && res.data.program_languages) {
                this.setState({
                    programLanguages: res.data.program_languages
                })
            } else this.renderErr('server error');
        })
            .catch(err => {
                console.log(err);
                this.renderErr('server error');
            })

    }

    constructor(props) {
        super(props);
        let { job_id, name, description, pay_rate, type_id, job_type_name, experience_id, experience_name, country_id, country_name,
            availabilty_id, availabilty_name } = this.props
        this.state = {
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

            programLanguages: [],
            programLanguage_names: [],
            programLanguage_ids: [],

            error: ''
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

    renderProgramLanguages = () => {
        let {programLanguages} = this.state;
        return programLanguages.map((language,index) => {
            return(
                <div style={{ width: '25%', margin: '0 3%', display: 'inline-block'}} key={index}>
                    <input type="checkbox" value={index} style={{width: '45%'}} onChange={this.onChangeCheckbox}/>
                    <h3 style={{width:'45%', marginTop: '10px'}}>{language.name}</h3>
                </div>
            )
        })
    }

    onChangeCheckbox = (e) => {
        let {programLanguage_ids,programLanguages, programLanguage_names} = this.state;
        let value = e.target.value;

        if(programLanguage_ids.indexOf(programLanguages[value].id) >= 0)
        {
            programLanguage_ids.splice(programLanguage_ids.indexOf(programLanguages[value].id),1)
            programLanguage_names.splice(programLanguage_names.indexOf(programLanguages[value].name,1))
        }
        else{
            programLanguage_ids.push(programLanguages[value].id);
            programLanguage_names.push(programLanguages[value].name);
        }
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onEditJob = (e) => {
        e.preventDefault();
        let { job_id, name, description, pay_rate, type_id, experience_id, country_id, availabilty_id, programLanguage_ids } = this.state
        let { account, toggleAddJobForm, history } = this.props;
        let data = {
            job_id,
            name,
            description,
            pay_rate,
            type_id,
            experience_id,
            country_id,
            availabilty_id,
            program_language: programLanguage_ids
        }

        API.addJob(account, data)
            .then(res => {
                if (res.status == 200 && res.data.success == true) {
                    alert('successfully');
                    toggleAddJobForm();
                    history.push('/jobs');
                    history.go();
                }
                else {
                    this.setState({
                        error: res.data.message
                    })
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
                    error: errors[0] ? errors[0] : (message ? message : 'Server error')
                })
            })
    }
    renderErr = (err) => {
        this.setState({ error: err });
    }

    render() {
        let { toggleAddJobForm } = this.props
        let { name, description, pay_rate, error } = this.state
        return (
            <div>
                <div className="overview-box open" style={{ backgroundColor: '#00000000' }} id="bs-info-bx-form">
                    <div className="overview-edit">
                        <h3>Job Form</h3>
                        <form>
                            <h4>Job Name:</h4>
                            <input type="text" name="name" placeholder="Job name" value={name} onChange={this.inputOnchange} />

                            <div style={{ width: 50 + '%', display: 'inline-block' }}>
                                <h4>Job Type:</h4>
                                <select onChange={this.onChangeJobType} style={{ paddingLeft: 15 + 'px' }}>
                                    {this.renderJobType()}
                                </select>
                            </div>

                            <div style={{ width: 50 + '%', display: 'inline-block' }}>
                                <h4>Country:</h4>
                                <select onChange={this.onChangeCountryType} style={{ paddingLeft: 15 + 'px' }}>
                                    {this.renderCountries()}
                                </select>
                            </div>

                            <div style={{ width: 50 + '%', display: 'inline-block' }}>
                                <h4>Experience:</h4>
                                <select onChange={this.onChangeExpType} style={{ paddingLeft: 15 + 'px' }}>
                                    {this.renderExpType()}
                                </select>
                            </div>

                            <div style={{ width: 50 + '%', display: 'inline-block' }}>
                                <h4>Salary($/hr):</h4>
                                <input type="number" name="pay_rate" placeholder="Salary" value={pay_rate} onChange={this.inputOnchange} />
                            </div>

                            <h4>Availability:</h4>
                            <select onChange={this.onChangeAvailabilityType} style={{ paddingLeft: 15 + 'px' }}>
                                {this.renderAvailabilities()}
                            </select>

                            {this.renderProgramLanguages()}

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
    return {
        account: state.account
    }
}
export default withRouter(connect(mapStateToProps, null)(FormAddJob))