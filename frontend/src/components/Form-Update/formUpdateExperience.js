import React, { Component } from 'react'
import * as API from '../../api';
import { connect } from 'react-redux';

class FormUpdateExperience extends Component {
    constructor(props) {
        super(props);
        let { account } = this.props
        
        this.state = {
            listCompany: [],
            company_id : 1,
            name_company : '',
            start : '',
            end : '',
            description : '', 
            error:''
        }
    }

    componentDidMount(){
        this.getListCompany();
    }

    getListCompany = () => {
        let { account } = this.props;
        API.getListCompany(account).then(
            res => { if (res.status == 200){
                    this.setState({
                        listCompany : res.data.Companies
                    })
                }
                // console.log(res);
            }
        ).catch(err => {
            console.log(err);
        })
    }

    renderSelectCompany = () => {
        let { listCompany } = this.state;
        return listCompany.map((company, index) => {
            return <option key={company.id} value={index}>{company.name}</option>
        });
    }

    onChangeCompany = (e) => {
        let { listCompany } = this.state;
        let value = e.target.value;
        this.setState({
            name_company: listCompany[value].name,
            company_id: listCompany[value].id
        })
    }

    inputOnchange = (e) => {
        let target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    onAddCompany = (e) => {
        e.preventDefault();

        let { company_id, start, end, description } = this.state;
        let { account,toggleEditForm, regetData } = this.props

        API.addExperience(account,{company_id, start, end, description})
            .then(res => {
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
        let { company_id, start, end, description, error} = this.state;
        return (
            <div>
                <div className="overview-box open" style={{ backgroundColor: '#00000000' }} id="bs-info-bx-form">
                    <div className="overview-edit">
                        <h3>Add experience</h3>
                        <form>
                            <h4>Company:</h4>
                            <select onChange={this.onChangeCompany} style={{ paddingLeft: 15 + 'px' }}>
                                {this.renderSelectCompany()}
                            </select>

                            <h4>Start date:</h4>
                            <input type="date" name="start" placeholder="" value={start} onChange={this.inputOnchange} />

                            <h4>End date:</h4>
                            <input type="date" name="end" placeholder="" value={end} onChange={this.inputOnchange} />

                            <h4>Description:</h4>
                            <input type="text" name="description" placeholder="" value={description} onChange={this.inputOnchange} />

                            <div style={{ color: 'red' }}>{error}</div>
                            <button onClick={this.onAddCompany} className="save">Save</button>
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
export default connect(mapStateToProps,null)(FormUpdateExperience)