import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as API from '../../api';


class FormUpdateStudentLanguage extends Component {
    constructor(props) {
        super(props);
        let { account } = this.props
        
        this.state = {
            listLanguage: [],
            language_id : 1,
            level : 1,
            error:''
        }
    }

    componentDidMount(){
        this.getListLanguage();
    }

    getListLanguage(){
        let { account } = this.props;
        API.getListLanguage().then(
            res => { if (res.status == 200){
                    this.setState({
                        listLanguage : res.data.languages
                    })
                }
            }
        ).catch(err => {
            console.log(err);
        })
    }

    renderSelectLanguage = () => {
        let { listLanguage } = this.state;
        return listLanguage.map((language, index) => {
            return <option key={language.id} value={index}>{language.name}</option>
        });
    }

    onChangeLanguage = (e) => {
        let { listLanguage } = this.state;
        let value = e.target.value;
        this.setState({
            name_language: listLanguage[value].name,
            language_id: listLanguage[value].id
        })
        console.log(this.state.language_id)
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onEditLanguage = (e) => {
        e.preventDefault();

        let { language_id, level} = this.state;
        let { account,toggleEditForm, regetData } = this.props

        API.addStudentLanguage(account,{language_id,level})
            .then(res => {
                console.log(res)
                if(res.status == 200 && res.data.success){
                    alert('Edit successfully');
                    // console.log(res)
                    regetData()
                    toggleEditForm()
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        let { toggleEditForm } = this.props
        let { listLanguage, level, error} = this.state;
        return (
            <div>
                <div className="overview-box open" style={{ backgroundColor: '#00000000' }} id="bs-info-bx-form">
                    <div className="overview-edit">
                        <h3>Add language</h3>
                        <form>
                            <h4>Language:</h4>
                            <select onChange={this.onChangeLanguage} style={{ paddingLeft: 15 + 'px' }}>
                                {this.renderSelectLanguage()}
                            </select>
                            {/* <h4>Number of years' experience:</h4> */}
                            {/* <input type="number" name="level" value={level} onChange={this.inputOnchange} /> */}

                            <div style={{ color: 'red' }}>{error}</div>
                            <button onClick={this.onEditLanguage} className="save">Save</button>
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
export default connect(mapStateToProps,null)(FormUpdateStudentLanguage)