import React from "react";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImage from "../assets/images/about.jpg";
import styled from "styled-components";


const AboutSectionStyle = styled.div `
padding: 10rem 0;
.container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
}
.aboutSection_left,
.aboutSection_right {
    flex: 1;
    padding: 2rem;
    
}
.section-title {
    text-align: left;
}
.para {
    margin-top: 2rem;
    margin-left: 0;
}

.aboutSection_buttons {
    display: flex;
    align-items:center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
}
@media only screen and (max-width: 950px) {
    .aboutSection_left {
        flex:4;
    }
    .aboutSection_right {
        flex:3;
    }
}
@media only screen and (max-width: 768px) {
    .container {
        flex-direction: column;
        text-align: center;
    }
    .aboutSection_left,
    .aboutSection_right {
        width: 100%;
    }
    .aboutSection_right {
        margin-top: 3rem;
    }
    .section-title {
        text-align: center;
    }
    .para {
        margin: 0 auto;
        margin-top: 2rem;
    }
    .aboutSection_buttons {
        flex-direction: column;
        gap: 0;
        .button-wrapper,
        a {
            width: 100%;
            text-align: center;
        }
    }
}


`;

export default function AboutSection() {
    return (
        <AboutSectionStyle>
          <div className="container">
            <div className="aboutSection_left">
                <SectionTitle
                    subheading='A few things'
                    heading='About me'
                />
                <PText>
                I'm a freelance Web Developer passionate about developing web applications that are easy to use and appealing to the public. <br /> <br /> I believe quality design is rooted in both simplicity and elegance; therefore, I build and contribute to applications that are simple, yet effective, and put user interface first.
                </PText>
                <div className="aboutSection_buttons">
                    <Button btnLink='/projects' btnText="my work"></Button>
                    <Button btnLink='/about' btnText="read more" outline />
                </div>
            </div>
            <div className="aboutSection_right">
                <img src={AboutImage} alt="about image" />
            </div>
          </div>
        </AboutSectionStyle>
    )
}