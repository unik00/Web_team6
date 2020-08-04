import React, { Component } from 'react';

class CoverImage extends Component {
    render() {
        return (
            <section className="cover-sec">
                <img src="http://via.placeholder.com/1600x400" alt="" />
                <a href="#" title=""><i className="fa fa-camera"></i> Change Image</a>
            </section>
        )
    }
}

export default CoverImage;