import React from "react";
import styled from "styled-components";
import HeroImg from '../assets/images/headshot.png';
import Button from "./Button";
import PText from "./PText";
import SocialMediaArrow from "../assets/images/arrow.png";


const HeroStyles = styled.div `
.hero{
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative
}
.hero_heading {
    font-size: 2rem;
    margin-bottom: -3rem;
    position: relative;
    font-family: arial;
    span {
        display:inline-block;
        width: 100%;
        font-family:arial;
    }
    .hero_name {
        font-size: 4rem;
        font-family: "Arial";
        color: white;
        
    }
}
.hero_img {
    max-width: 500px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
}
.hero_info{
    margin-top: -5rem
}
.hero_social,
.hero_scrollDown  {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: absolute;
    bottom: 20px;
    width:50px;
}
.hero_social {
    left: 50px;
}
.hero_scrollDown {
    right: 50px;
}
.hero_social_indicator,
.hero_scrollDown {
    width: 50px;
    p {
        font-size: 1.5rem;
        font-family: arial;
        transform: translateY(-70px) rotate(90deg);
        letter-spacing: .6rem;
        text-transform: uppercase;
    }
    img {
        max-height: 45px;
        width: 16px;
        margin: 0 auto;
        object-fit: contain;
    }
}
.hero_scrollDown {
    img {
        max-height: 70px;
    }
}

.hero_social_text {
    ul {
        li {
            margin-bottom: 1rem;
            
        }
        a {
            display: inline-block;
            font-size: 13px;
            font-family: arial;
            transform: rotate(-90deg);
            letter-spacing: 3px;
            margin-bottom: 4rem;
        }
    }
}

@media only screen and (max-width: 768px) {
    .hero {
        min-height: 50px;
    }
    .hero_heading {
        font-size: 1.5rem;
        margin-bottom: -3rem;
        .hero_name {
            font-size: 4.5rem;
        }
    }
    .hero_img {
        height: 300px;
        width:200px
    }
    .hero_info {
        margin-top:2rem;
    }
    .hero_social {
        left: 0px;
        bottom: -15%;
        width: 20px;
        .hero_social_indicator {
            width: 20px;
            p {
                font-size:1.2rem;
              
            }
            img{
                max-height: 27px
            }
        }
        .hero_social_text {
            ul {
                
                li {
                    left:0
                    
                    a {
                        font-size: 1.5rem;
                        margin-left: 1.3rem;
                        margin-bottom: 1rem;
                    }
                    
                }
            }
        }
    }
}
.hero_scrollDown {
    right:0;
    width: 20px;
    gap: 1rem;
    p {
        font-size: 1.3rem
    }
}

`;

export default function HeroSection() {
    return (
        <HeroStyles>
            <div className="hero">
            <div className="container">
                <h1 className="hero_heading">
                    <span>Hello, my name is </span>
                    <span className="hero_name">Emily Wilbur</span>
                </h1>
                <div className="hero_img">
                    <img src={HeroImg} alt=""/>
                </div>
                <div className="hero_info">
                    <PText>A Full-Stack Web Developer living in Atlanta. I'm currently open for work and would love to hear from you! </PText>
                  
                    <Button btnLink='/projects' btnText='see my work' />
                </div>
                    <div className='hero_social'>
                        <div className='hero_social_indicator'>
                            <p>Follow</p>
                            
                         
                            <img src={SocialMediaArrow} alt="social media arrow"/>
                        </div>
                        <div className="hero_social_text">
                            <ul>
                                <li>
                             
                                    <a href="https://www.linkedin.com/in/emilyjwilbur/" target="__blank" rel="noreferrer">LI</a>
                                    
                                 
                                </li>
                                
            

                                <li>
                                    <a href="https://github.com/emilyjwilbur" target="__blank" rel="noreferrer">GH</a>
                                    
                                </li>

                            </ul>
                        </div>
                        </div>
                        <div className="hero_scrollDown">
                            <p>Scroll</p>
                            <img src={SocialMediaArrow} alt="" />
                        </div>
                    
            </div>
            </div>
        </HeroStyles>
    );

}

