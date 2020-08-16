import React, { Component } from 'react';
import * as API from '../../../../api';
import FormUpdateStudentLanguage from '../../../Form-Update/formUpdateStudentLanguage';
import {connect} from 'react-redux';

class StudentLanguage extends Component {
    constructor(props) {
        super(props);
        this.state={
            userInformation : props.userInformation,
            listStudentLanguage : [],
            level : null,
            openEditForm : false
        }
    }
    componentDidMount(){
        this.getListStudentLanguage();
    }
    
    getListStudentLanguage = () => {
        let {userInformation} = this.state;
        API.getStudentLanguage(userInformation.user_id).then(
            res => { if (res.status == 200){
                    this.setState({
                        listStudentLanguage : res.data.languages,
                    })
                }
            }
        ).catch(err => {
            console.log(err);
        })
    }

    toggleEditForm = () => {
        let { openEditForm } = this.state;
        this.setState({
            openEditForm : !openEditForm
        })
    }

    removeLanguage = (id) => {
        let {account} = this.props
        return API.removeStudentLanguage(account, id)
        .then(res=>{
            alert(res.data.message);
            this.getListStudentLanguage();
        })
        .catch(err=>{
            console.log(err);
            alert('Lỗi');
        })
    }  
    
    render() {
        let { userInformation } = this.props
        let {openEditForm, listStudentLanguage} = this.state

        let listItems = listStudentLanguage.map((d, index) => 
           <div className="list-student-languages" key={index}>
                <h4>
                    {d.language_name}
                    {/* <p> */}
                        {/* <i style={{ fontStyle: 'italic' }}>{d.level} years of experience.</i> */}
                    {/* </p> */}
                    <div style={{ display: 'inline-block', cursor: 'pointer' }}
                            onClick={() => this.removeLanguage(d.id)}>
                                <i className="fa fa-trash"></i>
                    </div>
                </h4>
            </div>
        )
        return (
            <div className="user-profile-ov st2">
                <h3>
                    <div style={{ display: 'inline-block', cursor: 'pointer' }} className="exp-bx-open">
                        Languages
                    </div>
                    {userInformation.my_profile ? <div style={{ display: 'inline-block', cursor: 'pointer' }}
                         onClick={this.toggleEditForm}>
                             <i className="fa fa-pencil"></i>
                    </div> : ''}
                </h3>
                <div>
                    <div>
                    {listItems }
                    </div>
                    </div>
                {openEditForm?
                    <FormUpdateStudentLanguage toggleEditForm={this.toggleEditForm}
                                                regetData={this.getListStudentLanguage}/>
                :''}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        account: state.account
    }
}

export default connect(mapStateToProps,null)(StudentLanguage)