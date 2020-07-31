"use strict"

import React from "react";
import ReactDOM from "react-dom";

import RainbowFrame from "./components/RainbowFrame";
import Br2JSX from "./components/Br2JSX";

var colors = ["red", "orange", "yellow", "green", "#00BFFF", "blue", "purple"];

var text = "первый<br>второй<br/>третий<br />последний";


ReactDOM.render(
    <div>
        <br/>
        <p>RF485. Домашнее задание — проект RainbowFrame</p>
    <RainbowFrame colors = {colors}>
        Hello!
    </RainbowFrame>
        <br/>
        <p>RF487. Домашнее задание — проект br2jsx</p>
    <Br2JSX text = {text}>
        Chao!
    </Br2JSX>
    </div>,
    document.getElementById("container")
);