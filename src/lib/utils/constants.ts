import { Info, Mail } from "lucide-react"; // Example icons
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { FiClock, FiUsers, FiShield, FiGlobe, FiBell } from "react-icons/fi";
import partner1Image from "@/public/images/1ac4b1_de2f47ad5b2940f3b5b2aaf0597ff6ed~mv2.webp";
import partner2Image from "@/public/images/pexels-karolina-grabowska-4491461.jpg";
import partner3Image from "@/public/images/pexels-zen-chung-5538322.jpg";
import partner4Image from "@/public/images/1ac4b1_de2f47ad5b2940f3b5b2aaf0597ff6ed~mv2.webp";
import { FAQ } from "@/types";
import { BsFillQuestionCircleFill, BsFillPersonFill } from "react-icons/bs"; // Different icons for each question
import { AiOutlineMobile } from "react-icons/ai";
import liveSession from "@/public/images/pexels-karolina-grabowska-4491461.jpg";

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
      "Real-time email notifications to keep users updated on lectures and tests.",
  },
  {
    Icon: FiBell,
    title: "Notifications",
    description:
      "Real-time email notifications to keep users updated on lectures and tests.",
  },
];

const teamMembers = [
  { name: "Jane Doe", role: "CEO & Founder", image: partner1Image },
  { name: "John Smith", role: "Head of Engineering", image: partner2Image },
  { name: "Alex Turner", role: "Lead Developer", image: partner3Image },
  { name: "Sam Wilson", role: "Product Designer", image: partner4Image },
];

const data = [
  {
    title: "Inception of Lectra",
    content:
      "Lectra was born from a desire to create an educational platform that adapts to individual learning styles. Our team came together with a vision to revolutionize online learning by making it interactive, personalized, and accessible to everyone.",
  },
  {
    title: "Building the Foundation",
    content:
      "After months of planning, we started developing the core of Lectra, focusing on integrating real-time interactive tools and building a user-friendly interface. Our goal was to offer a seamless experience that encourages student participation.",
  },
  {
    title: "Introducing Certified Instructors",
    content:
      "To ensure the highest quality education, we partnered with certified instructors across various fields. This partnership allowed us to bring expert guidance to every student, making learning on Lectra an enriching experience.",
  },
  {
    title: "Enhanced Personalization",
    content:
      "With feedback from our early users, we introduced personalized learning paths that adapt to each student’s pace and goals. This was a pivotal step in making Lectra a truly unique learning platform tailored to individual needs.",
  },
  {
    title: "Growing Community",
    content:
      "Our community grew rapidly as students and educators discovered the benefits of an interactive, adaptive learning environment. Lectra’s user base expanded globally, bringing together learners from diverse backgrounds.",
  },
  {
    title: "Ongoing Innovation",
    content:
      "Today, Lectra continues to evolve, integrating the latest in educational technology. We are committed to providing the most advanced tools and resources, ensuring that Lectra remains a leader in online education.",
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

const benefits = [
  {
    title: "Interactive and Engaging Classes",
    desc: "Our platform supports real-time interactions, so you can actively participate, ask questions, and collaborate with peers for a more enriching experience.",
    img: "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=612x612&w=0&k=20&c=yvFDnYMNEJ6WEDYrAaOOLXv-Jhtv6ViBRXSzJhL9S_k=",
  },
  {
    title: "Personalized Learning Paths",
    desc: "Lectra adapts to each student’s unique pace and goals, ensuring that every lecture and resource fits your learning style",
    img: "https://images.pexels.com/photos/68761/pexels-photo-68761.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    title: "Reliable Scheduling and Email Notifications",
    desc: "Never miss a class or deadline! Lectra’s scheduling and email notification system keeps you informed and organized, making it easier to focus on learning.",
    img: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Easy Access to Expert Instructors",
    desc: "With certified and experienced instructors, Lectra provides top-notch guidance to help you succeed in every subject.",
    img: liveSession,
  },
];

const faqs: FAQ[] = [
  {
    Icon: BsFillQuestionCircleFill,
    question: "What is Lectra?",
    answer:
      "Lectra is a platform for scheduling lectures and managing educational resources effectively.",
  },
  {
    Icon: BsFillPersonFill,
    question: "How do I register?",
    answer:
      'You can register by clicking on the "Sign Up" button on the homepage and filling out the required details.',
  },
  {
    Icon: AiOutlineMobile,
    question: "Is there a mobile app?",
    answer:
      "Currently, Lectra is a web-based application. A mobile app is in development.",
  },
];

export {
  navLinks,
  universities,
  heroSlides,
  brightColors,
  featuresData,
  teamMembers,
  data,
  benefits,
  faqs,
};
