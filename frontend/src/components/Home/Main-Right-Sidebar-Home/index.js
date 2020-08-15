import React, { Component } from 'react';
import ListJob from './listJob';
import TopViewer from '../../User-Profile/Main-Right-Sidebar/topViewer';

class MainRightSidebar extends Component {
    render() {
        return (
            <div className="col-lg-3 pd-right-none no-pd">
                <div className="right-sidebar">
                    <ListJob/>
                    <TopViewer/>
                </div>
            </div>
        )
    }
}

export default MainRightSidebar;