import React, {Component} from 'react'
import * as API from '../../api'

class Filter extends Component {
    componentDidMount() {
        API.getCountry().then(res => {
            if (res.data && res.data.countries) {
                this.setState({
                    countries: res.data.countries
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
                    jobType: res.data.types
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
                    availabilties: res.data.availabilties
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
                    experiences: res.data.experiences
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
        this.state = {
            name: '',
            pay_from: '',
            pay_to: '',

            jobType: [],
            type_id: '',
            job_type_name: 'None',

            experiences: [],
            experience_id: '',
            experience_name: 'None',

            countries: [],
            country_id: '',
            country_name: 'None',

            availabilties: [],
            availabilty_id: '',
            availabilty_name: 'None',

            programLanguages: [],
            programLanguage_names: [],
            programLanguage_ids: [],

            error: ''
        }
    }

    // -------------------------------------------------------------------------JOB TYPE-----------------------------
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
            type_id: jobType[value] ? jobType[value].id : '',
            job_type_name: jobType[value] ? jobType[value].name : 'None'
        })
    }

    // -------------------------------------------------------------------------COUNTRY-----------------------------
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
            country_id: countries[value] ? countries[value].id : '',
            country_name: countries[value] ? countries[value].name : 'None'
        })
    }

    // -------------------------------------------------------------------------EXPERIENCE-----------------------------
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
            experience_id: experiences[value] ? experiences[value].id : '',
            experience_name: experiences[value] ? experiences[value].name : 'None'
        })
    }

    // -------------------------------------------------------------------------AVAIBALITY-----------------------------
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
            availabilty_id: availabilties[value] ? availabilties[value].id : '',
            availabilty_name: availabilties[value] ? availabilties[value].name : 'None'
        })
    }

    // -------------------------------------------------------------------------LANGUAGE-----------------------------
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

    clearName = () => {
        this.setState({
            name: ''
        })
    }

    clearPay = () => {
        this.setState({
            pay_from: '',
            pay_to: ''
        })
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onFilter = () => {
        let {filterData} = this.props
        return API.filterJob({
            type: this.state.type_id,
            experience: this.state.experience_id,
            country: this.state.country_id,
            availabilty: this.state.availabilty_id,
            pay_min: this.state.pay_from,
            pay_max: this.state.pay_to,
            name: this.state.name,
            program_language_id: this.state.programLanguage_ids.length > 0 ? this.state.programLanguage_ids : null
        })
        .then(res=>{
            if(res.data.data && res.data.data.length > 0) {
                let listJob = res.data.data;
                filterData(listJob)
            }
        })
        .catch(err=>[
            console.log(err)
        ])
    }

    render(){
        //console.log(this.state);
        let {name, pay_from, pay_to} = this.state
        return(
            <div className="col-lg-3">
                <br/><br/>
                <div className="filter-secs">
                    <div className="filter-heading">
                        <h3>Filter</h3>
                        <button onClick={this.onFilter} style={{float: 'right'}}>Start Filter</button>
                    </div>
                    <div className="paddy">
                        {/* ===============================================================================NAME====================== */}
                        <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Job Name</h3>
                                <a onClick={this.clearName}>Clear</a>
                            </div>
                            <form>
                                <input type="text" name="name" value={name} onChange={this.inputOnchange}/>
                            </form>
                        </div>

                        {/* ===============================================================================LANGUAGE====================== */}
                        <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Language</h3>
                            </div>
                            <form>
                                {this.renderProgramLanguages()}
                            </form>
                        </div>

                        {/* ===============================================================================AVAILABILTY====================== */}
                        <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Availabilty</h3>
                            </div>
                            <form className="job-tp">
                                <select onChange={this.onChangeAvailabilityType} style={{ paddingLeft: 15 + 'px' }}>
                                    <option key={-1} value={-1}>None</option>
                                    {this.renderAvailabilities()}
                                </select>
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </form>
                        </div>

                        {/* ===============================================================================JOB TYPE====================== */}
                        <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Job Type</h3>
                            </div>
                            <form className="job-tp">
                                <select onChange={this.onChangeJobType}>
                                    <option key={-1} value={-1}>None</option>
                                    {this.renderJobType()}
                                </select>
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </form>
                        </div>

                        {/* ===============================================================================PAY_RATE====================== */}
                        <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Pay Rate / Hr ($)</h3>
                                <a onClick={this.clearPay}>Clear</a>
                            </div>
                            <form className="job-tp">
                                <div className="row">
                                    <div>From:</div> <input type="number" name="pay_from" value={pay_from} onChange={this.inputOnchange} />
                                </div>
                                <div className="row">
                                    <div>To:</div> <input type="number" name="pay_to" value={pay_to} onChange={this.inputOnchange} />
                                </div>
                            </form>
                        </div>

                        {/* ===============================================================================EXPERIENCE====================== */}
                        <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Experience Level</h3>
                            </div>
                            <form className="job-tp">
                                <select onChange={this.onChangeExpType}>
                                    <option key={-1} value={-1}>None</option>
                                    {this.renderExpType()}
                                </select>
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </form>
                        </div>

                        {/* ===============================================================================COUNTRY====================== */}
                        <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Countries</h3>
                            </div>
                            <form className="job-tp">
                                <select onChange={this.onChangeCountryType}>
                                    <option key={-1} value={-1}>None</option>
                                    {this.renderCountries()}
                                </select>
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;