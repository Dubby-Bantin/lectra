import { liveblocks } from "@/lib/liveblocks";
import { getFireStoreRefData, getUserColor } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
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
  const instructorData = await getFireStoreRefData(
    fireStoreUserId,
    "instructors"
  );

  if (!instructorData) {
    return redirect("/signup"); // Redirect if no instructor data found
  }

  const { id, name, email, profileImageUrl } = instructorData;

  if (!fireStoreUserId) {
    redirect("/sign-in");
  }
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
