import React from "react";
import PText from "../components/PText";
import Button from "../components/Button";
import styled from "styled-components";
import HelloImage from "../assets/images/hello.png";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .img {
    max-width: 30%;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .about_subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    font-family: "arial";
    span {
      background-color: var(--deep-dark);
      font-family: "arial";
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about_heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    font-family: "arial";
  }
  .about_info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about_info_items{
    margin-top:10rem;
   
}
.about_info_item{
    margin-top:10rem;
}



`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <div className="img">
              <img src={HelloImage} alt="hello" />
            </div>
            <p className="about_subheading">
              My name is <span>Emily Wilbur</span>
            </p>
            <h2 className="about_heading">
              A freelance Web Developer & Designer
            </h2>
            <div className="about_info">
              <PText>
                I'm a Frontend Web Developer from Atlanta, GA, passionate
                about developing web applications that are easy to use and
                appealing to the public. <br /> <br />
                
              </PText>
            </div>
           
          </div>
          <div className="right"></div>
        </div>
        <div className="about_info_items">
            <div className="about_info_item">
                
                <AboutInfoItem 
                title="Education"
                items={[
                    'Kent State University | BS in Journalism & Mass Communication',
                    'Georgia Institute of Technology | Certificate in Full-Stack Web Development'
                ]}

                />
            </div>

            <div className="about_info_item"> 
                <AboutInfoItem 
                title="FrontEnd"
                items={[
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'jQuery',
                    'React',
                    'GSAP',
                    'PHP',
                    'LiquidJS'
                ]}

                />
            </div>

            <div className="about_info_item"> 
                <AboutInfoItem 
                title="BackEnd"
                items={[
                    'Node',
                    'Express',
                    'MongoDB',
                    'MySql',
                    'Firebase'
                ]}

                />
            </div>

            <div className="about_info_item"> 
                <AboutInfoItem 
                title="Design"
                items={[
                    'Figma',
                    'Adobe CC',
                    ''
                    
                ]}

                />
            </div>


            </div>

        </div>
    <ContactBanner />
    </AboutPageStyles>
  );
}
