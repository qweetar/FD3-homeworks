import React from "react";
import PropTypes from "prop-types";

class RainbowFrame extends React.Component {
    static propTypes = {
        colors: PropTypes.array.isRequired,
    }

    itemFunc = () => {
        var tempDiv;
        var tempChild;
        for (var i = 0; i < this.props.colors.length; i++) {
            if (i == 0) {
                tempChild = <p align="center">{this.props.children}</p>;
            } else {  
                tempChild = tempDiv;
            }
            tempDiv = <div key={i} style={{border: "solid 3px " + this.props.colors[i], padding: "10px"}}>
            {tempChild}
        </div>;
        } 
        return tempDiv;
    }
    
    render() {
        return (
                this.itemFunc()
        )
    }
}

export default RainbowFrame;