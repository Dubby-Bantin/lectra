import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface LectureReminderEmailProps {
  studentName: string;
  lectureTitle: string;
  lectureTime: string; // e.g., "10:00 AM, Nov 15th"
}

export const LectureReminderEmail = ({
  studentName = "Student",
  lectureTitle = "Introduction to React",
  lectureTime = "10:00 AM, Nov 15th",
}: LectureReminderEmailProps) => (
  <Html>
    <Head />
    <Preview>Your lecture is starting soon—don’t miss it!</Preview>
    <Body className="bg-white font-sans">
      <Container className="max-w-lg mx-auto px-6 py-12 bg-white rounded-lg shadow-md">
        <Img
          src="https://github.com/user-attachments/assets/8e9d96b1-05e1-4397-9060-25e64ea9a5b4"
          width="50"
          height="50"
          alt="Lectra Logo"
          className="mx-auto mb-6"
        />
        <Text className="text-lg text-gray-800 mb-4">Hi {studentName},</Text>
        <Text className="text-gray-700 leading-relaxed mb-6">
          This is a friendly reminder that your lecture,{" "}
          <span className="font-semibold text-blue-600">{lectureTitle}</span>,
          is starting soon. Join us on time to make the most of the session.
        </Text>
        <Text className="text-gray-700 leading-relaxed mb-6">
          <span className="font-semibold">Lecture Time:</span> {lectureTime}
        </Text>
        <Section className="text-center">
          <Button
            className="bg-[#33bbcf] hover:bg-[#28a1b2] text-white py-2 px-4 rounded-md text-lg"
            href="https://lectra.vercel.app/"
          >
            Join Lecture
          </Button>
        </Section>
        <Text className="text-gray-700 leading-relaxed mt-6">
          Best regards,
          <br />
          The Lectra Team
        </Text>
        <Hr className="border-gray-300 my-6" />
        <Text className="text-gray-500 text-sm">
          You are receiving this email because you registered on Lectra.
          <br />
          Lectra Inc, 123 Learning Ave, Knowledge City.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default LectureReminderEmail;
