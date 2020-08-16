import React , {Component} from 'react'
import * as API from '../../api'
import {connect} from 'react-redux'

class AdminUser extends Component {
    componentDidUpdate(preprops){
        let {account} = this.props;
        if(preprops.account != account) {
            this.getData();
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    getData = () => {
        let {account} = this.props
        return API.adminUser(account)
        .then(res=>{
            console.log(res)
            this.setState({
                users: res.data.Users ? res.data.Users : []
            })
        })
        .catch(err=>{
            console.log(err);
            this.setState({
                users: []
            })
        })
    }

    changeActive = (id) => {
        let {account} = this.props;
        return API.adminUserChangeActive(account,id)
        .then(res=>{
            alert(res.data.message)
            this.getData();
        })
    }

    renderUser = () => {
        let {users} = this.state
        return users.map((user,index) => {
            let update = new Date(user.updated_at)
            let create = new Date(user.created_at)
            return user.type !='Admin' ? (
                <tr key={index}>
                    <th>{user.name}</th>
                    <th>{user.username}</th>
                    <th>{user.is_active ? 
                        <button className="btn btn-primary" onClick={() => this.changeActive(user.id)}>active</button> :
                        <button className="btn btn-danger" onClick={() => this.changeActive(user.id)}>inactive</button>}
                    </th>
                    <th>{user.email}</th>
                    <th>{user.type}</th>
                    <th>{create.toString().substring(0,25)}</th>
                    <th>{update.toString().substring(0,25)}</th>
                </tr>
            ) : ''
        })
    }

    
    render(){
        return this.props.mode == 'user' ?(
            <div>
                <div className="company-title">
                    <h3 className="company-title">Manage User:</h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Active</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Created</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUser()}
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
export default connect(mapStateToProps, null)(AdminUser)