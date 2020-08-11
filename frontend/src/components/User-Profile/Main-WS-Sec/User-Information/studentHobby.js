import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormUpdateStudentHobby from '../../../Form-Update/formUpdateStudentHobby'
import * as API from '../../../../api';

class StudentHobby extends Component {
    constructor(props) {
        super(props);
        this.state={
            userInformation : props.userInformation,
            listStudentHobby : [],
            openEditForm : false
        }
    }
    componentDidMount(){
        this.getListStudentHobby();
    }
    
    getListStudentHobby = () => {
        let {userInformation} = this.state;
        API.getStudentHobby(userInformation.user_id).then(
            res => { if (res.status == 200 && res.statusText == "OK"){
                    this.setState({
                        listStudentHobby : res.data.Hobbies
                    })
                    console.log(listStudentHobby)
                }
                console.log("res for getStudentHobby")
                console.log(res)
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
    
    render() {
        let { userInformation } = this.props
        let {openEditForm, listStudentHobby} = this.state

        let listItems = listStudentHobby.map((d, index) => 
           <div className="list-student-hobbies" key={index}>
                <h4>{d.name}</h4>
                <i style={{ fontStyle: 'italic' }}>{d.description}</i>
            </div>
        )
        return (
            <div className="user-profile-ov st2">
                <h3>
                    <div style={{ display: 'inline-block', cursor: 'pointer' }} className="exp-bx-open">Hobbies</div>
                    {userInformation.my_profile ? <div style={{ display: 'inline-block', cursor: 'pointer' }}
                         onClick={this.toggleEditForm}>
                             <i className="fa fa-pencil"></i>
                    </div> : ''}
                </h3>
                <div>
                    {/*
                    <p>{userInformation.class ? userInformation.class : <i style={{ fontStyle: 'italic' }}>-  Add your class</i>}</p>
                    */}
                    <div>
                    {listItems }
                    </div>
                    </div>
                {openEditForm?
                    <FormUpdateStudentHobby toggleEditForm={this.toggleEditForm}
                                                regetData={this.getListStudentHobby}/>
                :''}
            </div>
        )
    }
}

{/*
    You can do it in two ways:

First:

render() {
    const data =[{"name":"test1"},{"name":"test2"}];
    const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

    return (
      <div>
      {listItems }
      </div>
    );
  }
Second: Directly write the map function in the return

render() {
    const data =[{"name":"test1"},{"name":"test2"}];
    return (
      <div>
      {data.map(function(d, idx){
         return (<li key={idx}>{d.name}</li>)
       })}
      </div>
    );
  }
*/}
export default StudentHobby