import React from 'react'
import { useState } from 'react';
import './css/home.css'

// for buttons
import styled from "styled-components";

const theme = {
  red: {
    default: "#b22222",
    hover: "#dc143c"
  },
  charcoal: {
    default: "#333333",
    hover: "#36454f"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 5px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "red"
};

function Home() {
  const [loginbuttonPopup, setloginButtonPopup] = useState(false);
  const [createbuttonPopup, setcreateButtonPopup] = useState(false);
  const [inPortal,setInPortal] = useState(false);

  return (

      <div className="appmain">
    

     <div className='main-body'>
          <h1> HOME </h1>
       </div>

   
    </div>

    

    
  );
}


export default Home;
