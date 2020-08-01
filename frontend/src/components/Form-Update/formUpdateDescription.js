import React, { Component } from 'react'
import * as API from '../../api';
import { connect } from 'react-redux';

class FormUpdateDescription extends Component {
    constructor(props) {
        super(props);
        let { description } = this.props
        this.state = {
            address:description?description:'',
            error:''
        }
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onEditDescription = (e) => {
        e.preventDefault();
        let { description } = this.state;
        let { account,toggleEditForm, regetData } = this.props
        API.UpdateProfile(account,{
            description
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
        let { description, error } = this.state
        return (
            <div>
                <div class="overview-box open" id="overview-box">
                    <div class="overview-edit">
                        <h3>Edit Description</h3>
                        <form>
                            <textarea name='description' value={description} onChange={this.inputOnchange}></textarea>
                            <div style={{ color: 'red' }}>{error}</div>
                            <button onClick={this.onEditDescription} class="save">Save</button>
                            <button onClick={toggleEditForm} class="cancel">Cancel</button>
                        </form>
                        <div onClick={toggleEditForm} class="close-box"><i class="la la-close"></i></div>
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

export default connect(mapStateToProps,null)(FormUpdateDescription)