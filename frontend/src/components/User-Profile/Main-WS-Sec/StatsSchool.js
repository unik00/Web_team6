import React, { Component } from 'react';
import * as API from '../../../api';

class Stats extends Component {
    componentDidUpdate(preprops){
        let {userInformation} = this.props
        if(preprops.userInformation != userInformation){
            return API.statsInSchool(userInformation.id).then(res=>{
                if(res.data.success){
                    return this.setState({
                        stats: res.data
                    })
                }
            })
        }
    }
    constructor(props) {
        super(props);
        this.state={
            stats:null
        }
    }
    render() {
        let {userInformation} = this.props
        let {stats} = this.state;
        return  stats && userInformation.type == 'School' ?(
            <div className="product-feed-tab" id="saved-jobs">
                <div className="posts-section">
                <div className="company-title">
                     <div className="row" >
                        <h3 style={{width:'30%'}}>Số Sinh viên:</h3>
                        <h3 style={{width:'70%'}}>{stats.student}</h3>
                    </div>
                </div>
                <div className="company-title">
                    <div className="row" >
                        <h3 style={{width:'100%'}}>Ngôn ngữ được Sinh viên sử dụng:</h3>
                    </div>
                </div>
                <div className="companies-list">
                    <div className="row">
                        {stats.languages.map((lg,index)=>{
                            return(
                                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                    <div className="company_profile_info">
                                        <br/><br/><br/>
                                        <h3>{lg.name}</h3>
                                        <br/><br/><br/>
                                        <h4>Số người sử dụng : {lg.student}</h4>
                                        <br/><br/><br/>
                                        <h4>Tỷ lệ : {stats.languages.length == 0 ? 0 : parseInt(lg.student/stats.languages.length * 100)} %</h4>
                                        <br/><br/><br/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <br/><br/><br/>
                </div>
                </div>
            </div>
        ):''
    }
}

export default Stats