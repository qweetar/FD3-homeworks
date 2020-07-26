"use strict"

import React from "react";
import ReactDOM from "react-dom";

import SportShop from "./components/SportShop";

var ballArr = require("./components/items.json").items;

var shopSection = "Мир мячей";

ReactDOM.render(
    <SportShop 
        shopName={shopSection}
        balls={ballArr}
    />,
    document.getElementById("container")
);