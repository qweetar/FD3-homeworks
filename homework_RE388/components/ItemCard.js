import React from "react";
import PropTypes from "prop-types";

class ItemCard extends React.Component {
    static propTypes = {
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    };

    render() {
        return(
            <div className="card mb-3" style={{maxWidth: 440 + "px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.imageUrl} className="card-img-top"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.description}</p>
                            <p className="card-text">{"Цена товара: " + this.props.price + "$"}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemCard;