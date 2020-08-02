import React from "react";
import PropTypes from "prop-types";

class ButtonsText extends React.Component {
    static propTypes = {
        buttonOne: PropTypes.string.isRequired,
        buttonTwo: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }

    wowBtn = () => {
        this.props.cbshowHideText("Wow!")
    } 

    oopsBtn = () => {
        this.props.cbshowHideText("Ooops!")
    } 
    
    render() {
        return (
        <div>
            <button className="btn btn-primary" onClick={this.wowBtn}>{this.props.buttonOne}</button>
            <span className="h5 ml-3 mr-3">{this.props.text}</span>
            <button className="btn btn-danger" onClick={this.oopsBtn}>{this.props.buttonTwo}</button>
        </div>
        )
    }
}

export default ButtonsText;