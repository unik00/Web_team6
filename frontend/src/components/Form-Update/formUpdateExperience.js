import React, { Component } from 'react'
import * as API from '../../api';
import { connect } from 'react-redux';

class FormUpdateExperience extends Component {
    constructor(props) {
        super(props);
        let { account } = this.props
        
        this.state = {
            listHobby: [],
            hobby_id : 1,
            error:''
        }
    }

    componentDidMount(){
        this.getListHobby();
    }

    getListHobby = () => {
        let { account } = this.props;
        API.getListHobby(account).then(
            res => { if (res.status == 200){
                    this.setState({
                        listHobby : res.data.hobbies
                    })
                }
                console.log(res);
            }
        ).catch(err => {
            console.log(err);
        })
    }

    renderSelectHobby = () => {
        let { listHobby } = this.state;
        return listHobby.map((hobby, index) => {
            return <option key={hobby.id} value={index}>{hobby.name}</option>
        });
    }

    onChangeHobby = (e) => {
        let { listHobby } = this.state;
        let value = e.target.value;
        this.setState({
            name_hobby: listHobby[value].name,
            hobby_id: listHobby[value].id
        })
        console.log("on change hobby")
        console.log(this.state.hobby_id)
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onEditStudentHobby = (e) => {
        e.preventDefault();

        let { hobby_id } = this.state;
        let { account,toggleEditForm, regetData } = this.props

        API.addStudentHobby(account,{hobby_id})
            .then(res => {
                if(res.status == 200 && res.data.success){
                    alert('Edit successfully');
                    // console.log(res)
                    regetData()
                    toggleEditForm()

                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        let { toggleEditForm } = this.props
        let { listHobby, error} = this.state;
        console.log(listHobby);
        return (
            <div>
                <div className="overview-box open" style={{ backgroundColor: '#00000000' }} id="bs-info-bx-form">
                    <div className="overview-edit">
                        <h3>Edit Basic Information</h3>
                        <form>
                            <h4>Fullname:</h4>
                            <input type="text" name="name" placeholder="Fullname" value={name} onChange={this.inputOnchange} />

                            <h4>Start date:</h4>
                            <input type="date" name="startdate" placeholder="Start date" value={birthday} onChange={this.inputOnchange} />

                            <h4>End date:</h4>
                            <input type="date" name="enddate" placeholder="currently working" value={birthday} onChange={this.inputOnchange} />

                            {/*
                            <h4>Gender:</h4>
                            <select value={gender} onChange={this.onChangeGender} style={{ paddingLeft: 15 + 'px' }}>
                                <option value='Nam'>Nam</option>
                                <option value='Nữ' >Nữ</option>
                                <option value="Khác">Khác</option>
                            </select>

                            <h4>MSSV:</h4>
                            <input type="text" name="mssv" placeholder="MSSV" value={mssv} onChange={this.inputOnchange} />

                            <h4>Class:</h4>
                            <input type="text" name="classes" placeholder="Class" value={classes} onChange={this.inputOnchange} />

                            <h4>School:</h4>
                            <select onChange={this.onChangeSchool} style={{ paddingLeft: 15 + 'px' }}>
                                {this.renderSelectSchool()}
                            </select>
                            */}
                            <div style={{ color: 'red' }}>{error}</div>
                            <button onClick={this.onEditBasicInformation} className="save">Save</button>
                            <button onClick={toggleEditForm} className="cancel">Cancel</button>
                        </form>
                        <div onClick={toggleEditForm} style={{ cursor: 'pointer' }} className="close-box"><i className="la la-close"></i></div>
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
export default connect(mapStateToProps,null)(FormUpdateExperience)