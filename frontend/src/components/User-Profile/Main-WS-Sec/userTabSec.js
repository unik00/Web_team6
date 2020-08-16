import React, { Component } from 'react'
import FormVote from '../../Form-Update/formVote'
import * as API from '../../../api'

class UserTabSec extends Component {
    componentDidUpdate(preprops){
        let {userInformation} = this.props
        if(preprops.userInformation != userInformation)
        {
            this.getScore();
        }
        
    }
    constructor(props) {
        super(props);
        this.state={
            openEditForm : false,
            score: 0
        }
    }

    toggleEditForm = () => {
        let { openEditForm } = this.state;
        this.getScore();
        this.setState({
            openEditForm : !openEditForm
        })
    }

    getScore = () => {
        let {userInformation} = this.props
        return API.getScore(userInformation.user_id)
        .then(res=>{
            console.log(res);
            this.setState({
                score: res.data != '' > 0 ? res.data :  10
            })
        })
        .catch(err=>{
            console.log(err)
            this.setState({
                score:null
            })
        })
    }

    renderStar = () => {
        let {score} = this.state
        let arr = [1,2,3,4,5,6,7,8,9,10];
        return score >= 0 ? (
            <ul>
                {arr.map((value,index) => {
                    return value <= score ?
                        <li key={index}><i className="fa fa-star"></i></li>    
                    :<li key={index}><i className="fa fa-star-o"></i></li>
                })}
            </ul>
        ):''
    }

    render() {
        let {name, type, userInformation} = this.props
        let {openEditForm} = this.state
        return (
            <div className="user-tab-sec">
                <h3>{name}</h3>
                <div className="star-descp">
                    {this.renderStar()}
                    <button onClick={this.toggleEditForm}>Vote</button>
                </div>
                <div className="tab-feed st2">
                    <ul>
                        <li data-tab="feed-dd" className="active">
                            <a href="#" title="">
                                <img src={require('../../../assets/images/ic1.png')} alt="" />
                                <span>Feed</span>
                            </a>
                        </li>
                        <li data-tab="info-dd">
                            <a href="#" title="">
                                <img src={require('../../../assets/images/ic2.png')} alt="" />
                                <span>Info</span>
                            </a>
                        </li>
                        <li data-tab="saved-jobs">
                            {type== 'School' ?<a href="#" title="">
                                <img src={require('../../../assets/images/ic4.png')} alt="" />
                                <span>Stats</span>
                            </a>:''}
                        </li>
                    </ul>
                </div>
                {openEditForm?<FormVote toggleEditForm={this.toggleEditForm}
                                        userInformation={userInformation}
                                        />:''}
            </div>
        )
    }
}

export default UserTabSec