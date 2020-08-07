import React, { Component } from 'react';
import * as API from '../../../api';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class SuggesstionUser extends Component {
    componentDidUpdate(prevProps) {
        let { account } = this.props;

        if (prevProps.account !== account) {
            API.getListUser(account).then(res => {
                console.log(res);
                this.setState({
                    listUser: res.data.users
                })
            })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            listUser: []
        }
    }

    renderSuggestionUser = () => {
        let { listUser } = this.state;
        return listUser.map((user, index) => {
            return (
                <div className="suggestion-usd" key={index}>
                    <img src="http://via.placeholder.com/35x35" alt="" />
                    <div className="sgt-text">
                        <h4>{user.name}</h4>
                    </div>
                    <span><i className="la la-plus"></i></span>
                </div>
            )
        })
    }

    render() {
        let {history} = this.props
        return (
            <div className="suggestions full-width">
                <div className="sd-title">
                    <h3>People Viewed Profile</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>
                <div className="suggestions-list">
                    <div className="suggestion-usd">
                        <img src="http://via.placeholder.com/35x35" alt="" />
                        <div className="sgt-text">
                            <h4>Jessica William</h4>
                            <span>Graphic Designer</span>
                        </div>
                        <span><i className="la la-plus"></i></span>
                    </div>
                    {this.renderSuggestionUser()}
                    <div className="view-more">
                        <Link to={"/all-user"}  onClick={() => { this.props.history.push(`/all-user`); this.props.history.go() }}>View More</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        account: state.account
    }
}

export default withRouter(connect(mapStateToProps, null)(SuggesstionUser));