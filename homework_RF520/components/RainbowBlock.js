import React from "react";
import PropTypes from "prop-types";

import ButtonsText from "./ButtonsText";
import {withRainbowFrame} from './withRainbowFrame';

class RainbowBlock extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        buttonOne: PropTypes.string.isRequired,
        buttonTwo: PropTypes.string.isRequired,
        colors: PropTypes.array.isRequired,
    }

    render() {
        let ButtonsTextWithRainbowFrame = withRainbowFrame(this.props.colors)(ButtonsText);
        
        return (
            <div>
                <ButtonsTextWithRainbowFrame 
                    text = {this.props.text}
                    buttonOne = {this.props.buttonOne}
                    buttonTwo = {this.props.buttonTwo}
                    cbshowHideText = {this.props.cbshowHideText}
                />
            </div>
        );   
    }
}

export default RainbowBlock;
