import React, { Component } from 'react'
import * as API from '../../api';
import { connect } from 'react-redux';

class FormUpdateStudentProgrammingLanguage extends Component {
    constructor(props) {
        super(props);
        let { account } = this.props
        
        this.state = {
            listStudentProgrammingLanguage: [],
            studentProgrammingLanguageId : 1,
            error:''
        }
    }

    componentDidMount(){
        this.getlistProgrammingLanguage();
    }

    getListStudentProgrammingLanguage = () => {
        let { account } = this.props;
        API.getListStudentProgrammingLanguage(account).then(
            res => { if (res.status == 200){
                    this.setState({
                        listStudentProgrammingLanguage : res.data.languages
                    })
                }
                console.log(res);
            }
        ).catch(err => {
            console.log(err);
        })
    }

    renderSelectProgrammingLanguage = () => {
        let { listProgrammingLanguage } = this.state;
        return listProgrammingLanguage.map((programminglanguage, index) => {
            return <option key={programminglanguage.id} value={index}>{programminglanguage.name}</option>
        });
    }

    onChangeProgrammingLanguage = (e) => {
        let { listProgrammingLanguage } = this.state;
        let value = e.target.value;
        this.setState({
            name_programminglanguage: listProgrammingLanguage[value].name,
            programminglanguage_id: listProgrammingLanguage[value].id
        })
        console.log(this.state.programminglanguage_id)
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onEditProgrammingLanguage = (e) => {
        e.preventDefault();

        let { programminglanguage_id } = this.state;
        let { account,toggleEditForm, regetData } = this.props

        API.addProgrammingLanguage(account,{programminglanguage_id})
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
        let { listProgrammingLanguage, error} = this.state;
        console.log(listProgrammingLanguage);
        return (
            <div>
                <div className="overview-box open" style={{ backgroundColor: '#00000000' }} id="bs-info-bx-form">
                    <div className="overview-edit">
                        <h3>Add programming language</h3>
                        <form>
                            <h4>Programming language:</h4>
                            <select onChange={this.onChangeProgrammingLanguage} style={{ paddingLeft: 15 + 'px' }}>
                                {this.renderSelectProgrammingLanguage()}
                            </select>
                            <div style={{ color: 'red' }}>{error}</div>
                            <button onClick={this.onEditProgrammingLanguage} className="save">Save</button>
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
export default connect(mapStateToProps,null)(FormUpdateStudentProgrammingLanguage)