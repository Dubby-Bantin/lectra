"use server";
import { revalidatePath } from "next/cache";
import { createDocument } from "./room.actions";
import { getFireStoreRefData } from "../utils/fireBaseUtils";
import { sendEmail } from "@/services/emailService";

const getSubscribedUsers = async (
  subscribedUsers: string[]
): Promise<{ emails: string[]; names: string[] }> => {
  const promises = subscribedUsers.map(async (userId) => {
    const students = await getFireStoreRefData(userId, "students");
    if (students) {
      return { email: students.email, firstName: students.firstName };
    }

    return null;
  });

  const results = await Promise.all(promises);
  const validResults = results.filter((item) => item !== null) as {
    email: string;
    firstName: string;
  }[];

  const emails = validResults.map((item) => item.email);
  const names = validResults.map((item) => item.firstName);

  return { emails, names };
};

const scheduleLecture = async (
  formData: FormData,
  datetime: Date | null,
  email: string,
  userId?: string
) => {
  const title = formData.get("title") as string;
  const duration = formData.get("duration") as string;

  const data = await getFireStoreRefData(userId, "instructors");
  if (!data) {
    throw new Error("No instructor data found for user.");
  }

  const { firstName, lastName, expertise, subscribedUsers = [] } = data;
  const { emails, names } = await getSubscribedUsers(subscribedUsers);

  try {
    if (!userId) {
      return;
    }
    if (!datetime || !title || !duration) {
      return {
        e: "All fields are required, One of the input fields might be empty ",
      };
    }

    sendEmail(
      emails,
      email,
      `${firstName} ${lastName}`,
      names,
      title,
      expertise,
      datetime,
      userId,
      duration
    );

    await createDocument({ userId, email, title });
    revalidatePath(`/instructor/dashboard/${userId}/:path*`);
  } catch (e) {
    console.log(e);
  }
};

export default scheduleLecture;
