import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { capitalizeFirstLetter } from "@/lib/utils/helpers";

const InstructorTabs = ({
  firstName,
  bio,
  expertise,
  selectedDays,
  degree,
  major,
  preferred_language,
  email,
  phoneNumber,
  university,
  employment_history,
}: {
  firstName: string;
  bio: string;
  expertise: string;
  selectedDays: string[];
  degree: string;
  major: string;
  preferred_language: string;
  email: string;
  phoneNumber?: string;
  university: string;
  employment_history?: string;
}) => {
  return (
    <Tabs defaultValue="bio">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="bio">Biography</TabsTrigger>
        <TabsTrigger value="schedule">Schedule</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>

      {/* Tab Content: Bio */}
      <TabsContent value="bio" className="py-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          About {firstName}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 py-2">{bio}</p>
        <div className="py-4">
          <h4 className="text-md font-medium text-gray-800 dark:text-white">
            Expertise:
          </h4>
          <p className="text-gray-700 dark:text-gray-300">{expertise}</p>
        </div>
        <div className="py-4">
          <h4 className="text-md font-medium text-gray-800 dark:text-white">
            Degree:
          </h4>
          <p className="text-gray-700 dark:text-gray-300">{degree}</p>
        </div>
        <div className="pt-4">
          <h4 className="text-md font-medium text-gray-800 dark:text-white">
            Major:
          </h4>
          <p className="text-gray-700 dark:text-gray-300">{major}</p>
        </div>
      </TabsContent>

      {/* Tab Content: Schedule */}
      <TabsContent value="schedule" className="py-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Availability
        </h3>
        <p className="text-gray-600 dark:text-gray-300 py-2">
          Preferred Lecture Days:
          <ul className="grid grid-cols-2 ">
            {selectedDays.map((day: string) => (
              <li key={day} className="text-lg">
                {capitalizeFirstLetter(day)}
              </li>
            ))}
          </ul>
        </p>
        <div className="pt-4">
          <h4 className="text-md font-medium text-gray-800 dark:text-white">
            Teaching Language:
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            {preferred_language}
          </p>
        </div>
      </TabsContent>

      {/* Tab Content: Contact */}
      <TabsContent value="contact" className="py-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Contact Information
        </h3>
        <p className="text-gray-600 dark:text-gray-300 py-2">
          Email:{" "}
          <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
            {email}
          </a>
        </p>
        <div className="py-4">
          <p className="text-gray-600 dark:text-gray-300">
            Phone: {phoneNumber || "Not provided"}
          </p>
        </div>
        <div className="pt-4">
          <h4 className="text-md font-medium text-gray-800 dark:text-white">
            University:
          </h4>
          <p className="text-gray-700 dark:text-gray-300">{university}</p>
        </div>

        <p>
          <strong>Employment History:</strong>{" "}
          {employment_history || "No employment history provided."}
        </p>
      </TabsContent>
    </Tabs>
  );
};

export default InstructorTabs;
