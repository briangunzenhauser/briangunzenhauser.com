import { useRouter } from 'next/router'
import formStyles from './Form.module.css'
import buttonStyles from '../styles/Button.module.css'

export default function Form() {
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        await fetch('/__forms.html', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        })
        router.push('/thanks')
    }

    return (
        <form name="contact" onSubmit={handleSubmit} className={formStyles.contactForm}>
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