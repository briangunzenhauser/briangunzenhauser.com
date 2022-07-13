import formStyles from './Form.module.css'
import buttonStyles from '../styles/Button.module.css'

export default function Form() {
    return (
        <form name="contact" action="/thanks" method="POST" data-netlify="true" className={formStyles.contactForm}>
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="yourname">Your Name</label>
            <input type="text" name="yourname" id="yourname" placeholder="Your name" />

            <label htmlFor="youremail">Your Email</label>
            <input type="email" name="youremail" id="youremail" placeholder="Your email" />

            <label htmlFor="yourmessage">Your Message</label>
            <textarea name="yourmessage" id="yourmessage" placeholder="Your message"></textarea>

            <button type="submit" className={buttonStyles.buttonLink}>Send it to me</button>
        </form>
    )
}