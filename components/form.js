import formStyles from './Form.module.css'
import buttonStyles from '../styles/Button.module.css'

export default function Form() {
    return (
        <form name="contact" method="POST" data-netlify="true" className={formStyles.contactForm}>
            <label for="yourname">Your Name</label>
            <input type="text" name="yourname" id="yourname" placeholder="Your name" />

            <label for="youremail">Your Email</label>
            <input type="email" name="youremail" id="youremail" placeholder="Your email" />

            <label for="yourmessage">Your Message</label>
            <textarea name="yourmessage" id="yourmessage" placeholder="Your message"></textarea>

            <button type="submit" className={buttonStyles.buttonLink}>Send it to me</button>
        </form>
    )
}