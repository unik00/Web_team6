import React, { Component } from 'react'
import * as API from '../../api';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class FormVote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score:1
        }
    }

    onVote = (e) => {
        let { toggleEditForm } = this.props
        e.preventDefault();
        let {score} = this.state;
        let {userInformation , account} = this.props
        return API.vote(account,{
            id: userInformation.user_id,
            score
        })       
        .then(res=>{
            alert(res.data.message)
            toggleEditForm();
        }) 
        .catch(err=>{
            console.log(err)
            alert(res.data.message)
        })
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }
    render() {
        let { toggleEditForm } = this.props
        let { score,error} = this.state
        return (
            <div>
                <div className="overview-box open" style={{ backgroundColor: '#00000000' }} id="bs-info-bx-form">
                    <div className="overview-edit">
                        <h3>Vote</h3>
                        <form>
                            <select name="score" value={score} onChange={this.inputOnchange} style={{color:'red'}}>
                                    <option value={1}> 1 </option>
                                    <option value={2}> 2 </option>
                                    <option value={3}> 3 </option>
                                    <option value={4}> 4 </option>
                                    <option value={5}> 5 </option>
                                    <option value={6}> 6 </option>
                                    <option value={7}> 7 </option>
                                    <option value={8}> 8 </option>
                                    <option value={9}> 9 </option>
                                    <option value={10}> 10 </option>
                                </select>
                            <div style={{ color: 'red' }}>{error}</div>
                            <button onClick={this.onVote} className="save">Vote</button>
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
export default withRouter(connect(mapStateToProps,null)(FormVote))