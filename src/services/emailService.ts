"use server";
import LectureReminderEmail from "@/components/EmailTemplate";
import { formatIsoToDateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (
  emails: string[] | undefined,
  instructorEmail: string | undefined,
  instructorName: string,
  studentName: string[],
  lectureTitle: string,
  lectureCategory: string,
  lectureTime: string,
  lectureId?: string,
  duration?: string
) => {
  if (!emails) {
    return {
      error: "Invalid email or message",
    };
  }

  if (!emails.length) {
    console.warn("No emails provided for sending.");
    return { error: "No valid recipients" };
  }

  try {
    await resend.emails.send({
      from: "Lecture Class <onboarding@resend.dev>",
      to: emails.map((email) => email),
      subject: `Upcoming Lecture: ${lectureTitle}`,
      replyTo: instructorEmail,
      react: React.createElement(LectureReminderEmail, {
        studentName: studentName.map((name) => name),
        lectureTitle: lectureTitle,
        lectureCategory: lectureCategory,
        lectureTime: formatIsoToDateString(lectureTime),
        lectureId: lectureId,
        instructorName: instructorName,
        duration: duration,
      }),
    });
    return { success: true, error: null };
  } catch (e) {
    console.error("Error sending email:", e);
    return { error: e.message };
  }
};

export { sendEmail };
