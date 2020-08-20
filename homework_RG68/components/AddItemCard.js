import React from "react";
import PropTypes from "prop-types";

class AddItemCard extends React.Component {

    state = {
        isCardChanged: false,
        nameField: this.props.name,
        descriptionField: this.props.description,
        imageUrlField: this.props.imageUrl,
        priceField: this.props.price,
        countField: this.props.count,
        codeField: this.props.code,
        nameFieldValMsg: null,
        descriptionFieldValMsg: null,
        imageUrlFieldValMsg: null,
        priceFieldValMsg: null,
        countFieldValMsg: null,
        isFormValid: null,
        isNameFormValid: false,
        isDescriptionFormValid: false,
        isImageUrlFormValid: false,
        isCountFormValid: false,
        isPriceFormValid: false,
        
    }

    formFull = () => {
        if (this.state.isNameFormValid &&
            this.state.isDescriptionFormValid &&
            this.state.isImageUrlFormValid &&
            this.state.isCountFormValid &&
            this.state.isPriceFormValid) {
                this.setState({isFormValid: true});
                return true;
            } else {
                this.setState({isFormValid: false});
                return false;
            }
    }
    
    nameFieldChange = () => {
        if (event.target.value != "") { // Value can't be null
            this.setState({nameField: event.target.value});
            this.setState({nameFieldValMsg: null})
            this.setState({isNameFormValid: true});
        } else {
            this.setState({isNameFormValid: false});
            this.setState({nameFieldValMsg: "Значение не может быть пустым"});
        }
        this.setState({isCardChanged: true});
    }

    descriptionFieldChange = () => {
        if (event.target.value != "") { // Value can't be null
            this.setState({descriptionField: event.target.value});
            this.setState({descriptionFieldValMsg: null})
            this.setState({isDescriptionFormValid: true});
        } else {
            this.setState({isDescriptionFormValid: false});
            this.setState({descriptionFieldValMsg: "Значение не может быть пустым"});
        }
        this.setState({isCardChanged: true});
    }

    imageUrlFieldChange = () => {
        if (event.target.value != "") { // Value can't be null
            this.setState({imageUrlField: event.target.value});
            this.setState({imageUrlFieldValMsg: null})
            this.setState({isImageUrlFormValid: true});
        } else {
            this.setState({isImageUrlFormValid: false});
            this.setState({imageUrlFieldValMsg: "Значение не может быть пустым"});
        }
        this.setState({isCardChanged: true});
    }

    countFieldChange = () => {
        if (event.target.value == "") { // Value can't be null
            this.setState({isCountFormValid: false});
            this.setState({countFieldValMsg: "Значение не может быть пустым"});
        } else if (!Number(event.target.value)) { // Value can be only number
            this.setState({isCountFormValid: false});
            this.setState({countFieldValMsg: "Значение может быть только числовым"});
        } else {
            this.setState({countField: event.target.value});
            this.setState({countFieldValMsg: null})
            this.setState({isCountFormValid: true});
        }
        this.setState({isCardChanged: true});
    }

    priceFieldChange = () => {
        if (event.target.value == "") { // Value can't be null
            this.setState({isPriceFormValid: false});
            this.setState({priceFieldValMsg: "Значение не может быть пустым"});
        } else if (!Number(event.target.value)) { // Value can be only number
            this.setState({isPriceFormValid: false});
            this.setState({priceFieldValMsg: "Значение может быть только числовым"});
        } else {
            this.setState({priceField: event.target.value});
            this.setState({priceFieldValMsg: null});
            this.setState({isPriceFormValid: true});
        }
        this.setState({isCardChanged: true});
    }

    saveChanges = () => {
        if (this.formFull()) {
            this.props.cbsaveNewItem(
                this.props.code, 
                this.state.nameField, 
                this.state.descriptionField,
                this.state.imageUrlField,
                this.state.countField,
                this.state.priceField,
                );
            this.props.cbaddItem(null); 
        }      
    }

    cancelChages = () => {
        this.props.cbaddItem(null);
    }

    render() {
            var addAlert = <div className="alert alert-warning ml-3" role="alert">{"Для сохраниния элемента необходимо заполнить все поля"}</div>
            return(
                <div>
                    {this.state.isFormValid == false && addAlert}
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label col-form-label-lg" >{"№ " + this.props.code}</label>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Наименование товара"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" onChange={this.nameFieldChange}/>
                            <span className="badge badge-danger">{this.state.nameFieldValMsg}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Модель"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" onChange={this.descriptionFieldChange}></input>
                            <span className="badge badge-danger">{this.state.descriptionFieldValMsg}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Url картинки"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" onChange={this.imageUrlFieldChange}></input>
                            <span className="badge badge-danger">{this.state.imageUrlFieldValMsg}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Колво на складе"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" onChange={this.countFieldChange}/>
                            <span className="badge badge-danger">{this.state.countFieldValMsg}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Цена ($)"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" onChange={this.priceFieldChange}/>
                            <span className="badge badge-danger">{this.state.priceFieldValMsg}</span>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={this.saveChanges}>{"Сохранить"}</button>
                    <button className="btn btn-danger ml-3" onClick={this.cancelChages} >{"Отмена"}</button>
                </div> 
            );
    }
}

export default AddItemCard;