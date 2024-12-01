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
          <Container className="bg-white shadow-md mx-auto px-6 py-12 rounded-lg max-w-lg">
            <Img
              src="https://res.cloudinary.com/dy3xwbk5e/image/upload/v1733009040/logo_tzlyri.jpg"
              height={"250"}
              width={"250"}
              alt="Lectra Logo"
              className="mx-auto mb-6 rounded-full object-cover"
            />
            <Text className="mb-4 text-gray-800 text-lg">
              Hello Student 👋,
            </Text>
            <Text className="mb-6 text-gray-700 leading-relaxed">
              This is a friendly reminder that your lecture under the,{" "}
              <span className="font-semibold text-blue-600">
                `{lectureCategory}`
              </span>{" "}
              category hosted by {instructorName} is starting soon. make sure to
              join the lecture on time to make the most of the session.
            </Text>
            <Text className="mb-6 text-gray-700 leading-relaxed">
              <span className="font-semibold">Lecture Date:</span> {lectureTime}
            </Text>
            <Text className="mb-6 text-gray-700 leading-relaxed">
              <span className="font-semibold">Lecture Duration:</span>{" "}
              {duration}
            </Text>
            <Text className="mb-6 text-gray-700 leading-relaxed">
              <span className="font-semibold">Lecture Title:</span>{" "}
              {lectureTitle}
            </Text>
            <Section className="text-center">
              <Button
                className="bg-blue-600 px-4 py-2 rounded text-white"
                href={`https://lectra.vercel.app/lecture/${lectureId}`}
              >
                Join Lecture
              </Button>
            </Section>
            <Text className="mt-6 text-gray-700 leading-relaxed">
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
