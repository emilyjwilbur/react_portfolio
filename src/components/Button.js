import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
margin-top: 2rem;
.button {
    font-size: 2.2rem;
    background-color: ${(props) => 
        props.outline ? 'transparent' : 'var(--gray-1)'
    };
    padding: 0.6em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => 
        (props.outline ? 'var(--gray-1)' : 'black'
        )};
    font-family: arial;
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
    <ButtonStyle outline={outline}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
