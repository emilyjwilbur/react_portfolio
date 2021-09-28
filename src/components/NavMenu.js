import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const NavMenuStyles = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    font-size: 20px;
    background: var(--dark-bg);

ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;

    li {
        display: inline-block;
        border-radius: 8px;
        transition: 0.3s ease background-color;
        &:hover {
            background-color: var(--deep-black);
        }
    }
    a{
        display: inline-block;
        font-family: arial;
        padding: 1rem 2rem;
        font-size: 15px;
        color: #fffa;
        outline: none;
    }
}
`





export default function NavMenu() {
    return (
        <NavMenuStyles>
            <ul>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/about">About</NavLink>
                </li>
                <li>
                <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </NavMenuStyles>
    );
}