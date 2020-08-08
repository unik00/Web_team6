import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import MessageBox from '../Message/Message-Box/index';

class Messages extends Component {
    render() {
        return (
            <li>
                <a href="#" title="" className="not-box-open">
                    <span><img src={require("../../assets/images/icon6.png")} alt="" /></span>
					Messages
				</a>
                <MessageBox/>
            </li>
        )
    }
}

export default withRouter(Messages)