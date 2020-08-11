import React, { Component } from 'react'
import * as API from '../../api';
import { connect } from 'react-redux';

class FormUpdateStudentHobby extends Component {
    constructor(props) {
        super(props);
        let { account } = this.props
        
        this.state = {
            listHobby: [],
            error:''
        }
    }

    componentDidMount(){
        this.getListHobby();
    }

    getListHobby = () => {
        let { account } = this.props;
        API.getListHobby(account).then(
            res => { if (res.status == 200){
                    this.setState({
                        listHobby : res.data.hobbies
                    })
                }
                console.log(res);
            }
        ).catch(err => {
            console.log(err);
        })
    }

    renderSelectHobby = () => {
        let { listHobby } = this.state;
        return listHobby.map((hobby, index) => {
            return <option key={hobby.id} value={index}>{hobby.name}</option>
        });
    }

    onChangeHobby = (e) => {
        let { listHobby } = this.state;
        console.log("e target")
        console.log(e.target)
        let value = e.target.value;
        this.setState({
            name_hobby: listHobby[value].name,
            hobby_id: listHobby[value].id
        })
        console.log("on change hobby")
        console.log(this.state.hobby_id)
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onEditStudentHobby = (e) => {
        e.preventDefault();
        //alert('Edit successfully');
        let { hobby_id } = this.state;
        let { account,toggleEditForm, regetData } = this.props
        regetData(account);
        toggleEditForm();

        API.addStudentHobby(account,{hobby_id})
            .then(res => {
                if(res.status == 200 && res.success){
                    alert('Edit successfully');
                    regetData(account);
                    toggleEditForm();
                    console.log(res)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        let { toggleEditForm } = this.props
        let { listHobby, error} = this.state;
        console.log(listHobby);
        return (
            <div>
                <div className="overview-box open" style={{ backgroundColor: '#00000000' }} id="bs-info-bx-form">
                    <div className="overview-edit">
                        <h3>Edit hobbies</h3>
                        <form>
                            <h4>Hobby:</h4>
                            <select onChange={this.onChangeHobby} style={{ paddingLeft: 15 + 'px' }}>
                                {this.renderSelectHobby()}
                            </select>
                            <div style={{ color: 'red' }}>{error}</div>
                            <button onClick={this.onEditStudentHobby} className="save">Save</button>
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

const mapStateToProps = state => {
    return{
        account: state.account
    }
}
export default connect(mapStateToProps,null)(FormUpdateStudentHobby)