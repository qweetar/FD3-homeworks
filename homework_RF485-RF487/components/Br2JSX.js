import React from "react";
import PropTypes from "prop-types";

import "./Br2JSX.css";

class Br2JSX extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    }

    parseTag = () => {
        var tempArr = this.props.text;
        var words = tempArr.split(/(<.+?>)/);
        var tegsArrs = [];
        for (var i = 0; i < words.length; i++) {
            if (words[i].match("(<.+?>)")) {
                tegsArrs.push(React.createElement(words[i].replace(/\<|\>|\/\>|\s\/\>/g, ""), {key: i}));
            } else {
                tegsArrs.push(words[i]);
            }
        }

        return tegsArrs;
    }



    render() {
        
        return (
        <div className="Br2JSX">
            {this.parseTag()}
        </div>
        )
    }
}

export default Br2JSX;