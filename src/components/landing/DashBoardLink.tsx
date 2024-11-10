import Link from "next/link";
import { Button } from "../ui/button";
import { Bell } from "lucide-react";

const DashBoardLink = () => {
  return (
    <div>
      <div className="flex items-center gap-5 relative text-sm">
        <Link
          className="flex items-center gap-4 rounded-xl px-3 py-2 transition-colors duration-200"
          href={`/instructor/dashboard/`}
        >
          Dashboard
        </Link>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
    </div>
  );
};

export default DashBoardLink;
