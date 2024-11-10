import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const ContactPage = () => {
  return (
    <section className="">
      <section className="flex flex-col items-center justify-center w-full px-4 py-16 lg:px-8 lg:py-24">
        {/* Heading and Intro */}
        <div className="max-w-2xl text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We&apos;d love to hear from you! Please reach out with any
            questions, suggestions, or feedback.
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="w-full max-w-3xl flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-center">
          {/* Contact Form */}
          <div className="flex-1 space-y-6 sm:w-fit w-full">
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
                className="w-full"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full"
                required
              />
              <Input type="text" placeholder="Subject" className="w-full" />
              {/* <Textarea
              placeholder="Message"
              className="w-full h-40 resize-none"
              required
            /> */}

              <textarea
                name=""
                id=""
                placeholder="Message"
                className="w-full h-40 resize-none bg-transparent p-3 border rounded-lg focus:outline-4"
              />
              <Button
                type="submit"
                variant="outline"
                className="w-full lg:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-gray-600">
              Feel free to reach out to us through any of the channels below.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Email:</strong> contact@lectra.com
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +123 456 7890
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> 123 Lectra St, Learning City, ED 12345
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 justify-center lg:justify-start mt-4">
              <Link
                href="#"
                aria-label="WhatsApp"
                className="hover:text-gray-400"
              >
                <FaWhatsapp size={24} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-400"
              >
                <FaXTwitter size={24} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                <IoLogoInstagram size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default ContactPage;
