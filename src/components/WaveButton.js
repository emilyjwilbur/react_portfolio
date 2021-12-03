import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WaveButtonStyle = styled.div`
a {
  text-decoration: none;
  font-family: arial;
  padding: 15px 30px;
  color:#00aeff;
  font-size:18px;
  letter-spacing: 3px;
  border: 2px solid #00aeff;
  text-transform: uppercase;
  position: relative;
}
.wave{
  position:absolute;
  width:100%;
  height: 100%;
  left:0;
  top:100%;
  background-color:red;
}



@media only screen and (max-width: 768px) {
    .button {
        font-size; 1.8rem
        font-family: arial;
    }
}


`;

export default function Button({ btnLink = 'test', btnText = 'test', outline = false }) {
  return (


    <WaveButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
      
      <div className='wave'></div>

      
    </WaveButtonStyle>
    
   
  );
}
