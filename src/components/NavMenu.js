import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

const NavMenuStyles = styled.div`
  margin: 0px;
  
  display:flex;
  align-items: center;
  justify-content: center;
  
  

 ul{
   margin:5px;
   padding:0;
   display: flex;
   list-style-type:none
 }
ul li a  {
   display: block;
   font-family:arial;
   font-size: 14px;
   letter-spacing: 2px;
   width: 120px;
   height: 40px;
   line-height: 20px;
   text-align:center;
   position: relative;
   transition: all 0.5s;
   color: light gray;
 }
    

ul li span {
      position: absolute;
      width: 25%;
      height:50%;
      background-color:#262626;
      z-index: -1;
      left:0;
      top:0;
      transform: scaleY(0);
      transform-origin: top;
    }
  a:hover span{
      transform: scaleY(2);
      transition: all 0.5s;
    }
    a:hover{
      color:white;
    }

    li span:nth-child(2){
      left:25%;
      transition-delay:0.15s;
    }
     li span:nth-child(3){
      left:50%;
      transition-delay:0.3s;
    }
    li span:nth-child(4){
      left:75%;
      transition-delay:0.45s;
    }

    .active {
      color: #e4e6eb;
      
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
        pointer-events: none;
    }
  }
  .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    display:none;
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: #3a3b3c;
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);

      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          
        }
      }
      li a{
        display: block;
        margin-bottom: 1rem;
      }
      
    }
  }
`;

export default function NavMenu() {
  const [showNav, SetShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => SetShowNav(!showNav)}
        role="button"
        onKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink 
            to="/"
            exact
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Home
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
        </li>
        <li>
          
          <NavLink 
            to="/about"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            About
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
