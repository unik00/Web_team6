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
            hobbies: [],
            name:'',
            description:''
        }
    }

    getData = () => {
        let {account} = this.props
        return API.adminHobby (account)
        .then(res=>{
            console.log(res)
            this.setState({
                hobbies: res.data.hobbies ? res.data.hobbies : []
            })
        })
        .catch(err=>{
            console.log(err);
            this.setState({
                hobbies: []
            })
        })
    }

    remove = (id) => {
        let {account} = this.props;
        return API.adminHobbyRemove(account,id)
        .then(res=>{
            alert(res.data.message)
            this.getData();
        })
    }

    add = () => {
        let {account} = this.props;
        let {name, description} = this.state;
        return API.adminHobbyAdd(account,{
            name,
            description
        })
        .then(res=>{
            alert(res.data.message)
            this.getData();
        })
    }

    renderData = () => {
        let {hobbies} = this.state
        return hobbies.map((hobby,index) => {
            let update = new Date(hobby.updated_at)
            let create = new Date(hobby.created_at)
            console.log(create)
            return(
                <tr key={index}>
                    <th>{hobby.name}</th>
                    <th>{hobby.description}</th>
                    <th>
                        <button className="btn btn-danger" onClick={() => this.remove(hobby.id)}>Remove</button>
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
        let {name, description} = this.state
        return this.props.mode == 'hobby' ? (
            <div>
                <div className="company-title">
                    <h3 className="company-title">Manage Hobby:</h3>
                </div>
                <div className="container">
                    <div className="row" style={{width:'100%'}}>
                        <input type="text" style={{width:'80%'}} className="form-control" name="name" value={name} placeholder="name hobby" onChange={this.inputOnchange} />
                        <input type="text" style={{width:'80%'}} className="form-control" name="description" value={description} placeholder="description" onChange={this.inputOnchange} />
                        <button className="btn btn-primary" onClick={this.add}>Add</button>
                    </div>
                    <br/><br/>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
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
        ) : ''
    }
}
const mapStateToProps = state => {
    return{
        account: state.account
    }
}
export default connect(mapStateToProps, null)(AdminCountry)