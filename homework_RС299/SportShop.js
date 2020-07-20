var SportShop = React.createClass({

    getInitialState: function() {
        return {
            selectedItem: null,
            itemArray: this.props.balls,
        }
    },

    displayName: "SportShop",

    getDefaultProps: function() {
        return {shopName: "Спортмастер"}
    },

    changeSelectedRow: function(code) {
            console.log("changeSelectedRow " + code);
            this.setState({selectedItem: code});      
    },

    removeItem: function(id) {
        console.log("remove from arra item # " + id);
        var tempArr = [];
        this.state.itemArray.forEach((element) => {
            if (id != element.code) {
                tempArr.push(element);
            }
        });
        this.setState({itemArray: tempArr});
    },

    render: function() {
        var ballsCode = this.state.itemArray.map(v => 
            React.createElement(SportItem, {cbremoveItem: this.removeItem,cbSelectRow: this.changeSelectedRow, selectedRow: this.state.selectedItem, key: v.code, code: v.code, imageUrl: v.imageUrl,  name: v.name, description: v.description, price: v.props, count: v.count})
            );

        return React.DOM.div({className: "SportShop"},
            React.DOM.p({className: "h1"}, this.props.shopName),
            React.DOM.table({className: "table table-hover"}, 
                React.DOM.thead({className: "thead-dark"}, 
                    React.DOM.tr({},
                        React.DOM.th({scope: "col"}, "№"), 
                        React.DOM.th({scope: "col"}, "Картинка"),
                        React.DOM.th({scope: "col"}, "Наименование товара"),
                        React.DOM.th({scope: "col"}, "Модель"),
                        React.DOM.th({scope: "col"}, "Цена"),
                        React.DOM.th({scope: "col"}, "Кол-во на складе"),
                        React.DOM.th({scope: "col"}, "Управление"),
                        ),
                ),
                React.DOM.tbody({}, ballsCode),
            ),
        );
    },

});
