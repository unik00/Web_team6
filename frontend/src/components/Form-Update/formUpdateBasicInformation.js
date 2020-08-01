import React, { Component } from 'react'

class FormUpdateBasicInformation extends Component {
    render() {
        let { toggleEditForm } = this.props
        return (
            <div>
                <div className="overview-box open" style={{ backgroundColor: '#00000000' }} id="bs-info-bx-form">
                    <div className="overview-edit">
                        <h3>Overview</h3>
                        <span>5000 character left</span>
                        <form>
                            <textarea></textarea>
                            <button className="save">Save</button>
                            <button onClick={toggleEditForm} className="cancel">Cancel</button>
                        </form>
                        <div onClick={toggleEditForm} style={{ cursor: 'pointer' }} className="close-box"><i className="la la-close"></i></div>
                    </div>
                </div>
                <div className="overlay-background-edit"></div>
            </div>
        )
    }
}
export default FormUpdateBasicInformation