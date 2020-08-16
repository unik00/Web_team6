import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormUpdateExperience from '../../../Form-Update/formUpdateExperience'
import * as API from '../../../../api';
import {connect} from 'react-redux';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state={
            userInformation : props.userInformation,
            listStudentExperience : [],
            openEditForm : false
        }
    }
    componentDidMount(){
        this.getListExperience();
    }
    
    getListExperience = () => {
        let {userInformation} = this.state;
        API.getExperience(userInformation.user_id).then(
            res => { if (res.status == 200 && res.data.success){
                    this.setState({
                        listStudentExperience : res.data.exps
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
     
    removeExperience = (exp_id) => {
        let {account} = this.props
        return API.removeExperience(account,exp_id)
        .then(res=>{
            alert(res.data.message);
            this.getListExperience();
        })
        .catch(err=>{
            console.log(err);
            alert('lỗi');
        })
    }        

    render() {
        let { userInformation } = this.props
        let {openEditForm, listStudentExperience} = this.state
        
        
        let mapExperience = (d, index) => { 
            let data = d.company_name + " (from " + d.start.split(' ')[0];
    
            if (d.end && d.end != '') 
                // data += <i style={{ fontStyle: 'italic' }}> to  </i> + d.end.split(' ')[0];     
                data += ' to ' + d.end.split(' ')[0];     
            
            data += ')';
            
            return <div className="list-student-exps" key={index}>
            <h4>
                {data}
                <div style={{ display: 'inline-block', cursor: 'pointer' }}
                         onClick={() => this.removeExperience(d.id)}>
                             <i className="fa fa-trash"></i>
                </div>
            </h4>
            <p>
                <i style={{ fontStyle: 'italic' }}>{d.description}</i>
            </p>
            </div>;
        }
        let listItems = listStudentExperience.map(mapExperience)
        return (
            <div className="user-profile-ov st2">
                <h3>
                    <div style={{ display: 'inline-block', cursor: 'pointer' }} className="exp-bx-open">Experience</div>
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
                    <FormUpdateExperience toggleEditForm={this.toggleEditForm}
                                                regetData={this.getListExperience}/>
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

export default connect(mapStateToProps,null)(Experience)