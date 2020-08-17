import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:''
        }
    }
    search = () => {
        let {name} = this.state
        let {history} = this.props
        history.push(`all-user?name=${name}`)
    }
    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }
    render() {
        let {name} = this.state
        return (
            <div className="search-bar">
                <form>
                    <input type="text" name="name" value={name} placeholder="Search user by name..." onChange={this.inputOnchange}/>
                    <button onClick={this.search}><i className="la la-search"></i></button>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);