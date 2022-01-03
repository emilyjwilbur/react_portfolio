import react from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyles = styled.div`
padding-top: 10rem;
background-color: var(--deep-dark);
.container {
    display: flex;
    gap: 3rem;
}
.footer_col1{
    flex:2;
}
.footer_col2,
.footer_col3,
.footer_col4{
    flex: 1;
}
.footer_col1_title{
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'helvetica';
}
.copyright{
    background-color: var(--dark-bg);
    padding: 1rem 0;
    margin-top: 5rem;
    text-align:left;
    .para{
        margin-left:0;
    }
}
    @media only screen and (max-width: 768px) {
        .container{
            flex-direction: column;
            gap: 0rem;
            & > div{
                margin-top:3rem;
            }
        }
        .footer_col1 .para {
            max-width: 100%;
        }

        .copyright {
            .container {
                div{
                    margin-top:0rem;
                }
            }
        }
    
}
`;

export default function Footer() {
    return(
        <FooterStyles>
            <div className="container">
                <div className="footer_col1">
                    <h1 className="footer_col1_title">Emily Wilbur</h1>
                    <PText>I'm a freelance web designer and developer from Atlanta, Georgia. I make websites that have unique designs and good performance rates.</PText>
                    </div>
                    <div className="footer_col2">
                        <FooterCol heading="Important Links" 
                        links={
                           [ 
                            {
                                title:"Home",
                                path:"/",
                                type:'Link'
                            },
                            {
                                title:"About",
                                path:"/about",
                                type:'Link'
                            },
                            {
                                title:"Projects",
                                path:"/projects",
                                type:'Link'
                            },
                            {
                                title:"Contact",
                                path:"/contact",
                                type:'Link'
                            }
                        ]
                        }
                        />
                    </div>
                    <div className="footer_col3">
                        <FooterCol 
                            heading="Contact Info"
                            links={
                                [
                                    {
                                        title:"770.286.1039",
                                        path:'tel:7702861039',
                                    },
                                    {
                                        title:"ewilbur94@gmail.com",
                                        path:'mailto:ewilbur94@gmail.com',
                                    },
                                    {
                                        title:"Atlanta, GA",
                                        path:'http://google.com/maps',
                                    }
                                ]
                            }
                        />
                    </div>
                    <div className="footer_col4">
                        <FooterCol 
                         heading="Social Links"
                         links={
                             [
                                 {
                                     title:"LinkedIn",
                                     path:'https://www.linkedin.com/in/emilyjwilbur/',
                                 },
                                 {
                                     title:"GitHub",
                                     path:'https://github.com/emilyjwilbur',
                                 }
                             ]
                         }/>
                    </div>
                </div>
           
           <div className="copyright">
               <div className="container">
                   <PText>
                     © 2021 - Emily Wilbur | Made with ♥ in ATL. </PText>

               </div>

           </div>

        </FooterStyles>
    )
}