import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.GMAIL_ACCOUNT;
const pass = process.env.GMAIL_PASSWORD;

export async function POST(request) {
  try {
    const { firstname, email, subject, message } = await request.json();

    if (!user || !pass) {
      console.error("Email or password not defined in environment variables");
      throw new Error("Email or password not defined");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: user,
      to: user,
      subject: `New message from ${firstname}: ${subject}`,
      text: `Name: ${firstname}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse("Failed to send message.", { status: 500 });
  }
}
