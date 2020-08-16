import React, { Component } from 'react'

class UserTabSec extends Component {
    render() {
        let {name, type} = this.props
        return (
            <div className="user-tab-sec">
                <h3>{name}</h3>
                <div className="star-descp">
                    <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star-half-o"></i></li>
                    </ul>
                </div>
                <div className="tab-feed st2">
                    <ul>
                        <li data-tab="feed-dd" className="active">
                            <a href="#" title="">
                                <img src={require('../../../assets/images/ic1.png')} alt="" />
                                <span>Feed</span>
                            </a>
                        </li>
                        <li data-tab="info-dd">
                            <a href="#" title="">
                                <img src={require('../../../assets/images/ic2.png')} alt="" />
                                <span>Info</span>
                            </a>
                        </li>
                        <li data-tab="saved-jobs">
                            {type== 'School' ?<a href="#" title="">
                                <img src={require('../../../assets/images/ic4.png')} alt="" />
                                <span>Stats</span>
                            </a>:''}
                        </li>
                        {/* <li data-tab="my-bids">
                            <a href="#" title="">
                                <img src="images/ic5.png" alt="" />
                                <span>My Bids</span>
                            </a>
                        </li> */}
                        {/* <li data-tab="portfolio-dd">
                            <a href="#" title="">
                                <img src={require('../../../assets/images/ic3.png')} alt="" />
                                <span>Portfolio</span>
                            </a>
                        </li> */}
                        {/* <li data-tab="payment-dd">
                            <a href="#" title="">
                                <img src="images/ic6.png" alt="" />
                                <span>Payment</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserTabSec