
import React from "react";

import ContactForm from "./ContactForm";

import "./contact.css"

function Contact () {

    return(
        <>
            <section>
                <div className="container contact-screen">
                    <ContactForm/>
                </div>
            </section>
        </>
    );
}

export default Contact;
