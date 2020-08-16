import React, {Component} from 'react'
import * as API from '../../api';

class Stats extends Component {
    componentDidMount(){
        return API.statsIndex().then(res=>{
            if(res.data.success){
                return this.setState({
                    stats: res.data
                })
            }
        })
    }
    constructor(props) {
        super(props);
        this.state={
            stats:null
        }
    }
    render(){
        let {stats} = this.state
        return stats ?(
            <div className="container">
                <br/><br/><br/><br/><br/><br/>
                <div className="company-title">
                    <div className="row" >
                        <h3 style={{width:'30%'}}>Số người dùng:</h3>
                        <h3 style={{width:'70%'}}>{stats.user}</h3>
                    </div>
                </div>
                <div className="company-title">
                     <div className="row" >
                        <h3 style={{width:'30%'}}>Số Sinh viên:</h3>
                        <h3 style={{width:'70%'}}>{stats.student}</h3>
                    </div>
                </div>
                <div className="company-title">
                     <div className="row" >
                        <h3 style={{width:'30%'}}>Số Trường:</h3>
                        <h3 style={{width:'70%'}}>{stats.school}</h3>
                    </div>
                </div>
                <div className="company-title">
                     <div className="row" >
                        <h3 style={{width:'30%'}}>Số Công ty:</h3>
                        <h3 style={{width:'70%'}}>{stats.company}</h3>
                    </div>
                </div>
                <div className="company-title">
                     <div className="row" >
                        <h3 style={{width:'30%'}}>Số Ngôn ngữ lập trình:</h3>
                        <h3 style={{width:'70%'}}>{stats.language}</h3>
                    </div>
                </div>
                <div className="company-title">
                     <div className="row" >
                        <h3 style={{width:'30%'}}>Số Công việc:</h3>
                        <h3 style={{width:'70%'}}>{stats.job}</h3>
                    </div>
                </div>
                <div className="company-title">
                    <div className="row" >
                        <h3 style={{width:'100%'}}>Ngôn ngữ được Sinh viên sử dụng:</h3>
                    </div>
                </div>
                <div className="companies-list">
                    <div className="row">
                        {stats.language_student.map((lg,index)=>{
                            return(
                                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                    <div className="company_profile_info">
                                        <br/><br/><br/>
                                        <h3>{lg.name}</h3>
                                        <br/><br/><br/>
                                        <h4>Số người sử dụng : {lg.student}</h4>
                                        <br/><br/><br/>
                                        <h4>Tỷ lệ : {stats.language == 0 ? 0 : parseInt(lg.student/stats.language * 100)} %</h4>
                                        <br/><br/><br/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <br/><br/><br/>
                </div>
                <div className="company-title">
                    <div className="row" >
                        <h3 style={{width:'100%'}}>Ngôn ngữ được Sử dụng trong công việc:</h3>
                    </div>
                </div>
                <div className="companies-list">
                    <div className="row">
                        {stats.language_job.map((lg,index)=>{
                            return(
                                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                    <div className="company_profile_info">
                                        <br/><br/><br/>
                                        <h3>{lg.name}</h3>
                                        <br/><br/><br/>
                                        <h4>Số Job sử dụng : {lg.job}</h4>
                                        <br/><br/><br/>
                                        <h4>Tỷ lệ : {stats.job == 0 ? 0 : parseInt(lg.job/stats.job * 100)} %</h4>
                                        <br/><br/><br/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        ) : ''
    }
}

export default Stats