import React, { Component } from "react";
import ContactForm from "./ContactForm";

class ContactThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }
    render() {
        return (
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 justify-content-center align-items-center ">

                        <div className="col-lg-6 order-1 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Let's talk.</h2>
                                <p className="description">Send a message or type to
                                    <a href="mailto:pedro@peagace.com" > pedro@peagace.com</a> </p>
                            </div>
                        </div>

                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="form-wrapper">                             
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactThree;