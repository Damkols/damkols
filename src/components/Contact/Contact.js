import { useState } from "react";
import './Contact.scss';
import emailjs from 'emailjs-com'
import { useHistory } from "react-router";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qr7gy39', 'template_ho71noj', e.target, 'user_6UW6gN6T48MSjUwzuH8c2')
        .then((result) => {
            console.log(result.text);
            }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
        history.push("/");
    }

    return (
        <div className="contact">
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Your Name</label>
                    <input type="text"
                    value={name}
                    name="name"
                    required
                    onChange={(e) => {setName(e.target.value)}}
                    />
                </div>

                <div className="input">
                    <label>Your Email</label>
                    <input type="text" 
                    value={email}
                    name="email"
                    required
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>

                <div className="message">
                    <label>Your Message</label>
                    <textarea
                    required
                    value={message}
                    name="message"
                    onChange={(e) => {setMessage(e.target.value)}}
                    ></textarea>
                </div>

                <div className="input">
                    <input type="submit" name="Submit" className="submit" />
                </div>
                
            </form>
        </div>
    );
}
 
export default Contact;