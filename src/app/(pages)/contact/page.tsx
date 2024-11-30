import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Learn more about Lectra, our mission, our journey, and how we are transforming the future of education.",
  openGraph: {
    url: "https://lectra.vercel.app/contact",
    images: [
      {
        url: "https://private-user-images.githubusercontent.com/157697665/391287476-e9a544af-988c-4388-83ff-c9bf4350e907.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzMwMDA5OTEsIm5iZiI6MTczMzAwMDY5MSwicGF0aCI6Ii8xNTc2OTc2NjUvMzkxMjg3NDc2LWU5YTU0NGFmLTk4OGMtNDM4OC04M2ZmLWM5YmY0MzUwZTkwNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEzMFQyMTA0NTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNjNmNzg2Y2FhODFkZTBhNjgxZGQ5ODM2NzczM2Q1OGUzZjFlODI2YTZlN2U2ZGJmMWQ1N2E3MjE5N2JkMmY4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ay9fIhuORP-6Ue4-R1nDpR0-Fgo0Fjp389Baee5neHk",
        width: 1200,
        height: 630,
        alt: "Lectra - Transform Your Learning Experience",
      },
    ],
  },
};
const ContactPage = () => {
  return (
    <section className="">
      <section className="flex flex-col justify-center items-center px-4 lg:px-8 py-16 lg:py-24 w-full">
        {/* Heading and Intro */}
        <div className="mb-12 max-w-2xl text-center">
          <h1 className="mb-4 font-bold text-4xl">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            We&apos;d love to hear from you! Please reach out with any
            questions, suggestions, or feedback.
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="flex lg:flex-row flex-col justify-center items-start gap-12 lg:gap-16 w-full max-w-3xl">
          {/* Contact Form */}
          <div className="flex-1 space-y-6 w-full sm:w-fit">
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
                className="bg-transparent p-3 border rounded-lg w-full h-40 resize-none focus:outline-4"
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
            <h2 className="font-semibold text-2xl">Get in Touch</h2>
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
            <div className="flex justify-center lg:justify-start space-x-4 mt-4">
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
