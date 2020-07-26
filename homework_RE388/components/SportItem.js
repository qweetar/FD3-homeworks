import React from "react";
import propTypes from "prop-types";

class SportItem extends React.Component {
    static propTypes = {

    };

    itemClassStyle = (code) => {
        console.log("itemClassStyle " + code);
        if (this.props.code == code) {
            return "table-success";
        }
    }

    choseItem = () => {
        this.props.cbSelectRow(this.props.code);
    }

    deleteItem = () => {
        var confirmDel = confirm("Вы действительно хотите удалить?");
        if (confirmDel) {
            this.props.cbremoveItem(this.props.code);
        }
    }

    render() {

        return (
            <tr className={this.itemClassStyle(this.props.selectedRow)} id={this.props.code} key={this.props.code}>
                <th scope="row" onClick={this.choseItem}>{this.props.code}</th>
                <td className="card-title" onClick={this.choseItem}>{this.props.name}</td>
                <td className="card-text" onClick={this.choseItem}>{this.props.description}</td>
                <td className="card-text" onClick={this.choseItem}>{this.props.price}</td>
                <td className="card-text text-muted" onClick={this.choseItem}>{this.props.count}</td>
                <td >
                    <button className="btn btn-outline-danger" onClick={this.deleteItem}>{"Delete"}</button>
                    <button className="btn btn-outline-primary ml-3">{"Edit"}</button>
                </td>
            </tr>
        );
    } 

}

export default SportItem;