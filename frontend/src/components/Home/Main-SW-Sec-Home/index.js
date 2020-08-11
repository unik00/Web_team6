import React, { Component } from 'react';
import FormAddJob from '../../Form-Update/formAddJob';
import FormAddPost from '../../Form-Update/formAddPost';
import PostBar from '../../User-Profile/Main-WS-Sec/Post';

class MainSwSecHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenAddJobForm: false,
            isOpenAddPostForm: false,
            typePost: 'Normal'
        }
    }

    toggleAddJobForm = () => {
        let { isOpenAddJobForm } = this.state;
        this.setState({
            isOpenAddJobForm: !isOpenAddJobForm
        })
    }
    toggleAddPostForm = (typePost) => {
        let { isOpenAddPostForm } = this.state;
        this.setState({
            isOpenAddPostForm: !isOpenAddPostForm,
            typePost
        })
    }

    render() {
        let { isOpenAddJobForm, isOpenAddPostForm, typePost } = this.state
        let { userInformation } = this.props
        let avatar = userInformation.avatar
        return (

            <div className="col-lg-6 col-md-8 no-pd">
                {isOpenAddJobForm ? <FormAddJob toggleAddJobForm={this.toggleAddJobForm} /> : ''}
                {isOpenAddPostForm ? <FormAddPost toggleAddPostForm={this.toggleAddPostForm} type={typePost} /> : ''}
                <div className="main-ws-sec">
                    <div className="post-topbar">
                        <div className="user-picy">
                            <img src={avatar ? `http://localhost:8000/${avatar.slice(24,avatar.length)}`
                            : "http://via.placeholder.com/100x100"} alt=""
                            style={{width:100+'px', height: 100 + 'px'}}/>
                        </div>
                        <div className="post-st-khanh">
                            <ul>
                                <li><button onClick={this.toggleAddJobForm}>Add a Job</button></li>
                                <li><button onClick={() => this.toggleAddPostForm('Normal')}>Post a post</button></li>
                                <li><button onClick={() => this.toggleAddPostForm('Job')}>Post a job</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="posts-section">
                       
                                <PostBar/>
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
        )
    }
}

export default MainSwSecHome;