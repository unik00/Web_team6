import React, { Component } from 'react';
import FormUpdateDescription from '../../../Form-Update/formUpdateDescription'

class Description extends Component {
    constructor(props) {
        super(props);
        this.state={
            openEditForm : false
        }
    }

    toggleEditForm = () => {
        let { openEditForm } = this.state;
        this.setState({
            openEditForm : !openEditForm
        })
    }
    render() {
        let { description, regetData } = this.props
        let {openEditForm} = this.state
        return (
            <div className="user-profile-ov st2">
                <h3>
                    <div style={{ display: 'inline-block', cursor: 'pointer'  }} onClick={this.toggleEditForm}>Description </div>
                    <div style={{ display: 'inline-block', cursor: 'pointer'  }} onClick={this.toggleEditForm}><i className="fa fa-pencil"></i></div>
                </h3>
                <p>{description ? description : <i style={{ fontStyle: 'italic' }}>-  Add your description</i>}</p>
                {openEditForm?<FormUpdateDescription toggleEditForm={this.toggleEditForm}
                                                    regetData={regetData}
                                                    description={description}/>:''}
            </div>
        )
    }
}

export default Description