import React , {Component} from 'react'
import * as API from '../../api'
import {connect} from 'react-redux'

class AdminCountry extends Component {
    componentDidUpdate(preprops){
        let {account} = this.props;
        if(preprops.account != account) {
            this.getData();
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            jobs: [],
            name:''
        }
    }

    getData = () => {
        let {account} = this.props
        return API.adminJobType (account)
        .then(res=>{
            console.log(res)
            this.setState({
                jobs: res.data.types ? res.data.types : []
            })
        })
        .catch(err=>{
            console.log(err);
            this.setState({
                jobs: []
            })
        })
    }

    remove = (id) => {
        let {account} = this.props;
        return API.adminJobTypeRemove(account,id)
        .then(res=>{
            alert(res.data.message)
            this.getData();
        })
    }

    add = () => {
        let {account} = this.props;
        let {name} = this.state;
        return API.adminJobTypeAdd(account,{
            name
        })
        .then(res=>{
            alert(res.data.message)
            this.getData();
        })
    }

    renderData = () => {
        let {jobs} = this.state
        return jobs.map((job,index) => {
            let update = new Date(job.updated_at)
            let create = new Date(job.created_at)
            console.log(create)
            return(
                <tr key={index}>
                    <th>{job.name}</th>
                    <th>
                        <button className="btn btn-danger" onClick={() => this.remove(job.id)}>Remove</button>
                    </th>
                    <th>{create.toString().substring(0,25)}</th>
                    <th>{update.toString().substring(0,25)}</th>
                </tr>
            )
        })
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }
    
    render(){
        let {name} = this.state
        return this.props.mode == 'job-type'?(
            <div>
                <div className="company-title">
                    <h3 className="company-title">Manage Job Type:</h3>
                </div>
                <div className="container">
                    <div className="row" style={{width:'100%'}}>
                        <input type="text" style={{width:'80%'}} className="form-control" name="name" value={name} placeholder="name country" onChange={this.inputOnchange} />
                        <button className="btn btn-primary" onClick={this.add}>Add</button>
                    </div>
                    <br/><br/>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Remove</th>
                            <th>Created</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </table>
            </div>
        ):''
    }
}
const mapStateToProps = state => {
    return{
        account: state.account
    }
}
export default connect(mapStateToProps, null)(AdminCountry)