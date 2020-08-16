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
            countries: [],
            name:''
        }
    }

    getData = () => {
        let {account} = this.props
        return API.adminAvailabilty (account)
        .then(res=>{
            console.log(res)
            this.setState({
                countries: res.data.availabilties ? res.data.availabilties : []
            })
        })
        .catch(err=>{
            console.log(err);
            this.setState({
                countries: []
            })
        })
    }

    remove = (id) => {
        let {account} = this.props;
        return API.adminAvailabiltyRemove(account,id)
        .then(res=>{
            alert(res.data.message)
            this.getData();
        })
    }

    add = () => {
        let {account} = this.props;
        let {name} = this.state;
        return API.adminAvailabiltyAdd(account,{
            name
        })
        .then(res=>{
            alert(res.data.message)
            this.getData();
        })
    }

    renderData = () => {
        let {countries} = this.state
        return countries.map((country,index) => {
            let update = new Date(country.updated_at)
            let create = new Date(country.created_at)
            console.log(create)
            return(
                <tr key={index}>
                    <th>{country.name}</th>
                    <th>
                        <button className="btn btn-danger" onClick={() => this.remove(country.id)}>Remove</button>
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
        return this.props.mode == 'availbilty' ?(
            <div>
                <div className="company-title">
                    <h3 className="company-title">Manage Availabilty:</h3>
                </div>
                <div className="container">
                    <div className="row" style={{width:'100%'}}>
                        <input type="text" style={{width:'80%'}} className="form-control" name="name" value={name} placeholder="name" onChange={this.inputOnchange} />
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