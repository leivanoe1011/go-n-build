
import { useState, React, useRef } from "react";


function ContactForm (){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const handleSubmit = event =>{
        event.preventDefault();
    }
    
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
            <form onSubmit={handleSubmit} ref={form}>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name"/>
                    </div>
                </div>
            
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
               
               
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm;