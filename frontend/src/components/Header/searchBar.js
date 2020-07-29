import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <form>
                    <input type="text" name="search" placeholder="Search..." />
                    <button type="submit"><i className="la la-search"></i></button>
                </form>
            </div>
        )
    }
}

export default SearchBar;