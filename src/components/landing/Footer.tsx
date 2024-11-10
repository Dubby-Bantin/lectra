import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import footer_grid from "@/public/icons/footer_grid.svg";

const Footer = () => (
  <footer className="relative dark:text-gray-300 py-10 px-5 mt-10 overflow-clip">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      {/* Logo and Description */}
      <div className="flex flex-col space-y-3">
        <h2 className="text-2xl font-bold text-white">Lectra</h2>
        <p>
          Transforming education with personalized and interactive online
          learning experiences.
        </p>
      </div>

      <Image
        src={footer_grid}
        alt="grid"
        className="w-[60rem] -top-[13rem] md:left-[18rem] sm:left-0 absolute h-[50rem] opacity-50 "
      />

      <div className="z-[999]">
        <h3 className="font-semibold text-white mb-2">Quick Links</h3>
        <ul className="space-y-1">
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/courses" className="hover:text-gray-400">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-gray-400">
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
            className="hover:text-gray-400"
          >
            support@lectra.com
          </Link>
        </p>
        <div className="flex space-x-4">
          <Link href="#" aria-label="WhatsApp" className="hover:text-gray-400">
            <FaWhatsapp size={24} />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-gray-400">
            <FaXTwitter size={24} />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-gray-400">
            <IoLogoInstagram size={24} />
          </Link>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Lectra. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
