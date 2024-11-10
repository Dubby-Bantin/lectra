import {
  FiClock,
  FiUsers,
  FiBarChart2,
  FiShield,
  FiGlobe,
  FiBell,
} from "react-icons/fi";

const featuresData = [
  {
    icon: <FiClock size={30} />,
    title: "Automated Scheduling",
    description:
      "Effortlessly schedule and manage lectures, assignments, and automated tests.",
  },
  {
    icon: <FiUsers size={30} />,
    title: "User Management",
    description:
      "Manage instructors and students with role-based access and customizable permissions.",
  },
  {
    icon: <FiBarChart2 size={30} />,
    title: "Data Analytics",
    description:
      "Access real-time data and performance analytics to track student progress.",
  },
  {
    icon: <FiShield size={30} />,
    title: "Security & Compliance",
    description:
      "Keep user data secure with encryption, backup, and compliance with global standards.",
  },
  {
    icon: <FiGlobe size={30} />,
    title: "Localization",
    description: "Support for multiple languages to reach a global audience.",
  },
  {
    icon: <FiBell size={30} />,
    title: "Notifications",
    description:
      "Real-time notifications to keep users updated on lectures and tests.",
  },
];

const FeaturesSection = () => (
  <section className="text-gray-800 dark:text-gray-200 py-16 px-6 md:px-12 lg:px-24">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 font-poppins">
        Key Features
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="border flex flex-col items-center bg-white dark:bg-background p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center font-poppins text-sm">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
