var SportShop = React.createClass({

    displayName: "SportShop",

    getDefaultProps: function() {
        return {shopName: "Спортмастер"}
    },

    render: function() {

        var ballsCode = [];
        for (var a = 0; a < this.props.balls.length; a++) {
            var ball = this.props.balls[a];
            var ballCode =
                React.DOM.div({className: "card mb-3"},
                    React.DOM.div({key: ball.code, className: "row no-gutters"},
                        React.DOM.div({className: "col-md-1"},
                            React.DOM.img({className: "card-img", src: ball.imageUrl}),
                        ),
                        React.DOM.div({className: "col-md-8"},
                            React.DOM.div({className: "card-body"},
                                React.DOM.h3({className: "card-title"}, ball.name),
                                React.DOM.p({className: "card-text"}, ball.description), 
                                React.DOM.p({className: "card-text text-muted"}, "Количество в наличие: " + ball.count),  
                            ))   
                    ));
                ballsCode.push(ballCode);
        }
        return React.DOM.div({className: "SportShop"},
            React.DOM.p({className: "h1"}, this.props.shopName),
            React.DOM.div({className: "Balls"}, ballsCode),
        );
    },

});
