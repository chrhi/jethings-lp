import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"

const resend = new Resend(
  process.env.RESEND_API_KEY ?? "re_4RxbVML4_3ezPEZi4piF21XVTZS4DfGx6"
)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { fullName, phone, email, description } = body

    const { data, error } = await resend.emails.send({
      from: "Chehri <contact@rocketlaunch.cc>",
      to: ["abdellah.chehri14@gmail.com"],
      subject: "📩 طلب جديد من الموقع",
      react: EmailTemplate({
        firstName: fullName,
        phone,
        email,
        description,
      }),
    })

    if (error) {
      console.log(error)
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ data })
  } catch (error) {
    console.log(error)
    return Response.json({ error: "Server Error" }, { status: 500 })
  }
}
