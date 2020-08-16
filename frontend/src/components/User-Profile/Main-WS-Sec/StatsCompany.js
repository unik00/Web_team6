import React, { Component } from 'react';
import * as API from '../../../api';

class StatsCompany extends Component {
    componentDidUpdate(preprops){
        let {userInformation} = this.props
        if(preprops.userInformation != userInformation){
            return API.statsInCompany(userInformation.id).then(res=>{
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
        let {stats} = this.state;
        let {userInformation} = this.props
        return  stats && userInformation.type == 'Company' ?(
            <div className="product-feed-tab" id="saved-jobs">
                <div className="posts-section">
                <div className="company-title">
                     <div className="row" >
                        <h3 style={{width:'30%'}}>Số Công việc:</h3>
                        <h3 style={{width:'70%'}}>{stats.job}</h3>
                    </div>
                </div>
                <div className="company-title">
                    <div className="row" >
                        <h3 style={{width:'100%'}}>Ngôn ngữ được công ty sử dụng:</h3>
                    </div>
                </div>
                <div className="companies-list">
                    <div className="row">
                        {stats.language.map((lg,index)=>{
                            return(
                                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                    <div className="company_profile_info">
                                        <br/><br/><br/>
                                        <h3>{lg.name}</h3>
                                        <br/><br/><br/>
                                        <h4>Số job sử dụng : {lg.job}</h4>
                                        <br/><br/><br/>
                                        <h4>Tỷ lệ : {stats.language.length == 0 ? 0 : parseInt(lg.job/stats.language.length * 100)} %</h4>
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

export default StatsCompany