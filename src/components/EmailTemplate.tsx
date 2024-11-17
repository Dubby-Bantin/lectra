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
import { Tailwind } from "@react-email/tailwind";
import { LectureReminderEmailProps } from "@/types";

export const LectureReminderEmail = ({
  studentName,
  lectureTitle,
  lectureCategory,
  lectureTime,
  lectureId,
  instructorName,
  duration,
}: LectureReminderEmailProps) => {
  console.log(studentName);
  return (
    <Html>
      <Head />
      <Preview>Your lecture is starting soon—don’t miss it!</Preview>
      <Tailwind>
        <Body className="bg-white font-poppins">
          <Container className="max-w-lg mx-auto px-6 py-12 bg-white rounded-lg shadow-md">
            <Img
              src="https://github.com/user-attachments/assets/8e9d96b1-05e1-4397-9060-25e64ea9a5b4"
              height="250"
              alt="Lectra Logo"
              className="mx-auto mb-6 rounded-md object-cover w-full"
            />
            <Text className="text-lg text-gray-800 mb-4">Hi Student 👋,</Text>
            <Text className="text-gray-700 leading-relaxed mb-6">
              This is a friendly reminder that your lecture under the,{" "}
              <span className="font-semibold text-blue-600">
                `{lectureCategory}`
              </span>{" "}
              category hosted by {instructorName} is starting soon. make sure to
              join the lecture on time to make the most of the session.
            </Text>
            <Text className="text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold">Lecture Date:</span> {lectureTime}
            </Text>
            <Text className="text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold">Lecture Duration:</span>{" "}
              {duration}
            </Text>
            <Text className="text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold">Lecture Title:</span>{" "}
              {lectureTitle}
            </Text>
            <Section className="text-center">
              <Button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                href={`https://lectra.vercel.app/lecture/${lectureId}`}
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
              Lectra Inc
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default LectureReminderEmail;
