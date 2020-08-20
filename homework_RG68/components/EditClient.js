import React from "react";
import PropTypes from "prop-types";

import {mobileEvents} from './events';

class EditClient extends React.Component {
    
    static propTypes = {
        id: PropTypes.number.isRequired,
        familyname: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
    }

    state = {
        id: null,
        key: null,
        familyname: null,
        name: null,
        surname: null,
        balance: null,
        status: null,
        isFormValid: null,
        familynameFieldMsg: null,
        isFamilynameFormValid: null,
        isCardChanged: false,
    }

    newNameRef = null;
    newSurnameRef = null;
    newFamilynameRef = null;
    newBalanceRef = null;

    setNewNameRef = (ref) => {
        this.newNameRef = ref;
    }

    setNewSurnameRef = (ref) => {
        this.newSurnameRef = ref;
    }

    setNewFamilynameRef = (ref) => {
        this.newFamilynameRef = ref;
    }

    setNewBalanceRef = (ref) => {
        this.newBalanceRef = ref;
    }

    isFormValid() {

    }

    saveChanges = (EO) => {
        if (this.newFamilynameRef.value != "" &&
            this.newNameRef.value != "" &&
            this.newSurnameRef.value != "" &&
            this.newBalanceRef.value != "") {
            this.setState({isFormValid: true});
            mobileEvents.emit("ENewUpdateClient", this.props.id, this.newFamilynameRef.value, this.newNameRef.value, this.newSurnameRef.value, this.newBalanceRef.value);
        } else {
            this.setState({isFormValid: false});
        }
    }

    cancelChages = () => {
        mobileEvents.emit("ENewClientCancel");
    }

    render() {
            return(
                <div className="ml-3">
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Фамилия"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" defaultValue={this.props.familyname} ref={this.setNewFamilynameRef}/>
                            <span className="badge badge-danger">{this.state.familynameFieldMsg}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Имя"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" defaultValue={this.state.isCardChanged ? this.state.name : this.props.name} ref={this.setNewNameRef}></input>
                            <span className="badge badge-danger">{this.state.descriptionFieldValMsg}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Отчество"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" defaultValue={this.state.isCardChanged ? this.state.surname : this.props.surname} ref={this.setNewSurnameRef}></input>
                            <span className="badge badge-danger">{this.state.imageUrlFieldValMsg}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Баланс BYN"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" defaultValue={this.state.isCardChanged ? this.state.balance : this.props.balance} ref={this.setNewBalanceRef}/>
                            <span className="badge badge-danger">{this.state.countFieldValMsg}</span>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={this.saveChanges} >{"Обновить"}</button>
                    <button className="btn btn-danger ml-3" onClick={this.cancelChages} >{"Отмена"}</button>
                </div> 
            );
        
    }
}

export default EditClient;