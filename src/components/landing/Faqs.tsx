"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";
import { BsFillQuestionCircleFill, BsFillPersonFill } from "react-icons/bs"; // Different icons for each question
import { AiOutlineMobile } from "react-icons/ai";

interface FAQ {
  Icon: React.ElementType; // Icon type
  question: string;
  answer: string;
}

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

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faqs" className="py-12">
      <h2 className="text-4xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="md:max-w-2xl sm:px-0 px-10 mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            isOpen={i === openIndex}
            onClick={() => toggleFAQ(i)}
            question={faq.question}
            answer={faq.answer}
            Icon={faq.Icon} // Pass the icon for each FAQ
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
