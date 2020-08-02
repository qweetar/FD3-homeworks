import React from "react";

function withRainbowFrame(colors) {
    return function (Component) {
        function itemFunc(params) {
            var tempDiv;
            var tempChild;
            for (var i = 0; i < colors.length; i++) {
                if (i == 0) {
                    tempChild = <Component {...params} />;
                } else {  
                    tempChild = tempDiv;
                }
                tempDiv = <div key={i} style={{border: "solid 3px " + colors[i], padding: "10px"}}>
                {tempChild}
            </div>;
            } 
            return tempDiv;
        }
        
        return props => (
            itemFunc(props)
            );
    };
}

export {withRainbowFrame};
    