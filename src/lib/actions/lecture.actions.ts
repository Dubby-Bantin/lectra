"use server";
import { revalidatePath } from "next/cache";
import { createDocument } from "./room.actions";
import { formatIsoToDateString, getFireStoreRefData } from "../utils";
import { sendEmail } from "@/services/emailService";

const getSubscribedUsers = async (
  subscribedUsers: string[]
): Promise<{ emails: string[]; names: string[] }> => {
  // Step 1: Use map to create promises for each user
  const promises = subscribedUsers.map(async (userId) => {
    const students = await getFireStoreRefData(userId, "students");
    if (students) {
      // Return email and name if valid
      const { email, name } = students;
      return { email, name };
    }
    return null; // Return null if no student data is found
  });

  // Step 2: Use Promise.all to wait for all promises to finish
  const results = await Promise.all(promises);

  // Step 3: Filter out invalid results (null values)
  const validResults = results.filter((item) => item !== null) as {
    email: string;
    name: string;
  }[];

  // Step 4: Separate emails and names into their own arrays
  const emails = validResults.map((item) => item.email);
  const names = validResults.map((item) => item.name);

  return { emails, names };
};

const scheduleLecture = async (
  formData: FormData,
  datetime: string,
  email: string,
  userId?: string,
  lectureId?: string
) => {
  // data from form
  const title = formData.get("title") as string;
  const duration = formData.get("duration") as string;

  //   data from firebase

  const data = await getFireStoreRefData(userId, "instructors");
  if (!data) {
    throw new Error("No instructor data found for user.");
  }

  const { firstName, lastName, expertise, subscribedUsers } = data;
  const { emails, names } = await getSubscribedUsers(subscribedUsers);
  try {
    console.log(
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
  } catch (e) {
    return { e };
  }

  //   try {
  //     if (!userId) {
  //       return;
  //     }
  //     await createDocument({ userId, email });
  //     revalidatePath(`/instructor/dashboard/${userId}/:path*`);
  //   } catch (error) {
  //     console.log(error);
  //   }
};

export default scheduleLecture;
