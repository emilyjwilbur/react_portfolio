import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import animationImg from "../assets/images/ball.png";

const AnimationItemStyles = styled.div `
.animationItem_img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
        height; 100%;
    }
}
.animationItem_info{
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius:12px;
}
.animationItem_title {
    font-size: 2.2rem;
    font-family: 'arial';
}
.animationItem_desc {
    font-size: 1.6rem;
    font-family: 'arial';
    margin-top: 1rem;
}
a {
    font-size: 1.6rem;
   text-decoration: underline;
   font-family: 'arial';

}

@media only screen and (max-width: 768px) {
    .animationItem_img{
        height:150px;
    }
}

`;

export default function AnimationItem({
    img= animationImg,
    title= 'Animation Name',
    desc= 'lorem ipson description here',
    link= 'link here',
}) {
    return(
        <AnimationItemStyles>
           <Link to="/animations" className="animationItem_img">
               <img src={img} alt="animation img" />
           </Link>
           <div className="animationItem_info">
               <Link to="#">
                   <h3 className="animationItem_title">{title}</h3>
               </Link>
               <p className="animationItem_desc">{desc}</p>
               <a href={link} target='_blank'>View Live</a>
           </div>
        </AnimationItemStyles>
    )
}