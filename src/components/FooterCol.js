import react from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ColStyle = styled.div`
   .heading{
       font-size: 2.4rem;
       margin-bottom: 2rem;
       font-family: 'arial';
   } 
   li{
       margin-bottom: 1rem;
       font-family: 'arial';
   }
   a{
       font-size:1.6rem;
       font-family: 'arial';
   }
`

export default function FooterCol({
    heading = 'col heading',
    links = [
        {
            type:"Links",
            title:"Home",
            path:"/home"
        },
        {
            type:"Links",
            title:"About",
            path:"/about"
        },
        {
            type:"Links",
            title:"Projects",
            path:"/projects",
        }
    ]
}) {
    return(
        <ColStyle>
            <h1 className="heading">{heading}</h1>
            <ul>
                {
                    links.map((item,index) => (
                        <li key={index}>
                            {item.type === 'Link' ? (
                                <Link to={item.path}>{item.title}</Link>
                            ): [
                                <a href={item.path} target=
                                '_blank' rel="noreferrer">{item.title}</a>
                            ]}
                        </li>
                    ))
                }
            </ul>
        </ColStyle>
    )
}

// Link from react router dom
// anchor tag