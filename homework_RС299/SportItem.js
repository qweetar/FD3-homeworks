var SportItem = React.createClass({

    choseItem: function() {
        var rows = document.getElementsByTagName("tr");
        for (var i = 0; i < rows.length; i++) {
            if (rows[i].className.includes("table-success")) {
                rows[i].className = "Balls";
            };
        };
        var changeRow = document.getElementById(this.props.code);
        changeRow.className = "Balls table-success";
    },

    deleteItem: function() {
        var delItem = document.getElementById(this.props.code);
        var confirmDel = confirm("Вы действительно хотите удалить?");
        if (confirmDel) {
            delItem.remove();
        }
    },


    render: function() {
        
        return React.DOM.tr({className: "Balls", id: this.props.code, key: this.props.code},
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