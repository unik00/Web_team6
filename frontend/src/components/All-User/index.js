import React, {Component} from 'react';
import * as API from '../../api';
import {connect} from 'react-redux';

class AllUser extends Component {
    componentDidMount(){

    }
    constructor(props) {
        super(props);
        this.state = {
            listUser: [],
            type: 1
        }
    }

    onChangeType = (type) => {
        
        API.getListUser().then(res=>{
            console.log(res);
            this.setState({
                type
            });
        })
        .catch(err=>{
            console.log(err);
            this.setState({
                type
            });
        })
    }
    
    render(){
        let {type} = this.state
        return(
            <section className="companies-info">
			<div className="container">
				<div className="company-title" style={{backgroundColor: type==1?'#b9b5b5':'white', cursor:'pointer'}}>
					<h3 style={{backgroundColor: type==1?'#b9b5b5':'white'}} onClick={() => this.onChangeType(1)}>All Companies</h3>
				</div>
                <div className="company-title" style={{backgroundColor: type==2?'#b9b5b5':'white', cursor:'pointer'}}>
					<h3 style={{backgroundColor: type==2?'#b9b5b5':'white'}} onClick={() => this.onChangeType(2)}>All School</h3>
				</div>
                <div className="company-title" style={{backgroundColor: type==3?'#b9b5b5':'white', cursor:'pointer'}}>
					<h3 style={{backgroundColor: type==3?'#b9b5b5':'white'}} onClick={() => this.onChangeType(3)}>All Student</h3>
				</div>
				<div className="companies-list">
					<div className="row">
						<div className="col-lg-3 col-md-4 col-sm-6 col-12">
							<div className="company_profile_info">
								<div className="company-up-info">
									<img src="http://via.placeholder.com/91x91" alt=""/>
									<h3>John Doe</h3>
									<h4>Graphic Designer</h4>
									<ul>
										<li><a href="#" title="" className="follow">Follow</a></li>
										<li><a href="#" title="" className="message-us"><i className="fa fa-envelope"></i></a></li>
										<li><a href="#" title="" className="hire-us">Hire</a></li>
									</ul>
								</div>
								<a href="#" title="" className="view-more-pro">View Profile</a>
							</div>
						</div>
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
		</section>
        )
    }
}

const mapStateToProps = state => {
    
}

export default AllUser;