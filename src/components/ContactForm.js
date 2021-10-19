import React from "react";
import { useState } from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com';

const Result = () => {
    return(
        <p>Your message has been successfully sent! I will contact you shortly.</p>
    )
}


const FormStyles = styled.form `
width:100%;
.form-group{
    width:100%;
    margin-bottom:2rem;
}
label{
    font-size: 1.8rem;
}
input,
textarea{
    width:100%;
    font-size:2rem;
    padding:1.2rem;
    color:var(--gray-1);
    background-color: var(--deep-dark);
    outline:none;
    border:none;
    border-radius:8px;
    margin-top:1rem;
}
textarea{
    min-height:250px;
    resize:vertical;
}
button[type="submit"]{
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline block;
    outline:none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
}
.row {
    font-size: 15px;
    margin-top: 2rem;
}
`;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [result, showResult] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wi7rwa3', "template_4f8f8zj", e.target, "user_vbmgv87plXhaZrOGi4JR3")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
        showResult(true);

      };
      

    //   hide result
    // setTimeout(() => {
    //     showResult(false);
    // }, 5000);

    return(
        <div>
            <FormStyles onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="name">First and Last Name
                        <input type="text" id="name" name="name" value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email
                        <input type="text" id="email" name="email" value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Phone Number
                        <input type="text" id="phone" name="phone" value={phone}
                        onChange={e => setPhone(e.target.value)}
                        />
                    </label>
                </div>

               

                <div className="form-group">
                    <label htmlFor="message">Your Message
                        <textarea type="message" id="message" name="message" value={message}
                        onChange={e => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <button type='submit' value="send">Send</button>
                <div className='row'>{result ? <Result/> : null}</div>
            </FormStyles>
        </div>
    )
};

