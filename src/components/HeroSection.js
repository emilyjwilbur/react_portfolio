import React from "react";
import styled from "styled-components";
import HeroImg from '../assets/images/headshot.png';
import Button from "./Button";
import PText from "./PText";
import SocialMediaArrow from "../assets/images/arrow.png";
import Animation from 'react-animation';



const HeroStyles = styled.div `




  
  .bg {
    animation:slide 4s ease-in-out alternate infinite;
    background-image: linear-gradient(-45deg, #292929 30%, #808090 50%) ;
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
    margin-top: 50px
  }
  
  .bg2 {
    animation-direction:alternate-reverse;
    animation-duration:8s;
  }
  
  .bg3 {
    animation-duration:8s;
  }
  
  .content {
    background-color:rgba(255,255,255,.8);
    border-radius:.25em;
    box-shadow:0 0 .25em rgba(0,0,0,.25);
    box-sizing:border-box;
    left:50%;
    padding:10vmin;
    position:fixed;
    text-align:center;
    top:50%;
    transform:translate(-50%, -50%);
  }
  
  
  
  @keyframes slide {
    0% {
      transform:translateX(-25%);
    }
    100% {
      transform:translateX(25%);
    }
  }













.hero{
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    
    
    
 

}
.hero_heading {
    font-size: 2rem;
    margin-bottom: -3rem;
    position: relative;
    font-family: arial;
    -webkit-animation: fadein 3s;
   
    span {
        display:inline-block;
        width: 100%;
        font-family:arial;
    }
    .hero_name {
        font-size: 4rem;
        font-family: "Arial";
        color: white;
        -webkit-animation: fadein 8s;
        
        
    }
}
.hero_img {
    max-width: 405px;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    transform:ease-in 5s;
    -webkit-animation: fadein 9s;
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 100%; }
}

.hero_info{
    margin-top: -5rem;
    transform:ease-in 5s;
    -webkit-animation: fadein 3s;
}

.hero_social,
.hero_scrollDown  {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: absolute;
    bottom: 10px;
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
            
            
        }
        a {
            display: inline-block;
            font-size: 13px;
            font-family: arial;
            transform: rotate(-90deg);
            letter-spacing: 3px;
            margin-bottom: 4rem;
            transition: color 2s ease;
           
            
        }
    }
}
.hero_social_text:hover {
    ul{
        li{
           
        }
        a{
            color:white;
            font-weight: bold;
            
            
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
        width:200px;
        
    }
   
    .hero_info {
        
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


.hero_scrollDown {
    right:0;
    width: 20px;
    gap: 1rem;
    p {
        font-size: 1.3rem
    }
}
}




`
;

export default function HeroSection() {
    return (

        
        
        <HeroStyles>
           

            <div className="hero">
            <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>

            
        
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

