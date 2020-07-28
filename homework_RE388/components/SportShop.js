import React from "react";
import propTypes, { func } from "prop-types";

import SportItem from "./SportItem";
import ItemCard from "./ItemCard";
import EditItemCard from "./EditItemCard";
import AddItemCard from "./AddItemCard";

class SportShop extends React.Component {

    static propTypes = {

    }

    state = {
        selectedItem: null,
        itemArray: this.props.balls,
        shopName: "Спортмастер",
        selectedItemCard: null,
        editedItemCard: null,
        addedItemCard: null,
        editMode: null,
    }

    changeSelectedRow = (code) => {
        var chosenCard;
        this.state.itemArray.forEach(function(item, i, arr) {
            if (item.code == code) {
                chosenCard = item;
            }
        });
        this.setState({selectedItemCard: chosenCard});
        this.setState({selectedItem: code});     
    }

    removeItem = (id) => {
        var tempArr = this.state.itemArray.filter(item => item.code != id);
        this.setState({itemArray: tempArr});
    }

    editItem = (id) => {
        if (id != null) {
            var chosenItem;
            this.state.itemArray.forEach(function(item, i, arr) {
                if (item.code == id) {
                    chosenItem = item;
                }
            });
            this.setState({editedItemCard: chosenItem});
            this.setState({editMode: "edit"});
        } else {
            this.setState({editedItemCard: null});
            this.setState({editMode: null});
        }
    }

    updateItem = (id, name, description, imageUrl, count, price) => {
        var tempArr = this.state.itemArray;
            console.log("edit method");
            tempArr.forEach(function(item, i, arr) {
                if (item.code == id) {
                    item.name = name;
                    item.description = description;
                    item.imageUrl = imageUrl;
                    item.count = count;
                    item.price = price;
                } 
            });
        this.setState({itemArray: tempArr});
    }

    addItem = (value) => {
        this.setState({selectedItemCard: null});
        if (value) {
            var newId = 0;
            this.state.itemArray.forEach(function(item, i, arr) {
            if (item.code > newId) {
                newId = item.code;
            }
            newId++;
            });
            var newObj = {};
            newObj.code = newId;
            this.setState({addedItemCard: newObj});
            this.setState({editMode: "add"});
        } else {
            this.setState({addedItemCard: null});
            this.setState({editMode: null});
        }
        
    }

    saveNewItem = (id, name, description, imageUrl, count, price) => {
        var tempArr = this.state.itemArray;
            var newItem = {};
            newItem.code = id;
            newItem.name = name;
            newItem.description = description;
            newItem.imageUrl = imageUrl;
            newItem.count = count;
            newItem.price = price;
            tempArr.push(newItem);
        this.setState({itemArray: tempArr});
    }

    changeEditMode = (mode) => {
        this.setState({editMode: mode});
        console.log("changeEditMode - " + this.state.editMode);
    }

    render() {
        
        var ballsCode = this.state.itemArray.map(v => 
            <SportItem 
                cbeditItem = {this.editItem}
                cbremoveItem = {this.removeItem}
                cbchangeSelectedRow = {this.changeSelectedRow} 
                selectedRow = {this.state.selectedItem}
                key = {v.code} 
                code = {v.code}
                name = {v.name} 
                description = {v.description} 
                price = {v.price} 
                count = {v.count}
                editMode = {this.state.editMode}
                cbchangeEditMode = {this.changeEditMode}
            />  
        );

        if (this.state.selectedItemCard != null ) { 
            var selectedItemCardTag = 
                <ItemCard
                    imageUrl = {this.state.selectedItemCard.imageUrl}
                    name = {this.state.selectedItemCard.name}
                    description = {this.state.selectedItemCard.description}
                    price = {Number(this.state.selectedItemCard.price)}
                />
            ; 
        }

        if (this.state.editedItemCard != null) {
            var editedItemCardTag = 
                <EditItemCard 
                    cbupdateItem = {this.updateItem}
                    cbeditItem = {this.editItem}
                    name = {this.state.editedItemCard.name}
                    description = {this.state.editedItemCard.description}
                    imageUrl = {this.state.editedItemCard.imageUrl}
                    price = {Number(this.state.editedItemCard.price)}
                    code = {Number(this.state.editedItemCard.code)}
                    count = {Number(this.state.editedItemCard.count)}
                    cbchangeEditMode = {this.changeEditMode}
                />
            ;
        }

        if (this.state.addedItemCard != null) {
            var addedItemCardTag = 
                <AddItemCard 
                    cbsaveNewItem = {this.saveNewItem}
                    cbaddItem = {this.addItem}
                    name = {this.state.addedItemCard.name}
                    description = {this.state.addedItemCard.description}
                    imageUrl = {this.state.addedItemCard.imageUrl}
                    price = {this.state.addedItemCard.price}
                    code = {this.state.addedItemCard.code}
                    count = {this.state.addedItemCard.count}
                    editMode = {this.state.editMode}
                />
            ;
        }

        return (
            <div>
                <div className="SportShop">
                    <p className="h1">{this.props.shopName}</p>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">{"№"}</th>
                                <th scope="col">{"Наименование товара"}</th>
                                <th scope="col">{"Модель"}</th>
                                <th scope="col">{"Цена"}</th>
                                <th scope="col">{"Колво на складе"}</th>
                                <th scope="col">{"Редактировать"}</th>
                            </tr>
                        </thead>
                        <tbody>{ballsCode}</tbody>
                    </table>
                </div>
                <div className="ml-3">
                    <button className="btn btn-success mb-3 ml-3" onClick={this.addItem} disabled={this.state.editMode != null}>{"Добавить новый мяч"}</button>
                    {this.state.selectedItemCard != null && this.state.editedItemCard == null && selectedItemCardTag}
                    {this.state.editedItemCard != null && editedItemCardTag}
                    {this.state.addedItemCard != null && addedItemCardTag}
                </div>
            </div>
        );  
    }

}

export default SportShop;