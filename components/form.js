import { useRouter } from 'next/router'
import formStyles from './Form.module.css'
import buttonStyles from '../styles/Button.module.css'

export default function Form() {
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                yourname: formData.get('yourname'),
                youremail: formData.get('youremail'),
                yourmessage: formData.get('yourmessage'),
            }),
        })

        if (res.ok) {
            router.push('/thanks')
        }
    }

    return (
        <form name="contact" onSubmit={handleSubmit} className={formStyles.contactForm}>
            <label htmlFor="yourname">Your Name</label>
            <input type="text" name="yourname" id="yourname" placeholder="Your name" required />

            <label htmlFor="youremail">Your Email</label>
            <input type="email" name="youremail" id="youremail" placeholder="Your email" required />

            <label htmlFor="yourmessage">Your Message</label>
            <textarea name="yourmessage" id="yourmessage" placeholder="Your message" required></textarea>

            <button type="submit" className={buttonStyles.buttonLink}>Send it to me</button>
        </form>
    )
}
