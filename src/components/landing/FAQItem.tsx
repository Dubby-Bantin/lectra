"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMinus } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { Button } from "../ui/button";

interface FAQItemProps {
  question: string;
  answer: string;
  Icon: React.ElementType;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, Icon }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleFAQ}
      className={`rounded-md border-2 w-full px-4 cursor-pointer transition-all duration-200 ${
        isOpen && "bg-gray-700 text-white"
      }`}
    >
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-4">
          <Icon className="text-xl" />
          <span>{question}</span>
        </div>
        <Button variant={"outline"}>
          {isOpen ? <AiOutlineMinus /> : <GoPlus />}
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pb-4">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
