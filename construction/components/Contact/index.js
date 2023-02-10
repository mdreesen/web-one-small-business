import styles from '../../styles/Contact.module.css';
// import emailjs from 'emailjs-com';

// importing email.js
// import{ init } from 'emailjs-com';
// init("user_5PifaWCGrPQuL7ghKo7R5");

// import './ContactUs.css';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        // emailjs.sendForm('service_u2qbro4', 'template_14mdvws', e.target, 'user_5PifaWCGrPQuL7ghKo7R5')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
    }

    return (
        <div className={styles["contact-section"]}>
                <form className={styles["contactForm"]} onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <div>
                        <label>Name</label><br />
                        <input type="text" name="user_name" />
                    </div>
                    <div>
                        <label>Email</label><br />
                        <input type="email" name="user_email" />
                    </div>
                    <div>
                        <label>Message</label><br />
                        <textarea name="message" />
                    </div>
                    <input className={styles["submit-btn"]} type="submit" value="Send" />
                </form>
        </div>
    );
}