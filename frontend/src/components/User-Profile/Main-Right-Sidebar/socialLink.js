import React, { Component } from 'react';

class SocialLink extends Component {
    render() {
        return (
            <ul className="social_links">
                <li><a href="#" title=""><i className="la la-globe"></i> www.example.com</a></li>
                <li><a href="#" title=""><i className="fa fa-facebook-square"></i> Http://www.facebook.com/john...</a></li>
                <li><a href="#" title=""><i className="fa fa-twitter"></i> Http://www.Twitter.com/john...</a></li>
                <li><a href="#" title=""><i className="fa fa-google-plus-square"></i> Http://www.googleplus.com/john...</a></li>
                <li><a href="#" title=""><i className="fa fa-behance-square"></i> Http://www.behance.com/john...</a></li>
                <li><a href="#" title=""><i className="fa fa-pinterest"></i> Http://www.pinterest.com/john...</a></li>
                <li><a href="#" title=""><i className="fa fa-instagram"></i> Http://www.instagram.com/john...</a></li>
                <li><a href="#" title=""><i className="fa fa-youtube"></i> Http://www.youtube.com/john...</a></li>
            </ul>
        )
    }
}

export default SocialLink