import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [validationError, setValidationError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    if (!formData.get('from_name') || !formData.get('from_email') || !formData.get('message')) {
      setValidationError('Please fill out all fields.');
      return;
    }

    emailjs.sendForm('service_0tuzabz', 'template_goylkq2', form.current, 'nRJS00Kphzc7W5_zV')
      .then((result) => {
          console.log(result.text);
          setIsMessageSent(true);
          setValidationError('');
          
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <center>
      <div id="contact">
        <h1 className='contact-title'>Get in Touch.</h1>
        {isMessageSent ? (
          <p className="success-message"><strong>Thank You!&nbsp;</strong>       Your Message sent successfully!</p>
        ) : (
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
           {validationError && <p className="validation-error">{validationError}</p>}
          <input type="text" className='name' placeholder='Your Name' name="from_name" />
          <input type="email" className='email' placeholder='Your Email' name="from_email" />
          <textarea className="message" name="message" rows="5" placeholder='Your Message' /><br></br>
          <button type="submit" value="send" className='submitBtn'>Send Message</button>
        </form>
        )}
      </div>
    </center>
  )
}

export default Contact