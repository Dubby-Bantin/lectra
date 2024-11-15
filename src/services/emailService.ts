"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (
  email: string | undefined,
  message: string,
  instructorEmail: string | undefined
) => {
  if (!email || typeof message !== "string") {
    return {
      error: "Invalid email or message",
    };
  }
  resend.emails.send({
    from: "Lecture Class <onboarding@resend.dev>",
    to: "dubbybantin@gmail.com",
    subject: "Message",
    replyTo: instructorEmail,
    text: message,
  });
};

export { sendEmail };
