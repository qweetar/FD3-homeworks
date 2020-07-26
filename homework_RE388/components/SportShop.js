import React from "react";
import propTypes, { func } from "prop-types";

import SportItem from "./SportItem";
import ItemCard from "./ItemCard";

class SportShop extends React.Component {

    static propTypes = {

    }

    state = {
        selectedItem: null,
        itemArray: this.props.balls,
        shopName: "Спортмастер",
        selectedItemCard: null,
    }

    changeSelectedRow = (code) => {
        console.log("changeSelectedRow " + code);
        var chosenCard;
        this.state.itemArray.forEach(function(item, i, arr) {
            if (item.code == code) {
                console.log(item.imageUrl);
                chosenCard = item;
            }
        });
        this.setState({selectedItemCard: chosenCard});
        this.setState({selectedItem: code});     
    }

    removeItem = (id) => {
        console.log("remove from arra item # " + id);
        let tempArr = this.state.itemArray.filter(item => item.code != id);
        this.setState({itemArray: tempArr});
    }

    render() {
        var ballsCode = this.state.itemArray.map(v => 
            <SportItem 
                cbremoveItem = {this.removeItem}
                cbSelectRow = {this.changeSelectedRow} 
                selectedRow = {this.state.selectedItem}
                key = {v.code} 
                code = {v.code}
                name = {v.name} 
                description = {v.description} 
                price = {v.props} 
                count = {v.count}
            />  
        );
        if (this.state.selectedItemCard != null) { 
            var selectedItemCardTag = 
                <ItemCard
                    imageUrl = {this.state.selectedItemCard.imageUrl}
                    name = {this.state.selectedItemCard.name}
                    description = {this.state.selectedItemCard.description}
                    price = {this.state.selectedItemCard.price}
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
                                <th scope="col">{"Управление"}</th>
                            </tr>
                        </thead>
                        <tbody>{ballsCode}</tbody>
                    </table>
                </div>
                <div>
                    {this.state.selectedItemCard != null && selectedItemCardTag}
                </div>
            </div>
        );  
    }

}

export default SportShop;