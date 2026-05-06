import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { yourname, youremail, yourmessage } = req.body

  if (!yourname || !youremail || !yourmessage) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'brian.gunzenhauser@gmail.com',
    subject: `New message from ${yourname}`,
    html: `
      <p><strong>Name:</strong> ${yourname}</p>
      <p><strong>Email:</strong> ${youremail}</p>
      <p><strong>Message:</strong></p>
      <p>${yourmessage}</p>
    `,
    reply_to: youremail,
  })

  if (error) {
    return res.status(500).json({ error: 'Failed to send email' })
  }

  res.status(200).json({ success: true })
}
