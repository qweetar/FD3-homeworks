import React from "react";
import PropTypes from "prop-types";

class EditItemCard extends React.Component {
    
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
    }

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
        isNameFormValid: true,
        isDescriptionFormValid: true,
        isImageUrlFormValid: true,
        isCountFormValid: true,
        isPriceFormValid: true,
    }

    isFormValid = () => {
        if (this.state.isNameFormValid &&
            this.state.isDescriptionFormValid &&
            this.state.isImageUrlFormValid &&
            this.state.isCountFormValid &&
            this.state.isPriceFormValid &&
            this.state.isCardChanged) {
                return true;
            } else {
                return false;
            }
    }

    nameFieldChange = () => {
        if (event.target.value != "") { // Value can't be null
            this.setState({nameFieldValMsg: null})
            this.setState({isNameFormValid: true});
        } else {
            this.setState({isNameFormValid: false});
            this.setState({nameFieldValMsg: "Значение не может быть пустым"});
        }
        this.setState({nameField: event.target.value});
        this.setState({isCardChanged: true});
        this.props.cbchangeEditMode("inProgres");
    }

    descriptionFieldChange = () => {
        if (event.target.value != "") { // Value can't be null
            this.setState({descriptionFieldValMsg: null})
            this.setState({isDescriptionFormValid: true});
        } else {
            this.setState({isDescriptionFormValid: false});
            this.setState({descriptionFieldValMsg: "Значение не может быть пустым"});
        }
        this.setState({descriptionField: event.target.value});
        this.setState({isCardChanged: true});
        this.props.cbchangeEditMode("inProgres");
    }

    imageUrlFieldChange = () => {
        if (event.target.value != "") { // Value can't be null
            this.setState({imageUrlFieldValMsg: null})
            this.setState({isImageUrlFormValid: true});
        } else {
            this.setState({isImageUrlFormValid: false});
            this.setState({imageUrlFieldValMsg: "Значение не может быть пустым"});
        }
        this.setState({imageUrlField: event.target.value});
        this.setState({isCardChanged: true});
        this.props.cbchangeEditMode("inProgres");
    }

    countFieldChange = () => {
        if (event.target.value == "") { // Value can't be null
            this.setState({isCountFormValid: false});
            this.setState({countFieldValMsg: "Значение не может быть пустым"});
        } else if (!Number(event.target.value)) { // Value can be only number
            this.setState({isCountFormValid: false});
            this.setState({countFieldValMsg: "Значение может быть только числовым"});
        } else {
            this.setState({countFieldValMsg: null})
            this.setState({isCountFormValid: true});
        }
        this.setState({countField: event.target.value});
        this.setState({isCardChanged: true});
        this.props.cbchangeEditMode("inProgres");
    }

    priceFieldChange = () => {
        if (event.target.value == "") { // Value can't be null
            this.setState({isPriceFormValid: false});
            this.setState({priceFieldValMsg: "Значение не может быть пустым"});
        } else if (!Number(event.target.value)) { // Value can be only number
            this.setState({isPriceFormValid: false});
            this.setState({priceFieldValMsg: "Значение может быть только числовым"});
        } else {
            this.setState({priceFieldValMsg: null});
            this.setState({isPriceFormValid: true});
        }
        this.setState({priceField: event.target.value});
        this.setState({isCardChanged: true});
        this.props.cbchangeEditMode("inProgres");
    }

    saveChanges = () => {
        this.props.cbupdateItem(
            this.props.code, 
            this.state.nameField, 
            this.state.descriptionField,
            this.state.imageUrlField,
            this.state.countField,
            this.state.priceField,
            );
        this.props.cbeditItem(null);    
    }

    cancelChages = () => {
        this.setState({nameField: this.props.name});
        this.setState({descriptionField: this.props.description});
        this.setState({imageUrlField: this.props.imageUrl});
        this.setState({countField: this.props.count});
        this.setState({priceField: this.props.price});
        this.setState({isCardChanged: false});
        this.props.cbeditItem(null);
    }

    render() {
            return(
                <div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label col-form-label-lg" >{"№ " + this.props.code}</label>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Наименование товара"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" value={this.state.isCardChanged ? this.state.nameField : this.props.name} onChange={this.nameFieldChange}/>
                            <span className="badge badge-danger">{this.state.nameFieldValMsg}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Модель"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" value={this.state.isCardChanged ? this.state.descriptionField : this.props.description} onChange={this.descriptionFieldChange}></input>
                            <span className="badge badge-danger">{this.state.descriptionFieldValMsg}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Url картинки"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" value={this.state.isCardChanged ? this.state.imageUrlField : this.props.imageUrl} onChange={this.imageUrlFieldChange}></input>
                            <span className="badge badge-danger">{this.state.imageUrlFieldValMsg}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Колво на складе"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" value={this.state.isCardChanged ? this.state.countField : this.props.count} onChange={this.countFieldChange}/>
                            <span className="badge badge-danger">{this.state.countFieldValMsg}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" >{"Цена ($)"}</label>
                        <div className="col-md-6 mb-3">
                            <input className="form-control" value={this.state.isCardChanged ? this.state.priceField : this.props.price} onChange={this.priceFieldChange}/>
                            <span className="badge badge-danger">{this.state.priceFieldValMsg}</span>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={this.saveChanges} disabled={!this.isFormValid()}>{"Обновить"}</button>
                    <button className="btn btn-danger ml-3" onClick={this.cancelChages} >{"Отмена"}</button>
                </div> 
            );
        
    }
}

export default EditItemCard;