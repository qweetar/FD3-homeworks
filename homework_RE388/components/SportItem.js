import React from "react";
import PropTypes from "prop-types";

class SportItem extends React.Component {

    itemClassStyle = (code) => {
        if (this.props.code == code) {
            return "table-success";
        }
    }

    choseItem = () => {
        if (this.props.editMode != "add" && this.props.editMode != "inProgres" ) {
            this.props.cbchangeSelectedRow(this.props.code);
            this.props.cbeditItem(null); 
        }
    }

    deleteItem = () => {
        var confirmDel = confirm("Вы действительно хотите удалить?");
        if (confirmDel) {
            this.props.cbremoveItem(this.props.code);
        }
    }

    editItem = () => {
        if (this.props.editMode != "add" && this.props.editMode != "inProgres" ) {
            this.choseItem();
            this.props.cbeditItem(this.props.code);
        }
    }

    render() {

        return (
            <tr className={this.itemClassStyle(this.props.selectedRow)} id={this.props.code} key={this.props.code}>
                <th scope="row" onClick={this.choseItem}>{this.props.code}</th>
                <td className="card-title" onClick={this.choseItem}>{this.props.name}</td>
                <td className="card-text" onClick={this.choseItem}>{this.props.description}</td>
                <td className="card-text" onClick={this.choseItem}>{this.props.price + "$"}</td>
                <td className="card-text text-muted" onClick={this.choseItem}>{this.props.count}</td>
                <td >
                    <button className="btn btn-outline-danger ml-3 mb-1" onClick={this.deleteItem} disabled={this.props.editMode != null}>{"Удалить"}</button>
                    <button className="btn btn-outline-primary ml-3 mb-1" onClick={this.editItem} disabled={this.props.editMode == "add"}>{"Изменить"}</button>
                </td>
            </tr>
        );
    } 

}

export default SportItem;