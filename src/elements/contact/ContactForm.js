import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Message sent.</p>
    )
}
function ContactForm({ props }) {
    const [result, showresult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_qtyzq2p',
                'template_wtsp6hh',
                e.target,
                'lUZ5VPyy1iV29mMBZ'
            )
            .then((result) => {
                console.log(result.text);
            },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form action="" onSubmit={sendEmail}>
            <div className="rn-form-group">             
                    <input
                        type="text"
                        name="name"        
                        placeholder="name"
                        required
                        style={{ fontFamily: 'poppins', color: 'white' }}
                    />              
            </div>            

            <div className="rn-form-group">             
            <input
                                            type="text"
                                            name="email"                                         
                                            placeholder="email"
                                            style={{ fontFamily: 'poppins', color:'white' }}
                                        />            
            </div>

            <div className="rn-form-group">             
            <textarea
                                            type="text"                                            
                                            name="message"                                           
                                            placeholder="message"
                                            style={{ fontFamily: 'poppins', color:'white', paddingTop:'10px' }}
                                        />  
            </div>



            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-outline" type="submit" value="submit" name="submit" id="mc-embedded-subscribe" >SEND</button>
            </div>

            <div className="rn-form-group">
                {result ? <Result /> : null}
            </div>
        </form>
    )
}
export default ContactForm;
