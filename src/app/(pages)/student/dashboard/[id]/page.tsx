import { cookies } from "next/headers";
const StudentDashBoard = ({ id }: { id: string }) => {
  const cookieStore = cookies();
  if (!cookieStore.get("userId")) {
    cookieStore.set("userId", id);
  }
  return <div>Welcome to Your Dashboard</div>;
};

export default StudentDashBoard;
