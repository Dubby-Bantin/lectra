import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { FAQItemProps } from "@/types";

const FAQItem = ({ question, answer, Icon }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFAQ = () => setIsOpen(!isOpen);

  return (
    <div
      onClick={toggleFAQ}
      className={`rounded-lg border w-full px-4 cursor-pointer transition-all duration-200 `}
    >
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-4">
          <Icon className="text-xl" />
          <span>{question}</span>
        </div>
        <LiaAngleRightSolid
          className={`${isOpen && "rotate-90"} transtion-all duration-500`}
        />
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
