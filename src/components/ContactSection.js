import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import styled from "styled-components";
import SectionTitle from '../components/SectionTitle';
import ContactForm from "./ContactForm";
import ContactInfoItem from "./ContactInfoItem";


const ContactSectionStyles = styled.div `
padding: 10rem 0;
.contactSection_wrapper{
    display:flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
}
.contactSection_wrapper::after{
    position:absolute;
    content:'';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
}
.left{
    width: 100%;
    max-width: 500px;
}
.right{
    max-width: 500px;
    width: 100%;
}
@media only screen and (max-width: 768px) {
    .contactSection_wrapper{
        flex-direction: column;
    }
    .contactSection_wrapper::after{
        display: none;
    }
    .left,
    .right{
        max-width: 100%;
    }
    .right{
        padding: 4rem 2rem 2rem 2rem;
    }
}

`;

export default function ContactSection() {
    return(
        <ContactSectionStyles>
            <div className="container">
                <SectionTitle heading="Contact" subheading="get in touch" />
                <div className="contactSection_wrapper">
                    <div className="left">
                        <ContactInfoItem icon={<MdLocalPhone />} text="770.286.1039" />
                        <ContactInfoItem icon={<MdEmail />} text="ewilbur94@gmail.com" />
                        <ContactInfoItem text="Atlanta, GA" />
                    </div>
                    <div className="right">
                        <ContactForm />
                       
                    </div>
                </div>

            </div>
        </ContactSectionStyles>
    )
}