import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectImg from "../assets/images/noods.png";

const ProjectItemStyles = styled.div `
.projectItem_img {
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
.projectItem_info{
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius:12px;
}
.projectItem_title {
    font-size: 2.2rem;
    font-family: 'arial';
}
.projectItem_desc {
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
    .projectItem_img{
        height:150px;
    }
}

`;

export default function ProjectItem({
    img= projectImg,
    title= 'Project Name',
    desc= 'lorem ipson description here',
    link= 'link here',
}) {
    return(
        <ProjectItemStyles>
           <Link to="/projects" className="projectItem_img">
               <img src={img} alt="project img" />
           </Link>
           <div className="projectItem_info">
               <Link to="#">
                   <h3 className="projectItem_title">{title}</h3>
               </Link>
               <p className="projectItem_desc">{desc}</p>
               <a href={link} target='_blank'>View Live</a>
           </div>
        </ProjectItemStyles>
    )
}