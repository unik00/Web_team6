import React, { Component } from 'react'

class FormUpdateBasicInformation extends Component {
    render() {
        let { toggleEditForm } = this.props
        return (
            <div>
                <div class="overview-box open" id="overview-box">
                    <div class="overview-edit">
                        <h3>Contact</h3>
                        <span>5000 character left</span>
                        <form>
                            <textarea></textarea>
                            <button class="save">Save</button>
                            <button onClick={toggleEditForm} class="cancel">Cancel</button>
                        </form>
                        <div onClick={toggleEditForm} class="close-box"><i class="la la-close"></i></div>
                    </div>
                </div>
                <div className="overlay-background-edit"></div>
            </div>
        )
    }
}
export default FormUpdateBasicInformation