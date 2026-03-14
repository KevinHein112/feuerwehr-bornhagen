import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY!)

    const { name, email, message, website } = await req.json()

    // Spam Schutz
    if (website) {
      return NextResponse.json({ ok: true })
    }

    await resend.emails.send({
      from: "Feuerwehr Website <info@feuerwehr-bornhagen.de>",
      to: "info@feuerwehr-bornhagen.de",
      subject: "Neue Kontaktanfrage",
      html: `
        <h2>Neue Nachricht über Website</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}