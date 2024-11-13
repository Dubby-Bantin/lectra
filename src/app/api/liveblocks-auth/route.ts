import { liveblocks } from "@/lib/liveblocks";
import { getFireStoreRefData, getUserColor } from "@/lib/utils";
import { cookies } from "next/headers";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { NextResponse } from "next/server";

type UserInfo = {
  id?: string;
  info: {
    id?: string;
    name?: string;
    email: string;
    avatar: string | StaticImport;
    color?: string;
  };
};

export async function POST() {
  const cookieStore = cookies();
  const fireStoreUserId = cookieStore.get("userId")?.value;

  if (!fireStoreUserId) {
    return NextResponse.redirect("/sign-in");
  }

  const instructorData = await getFireStoreRefData(
    fireStoreUserId,
    "instructors"
  );
  const studentData = await getFireStoreRefData(fireStoreUserId, "students");

  const userRoleData = instructorData || studentData;
  if (!userRoleData) {
    return NextResponse.redirect("/signup");
  }
  const { id, name, email, profileImageUrl } = userRoleData;

  const user: UserInfo = {
    id,
    info: {
      id,
      name,
      email,
      avatar: profileImageUrl,
      color: getUserColor(id),
    },
  };

  // Identify the user in Liveblocks
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.info.email ?? "",
      groupIds: [],
    },
    {
      userInfo: user.info as {
        id: string;
        name: string;
        email: string;
        avatar: string;
        color: string;
      },
    }
  );

  return new Response(body, { status });
}
