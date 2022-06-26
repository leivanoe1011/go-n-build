
import { useState,React } from "react";

function ContactForm (){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = event => {

        event.preventDefault()

        console.log('in send email');
        alert("Thank you for your message");

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }


    return(
        <>
                    
            <section className="mb-4">

                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" 
                                            className="form-control"
                                            onChange={event => setName(event.target.value)}
                                            value={name}
                                         />
                                        <label htmlFor="name" className="">Your name</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" 
                                            className="form-control"
                                            onChange={event => setEmail(event.target.value)}
                                            value={email}
                                         />
                                        <label htmlFor="email" className="">Your email</label>
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" 
                                            className="form-control"
                                            onChange={event => setSubject(event.target.value)}
                                            value={subject}
                                         />
                                        <label htmlFor="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" 
                                            rows="2" 
                                            onChange={event => setMessage(event.target.value)}
                                            value={message}
                                            className="form-control md-textarea"
                                        ></textarea>
                                        <label htmlFor="message">Your message</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div className="row">
                            <div className="col-sm-12 col-md-3 col-lg-3 mt-2 text-center text-md-left">
                                <button type="button" className="btn btn-primary" onClick={sendMessage}>Send</button>
                            </div>
                        </div>
                      

                        <div className="status"></div>

                    </div>

                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>10 W Bay State Street #1274, Alhambra CA 91802, USA</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 1 909 766 0445</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>partner@goandbuild.org</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>

        </>
    )
}

export default ContactForm;