import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => (
  <footer className="dark:text-gray-300 py-10 px-5 mt-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      {/* Logo and Description */}
      <div className="flex flex-col space-y-3">
        <h2 className="text-2xl font-bold text-white">Lectra</h2>
        <p>
          Transforming education with personalized and interactive online
          learning experiences.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold text-white mb-2">Quick Links</h3>
        <ul className="space-y-1">
          <li>
            <Link href="/about" className="dark:hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/courses" className="dark:hover:text-white">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/contact" className="dark:hover:text-white">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/faq" className="dark:hover:text-white">
              FAQs
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact and Social Media */}
      <div className="space-y-4">
        <h3 className="font-semibold text-white mb-2">Get in Touch</h3>
        <p>
          Email:{" "}
          <Link
            href="mailto:support@lectra.com"
            className="dark:hover:text-white"
          >
            support@lectra.com
          </Link>
        </p>
        <div className="flex space-x-4">
          <Link href="#" className="dark:hover:text-white">
            <FaWhatsapp size={24} />
          </Link>
          <Link href="#" className="dark:hover:text-white">
            <FaXTwitter size={24} />
          </Link>
          <Link href="#" className="dark:hover:text-white">
            <IoLogoInstagram size={24} />
          </Link>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Lectra. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
