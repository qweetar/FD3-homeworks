var SportItem = React.createClass({

    itemClassStyle: function(code) {
        console.log("itemClassStyle " + code);
        if (this.props.code == code) {
            return "table-success";
        }
    },

    choseItem: function() {
        this.props.cbSelectRow(this.props.code);
    },

    deleteItem: function() {
        var delItem = ReactDOM.findDOMNode(this);
        var confirmDel = confirm("Вы действительно хотите удалить?");
        if (confirmDel) {
            delItem.remove();
        }
    },


    render: function() {
        
        return React.DOM.tr({className: this.itemClassStyle(this.props.selectedRow), id: this.props.code, key: this.props.code, ref: this.props.code},
            React.DOM.th({scope: "row", onClick: this.choseItem}, this.props.code),
            React.DOM.td({onClick: this.choseItem},
                React.DOM.div({className: "col-md-3"}, 
                    React.DOM.img({className: "img-thumbnail", src: this.props.imageUrl})
                ),
            ),
            React.DOM.td({className: "card-title", onClick: this.choseItem}, this.props.name),
            React.DOM.td({className: "card-text", onClick: this.choseItem}, this.props.description),
            React.DOM.td({className: "card-text", onClick: this.choseItem}, this.props.price),
            React.DOM.td({className: "card-text text-muted", onClick: this.choseItem}, this.props.count),
            React.DOM.td({}, 
                React.DOM.button({className: "btn-info btn", onClick: this.deleteItem}, "Delete"),
            ),
        );    
    },
})