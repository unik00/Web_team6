import React , {Component} from 'react'
import AdminUser from './adminUser'
import AdminCountry from './adminCountry'
import AdminHobby from './adminHobby'
import AdminProgramLanguage from './adminProgramLanguage'
import AdminLanguage from './adminLanguage'
import AdminJobType from './adminJobType'
import AdminAvailabity from './adminAvailabilty'
import AdminExp from './adminExp'

import {withRouter} from 'react-router-dom'

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'user'
        }
    }
    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })

    }

    render(){
        let {mode} = this.state
        return(
            <div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="container">
                    <select className="form-control" name="mode"  value={mode} onChange={this.inputOnchange} style={{ paddingLeft: 15 + 'px' }}>
                        <option value="user">Manage User</option>
                        <option value="country">Manage Country</option>
                        <option value="hobby">Manage Hobby</option>
                        <option value="prlg">Manage Program language</option>
                        <option value="language">Manage Language</option>
                        <option value="job-type">Manage Job Type</option>
                        <option value="availbilty">Manage Availabity</option>
                        <option value="exp">Manage Experience</option>
                    </select>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <AdminUser mode={mode}/>
                <AdminCountry mode={mode}/>
                <AdminHobby mode={mode}/> 
                <AdminProgramLanguage mode={mode}/>
                <AdminLanguage mode={mode}/>
                <AdminJobType mode={mode}/> 
                <AdminAvailabity mode={mode}/>
                <AdminExp mode={mode}/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
}

export default withRouter(Admin)