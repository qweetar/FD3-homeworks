import React from "react";
import PropTypes from "prop-types";

import {mobileEvents} from './events';

class EditClient extends React.PureComponent {
    
    static propTypes = {
        user: PropTypes.object.isRequired,
    }

    state = {
        isFormValid: null,
    }

    newFamilynameRef = null;
    newBalanceRef = null;

    
    setNewFamilynameRef = (ref) => {
        this.newFamilynameRef = ref;
    }

    setNewBalanceRef = (ref) => {
        this.newBalanceRef = ref;
    }

    saveChanges = (EO) => {
        if (this.newFamilynameRef.value != "" &&
            this.newBalanceRef.value != "") {
            this.setState({isFormValid: true});
            var newUser = {...this.props.user, familyname: this.newFamilynameRef.value, balance: this.newBalanceRef.value}
            mobileEvents.emit("ENewUpdateClient", newUser);
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
                            <input className="form-control" defaultValue={this.props.user.familyname} ref={this.setNewFamilynameRef}/>
                            {/* <span className="badge badge-danger">{this.state.familynameFieldMsg}</span> */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Баланс BYN"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" defaultValue={this.props.user.balance} ref={this.setNewBalanceRef}/>
                            {/* <span className="badge badge-danger">{this.state.countFieldValMsg}</span> */}
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={this.saveChanges} >{"Обновить"}</button>
                    <button className="btn btn-danger ml-3" onClick={this.cancelChages} >{"Отмена"}</button>
                </div> 
            );
        
    }
}

export default EditClient;