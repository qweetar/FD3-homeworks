"use strict"

import React from "react";
import ReactDOM from "react-dom";

import ButtonsText from "./components/ButtonsText";

import {withRainbowFrame} from './components/withRainbowFrame';

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

let ButtonsTextWithRainbowFrame = withRainbowFrame(colors)(ButtonsText);

ReactDOM.render(
    <div className="ml-3 mt-3">
        <ButtonsText 
            buttonOne = {buttonOneOuter}
            buttonTwo = {buttonTwoOuter}
            text = {textOuter}
            cbshowHideText = {showHideText}
        />
        <br/>
        <ButtonsTextWithRainbowFrame 
            buttonOne = {buttonOneInner}
            buttonTwo = {buttonTwoInner}
            text = {textInner}
            cbshowHideText = {showHideText}
        />
    </div>,
    document.getElementById("container")
);