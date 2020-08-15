import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <main>
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                    <div className="main-left-sidebar no-margin">
                                        <div className="user-data full-width">
                                            <div className="user-profile">
                                                <div className="username-dt">
                                                    <div className="usr-pic">
                                                        <img src="http://via.placeholder.com/100x100" alt="" />
                                                    </div>
                                                </div>
                                                <div className="user-specs">
                                                    <h3>John Doe</h3>
                                                    <span>Graphic Designer at Self Employed</span>
                                                </div>
                                            </div>
                                            <ul className="user-fw-status">
                                                <li>
                                                    <h4>Following</h4>
                                                    <span>34</span>
                                                </li>
                                                <li>
                                                    <h4>Followers</h4>
                                                    <span>155</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">View Profile</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="suggestions full-width">
                                            <div className="sd-title">
                                                <h3>Suggestions</h3>
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
                                                        <span>C & C++ Developer</span>
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
                                        <div className="tags-sec full-width">
                                            <ul>
                                                <li><a href="#" title="">Help Center</a></li>
                                                <li><a href="#" title="">About</a></li>
                                                <li><a href="#" title="">Privacy Policy</a></li>
                                                <li><a href="#" title="">Community Guidelines</a></li>
                                                <li><a href="#" title="">Cookies Policy</a></li>
                                                <li><a href="#" title="">Career</a></li>
                                                <li><a href="#" title="">Language</a></li>
                                                <li><a href="#" title="">Copyright Policy</a></li>
                                            </ul>
                                            <div className="cp-sec">
                                                <img src="images/logo2.png" alt="" />
                                                <p><img src="images/cp.png" alt="" />Copyright 2018</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-8 no-pd">
                                    <div className="main-ws-sec">
                                        <div className="post-topbar">
                                            <div className="user-picy">
                                                <img src="http://via.placeholder.com/100x100" alt="" />
                                            </div>
                                            <div className="post-st">
                                                <ul>
                                                    <li><a className="post_project" href="#" title="">Post a Project</a></li>
                                                    <li><a className="post-jb active" href="#" title="">Post a Job</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="posts-section">
                                            <div className="post-bar">
                                                <div className="post_topbar">
                                                    <div className="usy-dt">
                                                        <img src="http://via.placeholder.com/50x50" alt="" />
                                                        <div className="usy-name">
                                                            <h3>John Doe</h3>
                                                            <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                        </div>
                                                    </div>
                                                    <div className="ed-opts">
                                                        <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                        <ul className="ed-options">
                                                            <li><a href="#" title="">Edit Post</a></li>
                                                            <li><a href="#" title="">Unsaved</a></li>
                                                            <li><a href="#" title="">Unbid</a></li>
                                                            <li><a href="#" title="">Close</a></li>
                                                            <li><a href="#" title="">Hide</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="epi-sec">
                                                    <ul className="descp">
                                                        <li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                        <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                    </ul>
                                                    <ul className="bk-links">
                                                        <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                        <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="job_descp">
                                                    <h3>Senior Wordpress Developer</h3>
                                                    <ul className="job-dt">
                                                        <li><a href="#" title="">Full Time</a></li>
                                                        <li><span>$30 / hr</span></li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                    <ul className="skill-tags">
                                                        <li><a href="#" title="">HTML</a></li>
                                                        <li><a href="#" title="">PHP</a></li>
                                                        <li><a href="#" title="">CSS</a></li>
                                                        <li><a href="#" title="">Javascript</a></li>
                                                        <li><a href="#" title="">Wordpress</a></li>
                                                    </ul>
                                                </div>
                                                <div className="job-status-bar">
                                                    <ul className="like-com">
                                                        <li>
                                                            <a href="#"><i className="la la-heart"></i> Like</a>
                                                            <img src="images/liked-img.png" alt="" />
                                                            <span>25</span>
                                                        </li>
                                                        <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                    </ul>
                                                    <a><i className="la la-eye"></i>Views 50</a>
                                                </div>
                                            </div>
                                            <div className="top-profiles">
                                                <div className="pf-hd">
                                                    <h3>Top Profiles</h3>
                                                    <i className="la la-ellipsis-v"></i>
                                                </div>
                                                <div className="profiles-slider">
                                                    <div className="user-profy">
                                                        <img src="http://via.placeholder.com/57x57" alt="" />
                                                        <h3>John Doe</h3>
                                                        <span>Graphic Designer</span>
                                                        <ul>
                                                            <li><a href="#" title="" className="followw">Follow</a></li>
                                                            <li><a href="#" title="" className="envlp"><img src="images/envelop.png" alt="" /></a></li>
                                                            <li><a href="#" title="" className="hire">hire</a></li>
                                                        </ul>
                                                        <a href="#" title="">View Profile</a>
                                                    </div>
                                                    <div className="user-profy">
                                                        <img src="http://via.placeholder.com/57x57" alt="" />
                                                        <h3>John Doe</h3>
                                                        <span>Graphic Designer</span>
                                                        <ul>
                                                            <li><a href="#" title="" className="followw">Follow</a></li>
                                                            <li><a href="#" title="" className="envlp"><img src="images/envelop.png" alt="" /></a></li>
                                                            <li><a href="#" title="" className="hire">hire</a></li>
                                                        </ul>
                                                        <a href="#" title="">View Profile</a>
                                                    </div>
                                                    <div className="user-profy">
                                                        <img src="http://via.placeholder.com/57x57" alt="" />
                                                        <h3>John Doe</h3>
                                                        <span>Graphic Designer</span>
                                                        <ul>
                                                            <li><a href="#" title="" className="followw">Follow</a></li>
                                                            <li><a href="#" title="" className="envlp"><img src="images/envelop.png" alt="" /></a></li>
                                                            <li><a href="#" title="" className="hire">hire</a></li>
                                                        </ul>
                                                        <a href="#" title="">View Profile</a>
                                                    </div>
                                                    <div className="user-profy">
                                                        <img src="http://via.placeholder.com/57x57" alt="" />
                                                        <h3>John Doe</h3>
                                                        <span>Graphic Designer</span>
                                                        <ul>
                                                            <li><a href="#" title="" className="followw">Follow</a></li>
                                                            <li><a href="#" title="" className="envlp"><img src="images/envelop.png" alt="" /></a></li>
                                                            <li><a href="#" title="" className="hire">hire</a></li>
                                                        </ul>
                                                        <a href="#" title="">View Profile</a>
                                                    </div>
                                                    <div className="user-profy">
                                                        <img src="http://via.placeholder.com/57x57" alt="" />
                                                        <h3>John Doe</h3>
                                                        <span>Graphic Designer</span>
                                                        <ul>
                                                            <li><a href="#" title="" className="followw">Follow</a></li>
                                                            <li><a href="#" title="" className="envlp"><img src="images/envelop.png" alt="" /></a></li>
                                                            <li><a href="#" title="" className="hire">hire</a></li>
                                                        </ul>
                                                        <a href="#" title="">View Profile</a>
                                                    </div>
                                                    <div className="user-profy">
                                                        <img src="http://via.placeholder.com/57x57" alt="" />
                                                        <h3>John Doe</h3>
                                                        <span>Graphic Designer</span>
                                                        <ul>
                                                            <li><a href="#" title="" className="followw">Follow</a></li>
                                                            <li><a href="#" title="" className="envlp"><img src="images/envelop.png" alt="" /></a></li>
                                                            <li><a href="#" title="" className="hire">hire</a></li>
                                                        </ul>
                                                        <a href="#" title="">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-bar">
                                                <div className="post_topbar">
                                                    <div className="usy-dt">
                                                        <img src="http://via.placeholder.com/50x50" alt="" />
                                                        <div className="usy-name">
                                                            <h3>John Doe</h3>
                                                            <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                        </div>
                                                    </div>
                                                    <div className="ed-opts">
                                                        <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                        <ul className="ed-options">
                                                            <li><a href="#" title="">Edit Post</a></li>
                                                            <li><a href="#" title="">Unsaved</a></li>
                                                            <li><a href="#" title="">Unbid</a></li>
                                                            <li><a href="#" title="">Close</a></li>
                                                            <li><a href="#" title="">Hide</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="epi-sec">
                                                    <ul className="descp">
                                                        <li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                        <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                    </ul>
                                                    <ul className="bk-links">
                                                        <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                        <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                        <li><a href="#" title="" className="bid_now">Bid Now</a></li>
                                                    </ul>
                                                </div>
                                                <div className="job_descp">
                                                    <h3>Senior Wordpress Developer</h3>
                                                    <ul className="job-dt">
                                                        <li><a href="#" title="">Full Time</a></li>
                                                        <li><span>$30 / hr</span></li>
                                                    </ul>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                    <ul className="skill-tags">
                                                        <li><a href="#" title="">HTML</a></li>
                                                        <li><a href="#" title="">PHP</a></li>
                                                        <li><a href="#" title="">CSS</a></li>
                                                        <li><a href="#" title="">Javascript</a></li>
                                                        <li><a href="#" title="">Wordpress</a></li>
                                                    </ul>
                                                </div>
                                                <div className="job-status-bar">
                                                    <ul className="like-com">
                                                        <li>
                                                            <a href="#"><i className="la la-heart"></i> Like</a>
                                                            <img src="images/liked-img.png" alt="" />
                                                            <span>25</span>
                                                        </li>
                                                        <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                    </ul>
                                                    <a><i className="la la-eye"></i>Views 50</a>
                                                </div>
                                            </div>
                                            <div className="posty">
                                                <div className="post-bar no-margin">
                                                    <div className="post_topbar">
                                                        <div className="usy-dt">
                                                            <img src="http://via.placeholder.com/50x50" alt="" />
                                                            <div className="usy-name">
                                                                <h3>John Doe</h3>
                                                                <span><img src="images/clock.png" alt="" />3 min ago</span>
                                                            </div>
                                                        </div>
                                                        <div className="ed-opts">
                                                            <a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                                            <ul className="ed-options">
                                                                <li><a href="#" title="">Edit Post</a></li>
                                                                <li><a href="#" title="">Unsaved</a></li>
                                                                <li><a href="#" title="">Unbid</a></li>
                                                                <li><a href="#" title="">Close</a></li>
                                                                <li><a href="#" title="">Hide</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="epi-sec">
                                                        <ul className="descp">
                                                            <li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                                            <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                                                        </ul>
                                                        <ul className="bk-links">
                                                            <li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
                                                            <li><a href="#" title=""><i className="la la-envelope"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="job_descp">
                                                        <h3>Senior Wordpress Developer</h3>
                                                        <ul className="job-dt">
                                                            <li><a href="#" title="">Full Time</a></li>
                                                            <li><span>$30 / hr</span></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
                                                        <ul className="skill-tags">
                                                            <li><a href="#" title="">HTML</a></li>
                                                            <li><a href="#" title="">PHP</a></li>
                                                            <li><a href="#" title="">CSS</a></li>
                                                            <li><a href="#" title="">Javascript</a></li>
                                                            <li><a href="#" title="">Wordpress</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="job-status-bar">
                                                        <ul className="like-com">
                                                            <li>
                                                                <a href="#"><i className="la la-heart"></i> Like</a>
                                                                <img src="images/liked-img.png" alt="" />
                                                                <span>25</span>
                                                            </li>
                                                            <li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
                                                        </ul>
                                                        <a><i className="la la-eye"></i>Views 50</a>
                                                    </div>
                                                </div>
                                                <div className="comment-section">
                                                    <div className="plus-ic">
                                                        <i className="la la-plus"></i>
                                                    </div>
                                                    <div className="comment-sec">
                                                        <ul>
                                                            <li>
                                                                <div className="comment-list">
                                                                    <div className="bg-img">
                                                                        <img src="http://via.placeholder.com/40x40" alt="" />
                                                                    </div>
                                                                    <div className="comment">
                                                                        <h3>John Doe</h3>
                                                                        <span><img src="images/clock.png" alt="" /> 3 min ago</span>
                                                                        <p>Lorem ipsum dolor sit amet, </p>
                                                                        <a href="#" title="" className="active"><i className="fa fa-reply-all"></i>Reply</a>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li>
                                                                        <div className="comment-list">
                                                                            <div className="bg-img">
                                                                                <img src="http://via.placeholder.com/40x40" alt="" />
                                                                            </div>
                                                                            <div className="comment">
                                                                                <h3>John Doe</h3>
                                                                                <span><img src="images/clock.png" alt="" /> 3 min ago</span>
                                                                                <p>Hi John </p>
                                                                                <a href="#" title=""><i className="fa fa-reply-all"></i>Reply</a>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <div className="comment-list">
                                                                    <div className="bg-img">
                                                                        <img src="http://via.placeholder.com/40x40" alt="" />
                                                                    </div>
                                                                    <div className="comment">
                                                                        <h3>John Doe</h3>
                                                                        <span><img src="images/clock.png" alt="" /> 3 min ago</span>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.</p>
                                                                        <a href="#" title=""><i className="fa fa-reply-all"></i>Reply</a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="post-comment">
                                                        <div className="cm_img">
                                                            <img src="http://via.placeholder.com/40x40" alt="" />
                                                        </div>
                                                        <div className="comment_box">
                                                            <form>
                                                                <input type="text" placeholder="Post a comment" />
                                                                <button type="submit">Send</button>
                                                            </form>
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
                                    </div>
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        )
    }
}

export default Home;