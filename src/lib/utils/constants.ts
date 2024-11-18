import { Info, Mail } from "lucide-react"; // Example icons
import { PiChalkboardTeacherLight } from "react-icons/pi";
import {
  FiClock,
  FiUsers,
  FiBarChart2,
  FiShield,
  FiGlobe,
  FiBell,
} from "react-icons/fi";

const navLinks = [
  {
    id: "about",
    title: "About",
    Icon: Info,
  },
  {
    id: "contact",
    title: "Contact",
    Icon: Mail,
  },
  {
    id: "instructors",
    title: "Instructors",
    Icon: PiChalkboardTeacherLight,
  },
];

const universities = [
  {
    value: "harvard_university",
    label: "Harvard University",
  },
  {
    value: "stanford_university",
    label: "Stanford University",
  },
  {
    value: "massachusetts_institute_of_technology",
    label: "Massachusetts Institute of Technology (MIT)",
  },
  {
    value: "university_of_cambridge",
    label: "University of Cambridge",
  },
  {
    value: "university_of_oxford",
    label: "University of Oxford",
  },
  {
    value: "california_institute_of_technology",
    label: "California Institute of Technology (Caltech)",
  },
  {
    value: "university_of_chicago",
    label: "University of Chicago",
  },
  {
    value: "princeton_university",
    label: "Princeton University",
  },
  {
    value: "yale_university",
    label: "Yale University",
  },
  {
    value: "columbia_university",
    label: "Columbia University",
  },
  {
    value: "university_of_california_berkeley",
    label: "University of California, Berkeley",
  },
  {
    value: "university_of_toronto",
    label: "University of Toronto",
  },
  {
    value: "university_of_tokyo",
    label: "University of Tokyo",
  },
  {
    value: "national_university_of_singapore",
    label: "National University of Singapore",
  },
  {
    value: "peking_university",
    label: "Peking University",
  },
  {
    value: "eth_zurich",
    label: "ETH Zurich - Swiss Federal Institute of Technology",
  },
  {
    value: "university_of_melbourne",
    label: "University of Melbourne",
  },
  {
    value: "london_school_of_economics",
    label: "London School of Economics and Political Science (LSE)",
  },
  {
    value: "imperial_college_london",
    label: "Imperial College London",
  },
  {
    value: "university_of_edinburgh",
    label: "University of Edinburgh",
  },
  {
    value: "tsinghua_university",
    label: "Tsinghua University",
  },
  {
    value: "university_of_hong_kong",
    label: "University of Hong Kong",
  },
  {
    value: "university_of_sydney",
    label: "University of Sydney",
  },
  {
    value: "seoul_national_university",
    label: "Seoul National University",
  },
  {
    value: "university_of_california_los_angeles",
    label: "University of California, Los Angeles (UCLA)",
  },
  {
    value: "university_of_michigan",
    label: "University of Michigan, Ann Arbor",
  },
  {
    value: "cornell_university",
    label: "Cornell University",
  },
  {
    value: "university_of_british_columbia",
    label: "University of British Columbia",
  },
  {
    value: "carnegie_mellon_university",
    label: "Carnegie Mellon University",
  },
  {
    value: "new_york_university",
    label: "New York University (NYU)",
  },
  {
    value: "university_of_pennsylvania",
    label: "University of Pennsylvania",
  },
  {
    value: "university_of_california_san_diego",
    label: "University of California, San Diego (UCSD)",
  },
  {
    value: "university_of_texas_austin",
    label: "University of Texas at Austin",
  },
  {
    value: "duke_university",
    label: "Duke University",
  },
  {
    value: "university_of_illinois_urbana_champaign",
    label: "University of Illinois at Urbana-Champaign",
  },
  {
    value: "university_of_washington",
    label: "University of Washington",
  },
  {
    value: "australian_national_university",
    label: "Australian National University",
  },
  {
    value: "kings_college_london",
    label: "King's College London",
  },
  {
    value: "mcgill_university",
    label: "McGill University",
  },
  {
    value: "university_of_copenhagen",
    label: "University of Copenhagen",
  },
  {
    value: "university_of_southern_california",
    label: "University of Southern California",
  },
  {
    value: "kyoto_university",
    label: "Kyoto University",
  },
  {
    value: "heidelberg_university",
    label: "Heidelberg University",
  },
  {
    value: "university_of_amsterdam",
    label: "University of Amsterdam",
  },
  {
    value: "university_of_zurich",
    label: "University of Zurich",
  },
  {
    value: "university_of_queensland",
    label: "University of Queensland",
  },
  {
    value: "ku_leuven",
    label: "KU Leuven",
  },
  {
    value: "ludwig_maximilian_university_munich",
    label: "Ludwig Maximilian University of Munich",
  },
  {
    value: "technical_university_of_munich",
    label: "Technical University of Munich",
  },
  {
    value: "fudan_university",
    label: "Fudan University",
  },
  {
    value: "university_of_glasgow",
    label: "University of Glasgow",
  },
];

const heroSlides = [
  "https://media.istockphoto.com/id/1868588778/photo/e-learning-technology-concept-online-education-webinar-online-courses-ai-and-machine-learning.jpg?s=612x612&w=0&k=20&c=GtCOhuwN7iRPg9AtXvIHT1-zKyBnAbSciBzs0cJ9CD8=",
  "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://media.istockphoto.com/id/1352742022/photo/education-on-internet-technology-e-learning-education-and-internet-lessons-person-who-attends.jpg?s=612x612&w=0&k=20&c=Yp6EuEcHlL9cXJ1-OqJvBJjldL8E_GUm8NnRX4qMyAA=",
  "https://images.pexels.com/photos/4063590/pexels-photo-4063590.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://media.istockphoto.com/id/1158175009/photo/e-learning-for-student-and-university-concept.jpg?s=612x612&w=0&k=20&c=aZh1LvTCNXCJJ8JONFCatZMsxY0ofLHSp7nIaGhH338=",
  "https://media.istockphoto.com/id/1360520508/photo/businessman-using-a-computer-to-webinar-online-education-on-internet-online-courses-e.jpg?s=612x612&w=0&k=20&c=aJ1_9F4nJP8NdhI-Qfp6tQuZyaefcttn9_c5ldDZFNo=",
  "https://images.pexels.com/photos/4827576/pexels-photo-4827576.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://media.istockphoto.com/id/2177353072/photo/digital-recruitment-process-on-a-tablet-selecting-a-candidate-profile-for-hiring-great-for-hr.jpg?s=612x612&w=0&k=20&c=N1nqxHNbmjvfHxFNWc7Fv7pBhGjLHykgAtPpY2uIruo=",
];

const featuresData = [
  {
    Icon: FiClock,
    title: "Automated Scheduling",
    description:
      "Effortlessly schedule and manage lectures, assignments, and automated tests.",
  },
  {
    Icon: FiUsers,
    title: "User Management",
    description:
      "Manage instructors and students with role-based access and customizable permissions.",
  },
  {
    Icon: FiBarChart2,
    title: "Data Analytics",
    description:
      "Access real-time data and performance analytics to track student progress.",
  },
  {
    Icon: FiShield,
    title: "Security & Compliance",
    description:
      "Keep user data secure with encryption, backup, and compliance with global standards.",
  },
  {
    Icon: FiGlobe,
    title: "Localization",
    description: "Support for multiple languages to reach a global audience.",
  },
  {
    Icon: FiBell,
    title: "Notifications",
    description:
      "Real-time notifications to keep users updated on lectures and tests.",
  },
];

const brightColors = [
  "#2E8B57",
  "#FF6EB4",
  "#00CDCD",
  "#FF00FF",
  "#FF007F",
  "#FFD700",
  "#00CED1",
  "#FF1493",
  "#00CED1",
  "#FF7F50",
  "#9ACD32",
  "#FFA500",
  "#32CD32",
  "#ADFF2F",
  "#DB7093",
  "#00FF7F",
  "#FFD700",
  "#FF007F",
  "#FF6347",
];

export { navLinks, universities, heroSlides, brightColors, featuresData };
