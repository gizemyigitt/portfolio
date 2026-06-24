import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, message } = await req.json();

  if (!name?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Ad ve mesaj zorunlu." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Portfolyo İletişim <onboarding@resend.dev>",
      to: "muh.gizemyigit@gmail.com",
      subject: `Portfolyo — ${name}`,
      text: `Ad: ${name}\n\nMesaj:\n${message}`,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Gönderim başarısız." }, { status: 500 });
  }
}
