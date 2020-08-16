import React, { Component } from 'react';
import * as API from '../../api';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from './filter'

class AllUser extends Component {
	componentDidMount() {
		this.onChangeType(1);
	}
	constructor(props) {
		super(props);
		this.state = {
			listUser: [],
			type: 1
		}
	}

	onChangeType = (type) => {
		let { account } = this.props
		switch (type) {
			case 1:
				API.getListCompany(account)
					.then(res => {
						if (res.status == 200) {
							this.setState({
								listUser: res.data.Companies,
								type: type
							})
						}
					})
					.catch(err => console.log(err))
				break;
			case 2:
				API.getListSchool(account)
					.then(res => {
						if (res.status == 200) {
							this.setState({
								listUser: res.data.Schools,
								type: type
							})
						}
					})
					.catch(err => console.log(err))
				break;
			case 3:
				API.getListStudent(account)
					.then(res => {
						if (res.status == 200) {
							this.setState({
								listUser: res.data.Students,
								type: type
							})
						}
					})
					.catch(err => console.log(err))
		}
	}

	onFilterUser = (type, listUser) => {
		this.setState({
			listUser,
			type: type
		})
	}

	onFollow = (other_id) => {
		let { account } = this.props;

		return API.followUser(account, other_id)
			.then(res => {
				alert(res.data.message);
				this.onChangeType(this.state.type);
			})
			.catch(err => {
				console.log(err);
				alert('Something went wrong')
			})
	}

	unFollow = (other_id) => {
		let { account } = this.props;

		return API.unfollowUser(account, other_id)
			.then(res => {
				alert(res.data.message);
				this.onChangeType(this.state.type);
			})
			.catch(err => {
				console.log(err);
				alert('Something went wrong')
			})
	}

	renderListUser = () => {
		let { listUser } = this.state;
		let { history } = this.props;
		return listUser ? listUser.map((user, index) => {
			return (
				<div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
					<div className="company_profile_info">
						<div className="company-up-info">
							<img src={user && user.avatar ? `http://localhost:8000/images/avatar/${user.avatar}`
								: "http://via.placeholder.com/91x91"} alt=""
								style={{ width: 91 + 'px', height: 91 + 'px' }} />
							<h3>{user.name}</h3>
							<ul>
								<li>{!user.is_follow ?
									<a href="#" title=""
										className="follow"
										onClick={() => this.onFollow(user.id)}>
										Follow
									</a>
									: <a href="#" title=""
										className="follow"
										onClick={() => this.unFollow(user.id)}
										style={{ backgroundColor: 'red' }}>
										Unfollow
									</a>
								}</li>
								<li><Link to={`messages?other_id=${user.id}`}
									onClick={() => { history.push(`/messages?other_id=${user.id}`); history.go() }}
									className="message-us">
									<i className="fa fa-envelope"></i>
								</Link></li>
								{/* <li><a href="#" title="" className="hire-us">Hire</a></li> */}
							</ul>
						</div>
						<Link to={`user-profile?other_id=${user.user_id}`}
							onClick={() => { history.push(`user-profile?other_id=${user.user_id}`); history.go() }}
							className="view-more-pro">
							View Profile
						</Link>
					</div>
				</div>
			)
		}) : ''
	}

	render() {
		let { type } = this.state
		return (
			<section className="companies-info">
				<div className="container">
					<div className="row">
						<div className="col-lg-9">
							<div className="company-title" style={{ backgroundColor: type == 1 ? '#b9b5b5' : 'white', cursor: 'pointer' }}>
								<h3 style={{ backgroundColor: type == 1 ? '#b9b5b5' : 'white' }} onClick={() => this.onChangeType(1)}>All Companies</h3>
							</div>
							<div className="company-title" style={{ backgroundColor: type == 2 ? '#b9b5b5' : 'white', cursor: 'pointer' }}>
								<h3 style={{ backgroundColor: type == 2 ? '#b9b5b5' : 'white' }} onClick={() => this.onChangeType(2)}>All School</h3>
							</div>
							<div className="company-title" style={{ backgroundColor: type == 3 ? '#b9b5b5' : 'white', cursor: 'pointer' }}>
								<h3 style={{ backgroundColor: type == 3 ? '#b9b5b5' : 'white' }} onClick={() => this.onChangeType(3)}>All Student</h3>
							</div>
							<div className="companies-list">
								<div className="row">
									{this.renderListUser()}
								</div>
							</div>
							<div className="process-comm">
								<div className="spinner">
									<div className="bounce1"></div>
									<div className="bounce2"></div>
									<div className="bounce3"></div>
								</div>
							</div>
						</div>
						<Filter onFilterUser={this.onFilterUser}/>
					</div>
				</div>
			</section>
		)
	}
}
const mapStateToProps = state => {
	return {
		account: state.account
	}
}
export default withRouter(connect(mapStateToProps)(AllUser));