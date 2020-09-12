import React from "react";
import PropTypes from "prop-types";

import {mobileEvents} from './events';

class AddClient extends React.PureComponent {

    static propTypes = {
    }

    state = {
        isFormValid: null,
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

    saveChanges = (EO) => {
        if (this.newFamilynameRef.value != "" &&
            this.newNameRef.value != "" &&
            this.newSurnameRef.value != "" &&
            this.newBalanceRef.value != "") {
            this.setState({isFormValid: true});
            mobileEvents.emit("ENewClientSaved", this.newFamilynameRef.value, this.newNameRef.value, this.newSurnameRef.value, this.newBalanceRef.value);
        } else {
            this.setState({isFormValid: false});
        }
    }

    cancelChages = () => {
        mobileEvents.emit("ENewClientCancel");
    }


    render() {
            var addAlert = <div className="alert alert-danger mr-10" role="alert">{"Для сохраниния пользователя необходимо заполнить все поля"}</div>
            return(
                <div className="ml-3">
                    {this.state.isFormValid == false && addAlert}
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Фамилия"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" ref={this.setNewFamilynameRef}/>
                            {/* <span className="badge badge-danger">{this.state.nameFieldValMsg}</span> */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Имя"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" ref={this.setNewNameRef}></input>
                            {/* <span className="badge badge-danger">{this.state.descriptionFieldValMsg}</span> */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Отчество"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" ref={this.setNewSurnameRef}></input>
                            {/* <span className="badge badge-danger">{this.state.imageUrlFieldValMsg}</span> */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Баланс BYN"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" ref={this.setNewBalanceRef}/>
                            {/* <span className="badge badge-danger">{this.state.priceFieldValMsg}</span> */}
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={this.saveChanges}>{"Сохранить"}</button>
                    <button className="btn btn-danger ml-3" onClick={this.cancelChages} >{"Отмена"}</button>
                </div> 
            );
    }
}

export default AddClient;