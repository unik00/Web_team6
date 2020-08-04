import React, { Component } from 'react'
import * as API from '../../api';
import { connect } from 'react-redux';

class FormUpdateContact extends Component {
    constructor(props) {
        super(props);
        let { address, phone } = this.props
        this.state = {
            address:address?address:'',
            phone:phone?phone:'',
            error:''
        }
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onEditContact = (e) => {
        e.preventDefault();
        let { address, phone } = this.state;
        let { account,toggleEditForm, regetData } = this.props
        API.UpdateProfile(account,{
            address,
            phone
        })
            .then(res => {
                if(res.status == 200){
                    alert('Edit successfully');
                    regetData(account);
                    toggleEditForm();
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
        let { toggleEditForm } = this.props
        let { address, phone, error } = this.state
        return (
            <div>
                <div className="overview-box open" id="overview-box">
                    <div className="overview-edit">
                        <h3>Edit Contact</h3>
                        <form>
                            <h4>Address:</h4>
                            <input type="text" name="address" placeholder="Fullname" value={address} onChange={this.inputOnchange} />

                            <h4>Phone:</h4>
                            <input type="text" name="phone" placeholder="Fullname" value={phone} onChange={this.inputOnchange} />

                            <div style={{ color: 'red' }}>{error}</div>
                            <button onClick={this.onEditContact} className="save">Save</button>
                            <button onClick={toggleEditForm} className="cancel">Cancel</button>
                        </form>
                        <div onClick={toggleEditForm} className="close-box"><i className="la la-close"></i></div>
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

export default connect(mapStateToProps,null)(FormUpdateContact)