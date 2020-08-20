"use strict"

import React from "react";
import ReactDOM from "react-dom";

import MobileCompany from "./components/MobileCompany";

var clientsArr = require("./components/users.json").users;

var companyName = "Velcom";

// function setName1() {
//     companyName = "MTC";
// }

// function setName2(){
//     companyName = "Velcom";
// }

ReactDOM.render(
    // <div>
    // <button className="btn btn-danger ml-3 mt-3" type="button" onClick={setName1()}>{"МТС"}</button>
    // <button className="btn btn-warning ml-3 mt-3" type="button" onClick={setName2()}>{"Velcom"}</button>
    <MobileCompany 
        companyName={companyName}
        clients={clientsArr}
    />,
    // </div>,
    document.getElementById("container")
);