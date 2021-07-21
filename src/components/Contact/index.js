import React from 'react';


function ContactForm() {
    <section>
        <h1>Contact me</h1>
        <form id="contact-form">
            //name input
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name"/>
            </div>
            //email input
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email"/>
            </div>
            //message text area
            <div>
                <label htmlFor="message">Message:</label>
                <textarea rows="5" name="message"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
}

export default ContactForm;