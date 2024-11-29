import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import footer_grid from "@/public/icons/footer_grid.svg";

const Footer = () => (
  <footer className="relative mt-10 px-5 py-10 dark:text-gray-300 overflow-clip">
    <div className="md:dark:block left-[40%] -z-10 absolute hidden w-[30%] h-[10%] blue__gradient" />
    <div className="flex md:flex-row flex-col justify-between gap-8 mx-auto max-w-7xl">
      {/* Logo and Description */}
      <div className="flex flex-col space-y-3">
        <h2 className="font-bold text-2xl text-white">Lectra</h2>
        <p>
          Transforming education with personalized and interactive online
          learning experiences.
        </p>
      </div>

      <Image
        src={footer_grid}
        alt="grid"
        className="-top-[13rem] sm:left-0 md:left-[18rem] absolute opacity-50 dark:opacity-0 w-[60rem] h-[50rem]"
      />

      <div className="z-[999]">
        <h3 className="mb-2 font-semibold text-white">Quick Links</h3>
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
        <h3 className="mb-2 font-semibold text-white">Get in Touch</h3>
        <p>
          Email:{" "}
          <Link
            href="mailto:support@lectra.com"
            className="hover:text-gray-400"
          >
            support@lectra.com
          </Link>
        </p>
        <div className="flex space-x-4 text-white">
          <Link href="#" aria-label="WhatsApp" className="bg-gradient-to-r from-neutral-200 dark:from-[#0C0E23] to-neutral-600 dark:to-[#050112] -mr-2 p-2 rounded-full hover:text-gray-400">
            <FaWhatsapp size={15} />
          </Link>
          <Link href="#" aria-label="Twitter" className="bg-gradient-to-r from-neutral-200 dark:from-[#0C0E23] to-neutral-600 dark:to-[#050112] -mr-2 p-2 rounded-full hover:text-gray-400">
            <FaXTwitter size={15} />
          </Link>
          <Link href="#" aria-label="Instagram" className="bg-gradient-to-r from-neutral-200 dark:from-[#0C0E23] to-neutral-600 dark:to-[#050112] -mr-2 p-2 rounded-full hover:text-gray-400">
            <IoLogoInstagram size={15} />
          </Link>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-gray-700 mt-8 pt-4 border-t text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Lectra. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
