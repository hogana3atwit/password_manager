import { useState, userEffect } from "react";
import "./css/loginPage.css";

function Login() {
  return (
    <>
      <div className="loginPageContainer">
        <div className="lpc_Left"></div>

        <div className="lpc_middle">
          
          <div id="topSectionForm" className="topSectionForm">
            <div className="formTitle">
              <h1> LOGIN </h1>
            </div>
            <div className="formTitle">
              <h1> JOIN </h1>
            </div>

          </div>
         
          <div className="mainSectionForm">
            <p> This is where there the form will go</p>
          </div>

        </div>

        <div className="lpc_right"></div>
      </div>
    </>
  );
}

export default Login;
