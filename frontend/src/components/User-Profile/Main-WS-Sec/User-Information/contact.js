import React, { Component } from 'react';
import FormUpdateContact from '../../../Form-Update/formUpdateContact'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            openEditForm : false
        }
    }

    toggleEditForm = () => {
        let { openEditForm } = this.state;
        this.setState({
            openEditForm : !openEditForm
        })
    }
    render() {
        let { userInformation } = this.props
        let {openEditForm} = this.state
        return (
            <div className="user-profile-ov st2">
                <h3>
                    <div style={{ display: 'inline-block' }} onClick={this.toggleEditForm}>Contact </div>
                    <div style={{ display: 'inline-block' }} onClick={this.toggleEditForm}><i className="fa fa-pencil"></i></div>
                </h3>
                <div>
                    <h4>Address:</h4>
                    <p>{userInformation.address ? userInformation.address : <i style={{ fontStyle: 'italic' }}>-  Add your address</i>}</p>
                </div>
                <div>
                    <h4>Email:</h4>
                    <p>{userInformation.email ? userInformation.email : <i style={{ fontStyle: 'italic' }}>-  Add your email</i>}</p>
                </div>
                <div>
                    <h4>Phone:</h4>
                    <p>{userInformation.phone ? userInformation.phone : <i style={{ fontStyle: 'italic' }}>-  Add your phone</i>}</p>
                </div>
                {openEditForm?<FormUpdateContact toggleEditForm={this.toggleEditForm}/>:''}
            </div>
        )
    }
}

export default Contact