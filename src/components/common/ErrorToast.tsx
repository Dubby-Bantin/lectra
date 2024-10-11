"use client";

import { useEffect } from "react";
import { toast } from "sonner";

interface ErrorToastProps {
  message: string;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ message }) => {
  useEffect(() => {
    // Trigger the toast error notification when the component mounts
    if (message) {
      toast.error(
        message
          .replace("Firebase:", "")
          .replace("(auth/weak-password)", "")
          .replace("Error:", "")
          .trim() // Clean up any extra spaces
      );
    }
  }, [message]); // Dependency array ensures the toast is only shown when the message changes

  return null; // No need to render any actual UI
};

export default ErrorToast;
