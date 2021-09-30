import React from "react";
import HeroImg from '../assets/images/headshot.jpg';
import PText from "./PText";

export default function HeroSection() {
    return (
        <div>
            <div className="container">
                <h1 className="hero_heading">
                    <span>Hello, my name is </span>
                    <span>Emily Wilbur</span>
                </h1>
                <div className="hero_img">
                    <img src={HeroImg} alt=""/>
                </div>
                <div className="hero_info">
                    <PText>I'm a Full Stack Web Developer passionate about developing web applications that are easy to use and appealing to the public. I believe quality design is rooted in both simplicity and elegance; therefore, I build and contribute to applications that are simple, yet effective, and put user interface first. I earned a certificate in Full Stack Web Development from the Georgia Institute of Technology to add technical expertise alongside my Bachelor of Science in Journalism and Mass Communication from Kent State University.</PText>
                </div>

            </div>
        </div>
    );
}