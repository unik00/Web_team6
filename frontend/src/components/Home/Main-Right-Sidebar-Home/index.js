import React, { Component } from 'react';

class MainRightSidebar extends Component {
    render() {
        return (
            <div className="col-lg-3 pd-right-none no-pd">
                <div className="right-sidebar">
                    <div className="widget widget-about">
                        <img src="images/wd-logo.png" alt="" />
                        <h3>Track Time on Workwise</h3>
                        <span>Pay only for the Hours worked</span>
                        <div className="sign_link">
                            <h3><a href="#" title="">Sign up</a></h3>
                            <a href="#" title="">Learn More</a>
                        </div>
                    </div>
                    <div className="widget widget-jobs">
                        <div className="sd-title">
                            <h3>Top Jobs</h3>
                            <i className="la la-ellipsis-v"></i>
                        </div>
                        <div className="jobs-list">
                            <div className="job-info">
                                <div className="job-details">
                                    <h3>Senior Product Designer</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                </div>
                                <div className="hr-rate">
                                    <span>$25/hr</span>
                                </div>
                            </div>
                            <div className="job-info">
                                <div className="job-details">
                                    <h3>Senior UI / UX Designer</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                </div>
                                <div className="hr-rate">
                                    <span>$25/hr</span>
                                </div>
                            </div>
                            <div className="job-info">
                                <div className="job-details">
                                    <h3>Junior Seo Designer</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                </div>
                                <div className="hr-rate">
                                    <span>$25/hr</span>
                                </div>
                            </div>
                            <div className="job-info">
                                <div className="job-details">
                                    <h3>Senior PHP Designer</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                </div>
                                <div className="hr-rate">
                                    <span>$25/hr</span>
                                </div>
                            </div>
                            <div className="job-info">
                                <div className="job-details">
                                    <h3>Senior Developer Designer</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                </div>
                                <div className="hr-rate">
                                    <span>$25/hr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget widget-jobs">
                        <div className="sd-title">
                            <h3>Most Viewed This Week</h3>
                            <i className="la la-ellipsis-v"></i>
                        </div>
                        <div className="jobs-list">
                            <div className="job-info">
                                <div className="job-details">
                                    <h3>Senior Product Designer</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                </div>
                                <div className="hr-rate">
                                    <span>$25/hr</span>
                                </div>
                            </div>
                            <div className="job-info">
                                <div className="job-details">
                                    <h3>Senior UI / UX Designer</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                </div>
                                <div className="hr-rate">
                                    <span>$25/hr</span>
                                </div>
                            </div>
                            <div className="job-info">
                                <div className="job-details">
                                    <h3>Junior Seo Designer</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                                </div>
                                <div className="hr-rate">
                                    <span>$25/hr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget suggestions full-width">
                        <div className="sd-title">
                            <h3>Most Viewed People</h3>
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
                            <div className="suggestion-usd">
                                <img src="http://via.placeholder.com/35x35" alt="" />
                                <div className="sgt-text">
                                    <h4>John Doe</h4>
                                    <span>PHP Developer</span>
                                </div>
                                <span><i className="la la-plus"></i></span>
                            </div>
                            <div className="suggestion-usd">
                                <img src="http://via.placeholder.com/35x35" alt="" />
                                <div className="sgt-text">
                                    <h4>Poonam</h4>
                                    <span>Wordpress Developer</span>
                                </div>
                                <span><i className="la la-plus"></i></span>
                            </div>
                            <div className="suggestion-usd">
                                <img src="http://via.placeholder.com/35x35" alt="" />
                                <div className="sgt-text">
                                    <h4>Bill Gates</h4>
                                    <span>C &amp; C++ Developer</span>
                                </div>
                                <span><i className="la la-plus"></i></span>
                            </div>
                            <div className="suggestion-usd">
                                <img src="http://via.placeholder.com/35x35" alt="" />
                                <div className="sgt-text">
                                    <h4>Jessica William</h4>
                                    <span>Graphic Designer</span>
                                </div>
                                <span><i className="la la-plus"></i></span>
                            </div>
                            <div className="suggestion-usd">
                                <img src="http://via.placeholder.com/35x35" alt="" />
                                <div className="sgt-text">
                                    <h4>John Doe</h4>
                                    <span>PHP Developer</span>
                                </div>
                                <span><i className="la la-plus"></i></span>
                            </div>
                            <div className="view-more">
                                <a href="#" title="">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainRightSidebar;