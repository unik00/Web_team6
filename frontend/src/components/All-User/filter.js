import React, {Component} from 'react'
import * as API from '../../api'
import { connect } from 'react-redux';

// name -- phone -- hobby -- program language -- gender -- class -- school -- masv
class Filter extends Component {
    componentDidMount() {
        API.getHobbies().then(res => {
            console.log(res)
            if (res.data && res.data.hobbies) {
                this.setState({
                    listHobby: res.data.hobbies
                })
            } else this.renderErr('server error');
        })
            .catch(err => {
                console.log(err);
                this.renderErr('server error');
            })

        API.getListProgrammingLanguage().then(res => {
            if (res.data && res.data.program_languages) {
                this.setState({
                    listProgramLanguage: res.data.program_languages
                })
            } else this.renderErr('server error');
        })
            .catch(err => {
                console.log(err);
                this.renderErr('server error');
            })

        API.getListSchool().then(res => {
            if (res.data && res.data.Schools) {
                this.setState({
                    listSchool: res.data.Schools
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
            type:'Student',
            name: '',
            phone:'',
            gender: '',
            classes:'',
            mssv:'',

            listHobby: [],
            hobby_id: '',
            hobby_name: 'None',

            listProgramLanguage: [],
            programLanguage_ids: [],
            programLanguage_names: [],

            listSchool: [],
            school_id: '',
            school_name: 'None',

            error: ''
        }
    }

    // -------------------------------------------------------------------------HOBBY-----------------------------
    renderHobby = () => {
        let { listHobby } = this.state;
        return listHobby.map((hobby, index) => {
            return <option key={hobby.id} value={index}>{hobby.name}</option>
        });
    }

    onChangeHobby = (e) => {
        let { listHobby } = this.state;
        let value = e.target.value;
        this.setState({
            hobby_id: listHobby[value] ? listHobby[value].id : '',
            hobby_name: listHobby[value] ? listHobby[value].name : 'None'
        })
    }

    // -------------------------------------------------------------------------EXPERIENCE-----------------------------
    renderSchool = () => {
        let { listSchool } = this.state;
        return listSchool.map((school, index) => {
            return <option key={school.id} value={index}>{school.name}</option>
        });
    }

    onChangeSchool = (e) => {
        let { listSchool } = this.state;
        let value = e.target.value;
        this.setState({
            school_id: listSchool[value] ? listSchool[value].id : '',
            school_name: listSchool[value] ? listSchool[value].name : 'None'
        })
    }

    // -------------------------------------------------------------------------LANGUAGE-----------------------------
    renderProgramLanguages = () => {
        let {listProgramLanguage} = this.state;
        return listProgramLanguage.map((language,index) => {
            return(
                <div style={{ width: '25%', margin: '0 3%', display: 'inline-block'}} key={index}>
                    <input type="checkbox" value={index} style={{width: '45%'}} onChange={this.onChangeCheckbox}/>
                    <h3 style={{width:'45%', marginTop: '10px'}}>{language.name}</h3>
                </div>
            )
        })
    }

    onChangeCheckbox = (e) => {
        let {programLanguage_ids,listProgramLanguage, programLanguage_names} = this.state;
        let value = e.target.value;

        if(programLanguage_ids.indexOf(listProgramLanguage[value].id) >= 0)
        {
            programLanguage_ids.splice(programLanguage_ids.indexOf(listProgramLanguage[value].id),1)
            programLanguage_names.splice(programLanguage_names.indexOf(listProgramLanguage[value].name,1))
        }
        else{
            programLanguage_ids.push(listProgramLanguage[value].id);
            programLanguage_names.push(listProgramLanguage[value].name);
        }
    }

    renderErr = (err) => {
        this.setState({
            error: err
        })
    }

    clearName = () => {
        this.setState({
            name:''
        })
    }

    clearPhone = () => {
        this.setState({
            phone:''
        })
    }
    clearClass = () => {
        this.setState({
            classes:''
        })
    }
    clearMssv = () => {
        this.setState({
            mssv:''
        })
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onFilter = () => {
        // return console.log(this.state);
        let {onFilterUser} = this.props
        let {type} = this.state
        return API.filterUser({
            type: this.state.type,
            name: this.state.name,
            phone: this.state.phone,
            school: type == 'School' ?  this.state.school_id : '',
            mssv: type == 'School' ?  this.state.mssv : '',
            class: type == 'School' ?  this.state.class : '',
            gender: type == 'School' ?  this.state.gender : '',
            hobby: type == 'School' ?  this.state.hobby_id : '',
            programlanguage: type == 'School' && this.state.programLanguage_ids.length > 0 ? this.state.programLanguage_ids : null
        })
        .then(res=>{
            if(res.data && res.data.length > 0) {
                let listUser = res.data;
                onFilterUser(type=='Company'?1:type=='School'?2:3,listUser)
            }
            else {
                onFilterUser(type=='Company'?1:type=='School'?2:3,[])
            }
        })
        .catch(err=>{
            console.log(err)
            onFilterUser(type=='Company'?1:type=='School'?2:3,[])
        })
    }

    render(){
        //console.log(this.state);
        let {name, phone, gender, classes, mssv, type} = this.state
        return(
            <div className="col-lg-3">
                <br/><br/>
                <div className="filter-secs">
                    <div className="filter-heading">
                        <h3>Filter</h3>
                        <button onClick={this.onFilter} style={{float: 'right'}}>Start Filter</button>
                    </div>
                    <div className="paddy">
                        <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Type</h3>
                            </div>
                            <form className="job-tp">
                                <select name="type" value={type} onChange={this.inputOnchange}>
                                    <option value="Student">Student</option>
                                    <option value="School">School</option>
                                    <option value="Company">Company</option>
                                </select>
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </form>
                        </div>

                        {/* ===============================================================================NAME====================== */}
                        <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Name</h3>
                                <a onClick={this.clearName}>Clear</a>
                            </div>
                            <form>
                                <input type="text" name="name" value={name} onChange={this.inputOnchange}/>
                            </form>
                        </div>

                        {type == 'Student' ? <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Gender</h3>
                            </div>
                            <form className="job-tp">
                                <select name="gender" value={gender} onChange={this.inputOnchange}>
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </select>
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </form>
                        </div> : ''}

                        {/* ===============================================================================phone====================== */}
                        <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Phone</h3>
                                <a onClick={this.clearPhone}>Clear</a>
                            </div>
                            <form>
                                <input type="text" name="phone" value={phone} onChange={this.inputOnchange}/>
                            </form>
                        </div>

                        {/* ===============================================================================class====================== */}
                        {type == 'Student' ? <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>class</h3>
                                <a onClick={this.clearClass}>Clear</a>
                            </div>
                            <form>
                                <input type="text" name="classes" value={classes} onChange={this.inputOnchange}/>
                            </form>
                        </div>:''}

                        {/* ===============================================================================MSSV====================== */}
                        {type == 'Student' ? <div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>MSSV</h3>
                                <a onClick={this.clearMssv}>Clear</a>
                            </div>
                            <form>
                                <input type="text" name="mssv" value={mssv} onChange={this.inputOnchange}/>
                            </form>
                        </div>:''}

                        {/* ===============================================================================LANGUAGE====================== */}
                        {type == 'Student' ?<div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Language</h3>
                            </div>
                            <form>
                                {this.renderProgramLanguages()}
                            </form>
                        </div>:''}

                        {/* ===============================================================================Hobby====================== */}
                        {type == 'Student' ?<div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>Hobby</h3>
                            </div>
                            <form className="job-tp">
                                <select onChange={this.onChangeHobby} style={{ paddingLeft: 15 + 'px' }}>
                                    <option key={-1} value={-1}>None</option>
                                    {this.renderHobby()}
                                </select>
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </form>
                        </div>:''}

                        {/* ===============================================================================School====================== */}
                        {type == 'Student' ?<div className="filter-dd">
                            <div className="filter-ttl">
                                <h3>School</h3>
                            </div>
                            <form className="job-tp">
                                <select onChange={this.onChangeSchool}>
                                    <option key={-1} value={-1}>None</option>
                                    {this.renderSchool()}
                                </select>
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </form>
                        </div>:''}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        account: state.account
    }
}
export default connect(mapStateToProps,null)(Filter)