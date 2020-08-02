"use strict"

import React from "react";
import ReactDOM from "react-dom";

import RainbowBlock from "./components/RainbowBlock";
import ButtonsText from "./components/ButtonsText";

var colors = ["red", "orange", "yellow", "green", "#00BFFF", "blue", "purple"];

var buttonOneOuter = "Однажды";
var buttonTwoOuter = "пору";

var buttonOneInner = "Я из лесу";
var buttonTwoInner = "мороз";

var textOuter = "в сутденую зимнюю";
var textInner = "вышел, был сильный";

function showHideText (text) {
    alert(text);
}

ReactDOM.render(
    <div className="ml-3 mt-3">
        <ButtonsText 
            buttonOne = {buttonOneOuter}
            buttonTwo = {buttonTwoOuter}
            text = {textOuter}
            cbshowHideText = {showHideText}
        />
        <br/>
        <RainbowBlock
            colors = {colors}
            buttonOne = {buttonOneInner}
            buttonTwo = {buttonTwoInner}
            text = {textInner}
            cbshowHideText = {showHideText}
        />
    </div>,
    document.getElementById("container")
);