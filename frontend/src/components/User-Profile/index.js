import React, { Component } from 'react'

import CoverImage from './coverImage';
import MainLeftSidebar from './Main-Left-Sidebar/index';
import MainWsSec from './Main-WS-Sec/index';
import MainRightSidebar from './Main-Right-Sidebar/index';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <CoverImage/>
                
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <MainLeftSidebar/>
                                    <MainWsSec/>
                                    <MainRightSidebar/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default UserProfile