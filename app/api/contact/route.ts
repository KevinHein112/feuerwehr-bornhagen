import { NextResponse } from "next/server"
import { Resend } from "resend"
import { createClient } from "@supabase/supabase-js"

export async function POST(req: Request) {
  try {
    /* CLIENTS ERST ZUR LAUFZEIT ERSTELLEN */
    const resend = new Resend(process.env.RESEND_API_KEY!)

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const body = await req.json()

    const { name, email, message, website } = body

    /* SPAM PROTECTION */
    if (website) {
      return NextResponse.json({ ok: true })
    }

    /* SAVE MESSAGE */
    await supabase.from("messages").insert([
      { name, email, message },
    ])

    /* SEND EMAIL */
    await resend.emails.send({
      from: "Feuerwehr Website <onboarding@resend.dev>",
      to: "deine@email.de",
      subject: "Neue Kontaktanfrage",
      html: `
        <h2>Neue Nachricht</h2>
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