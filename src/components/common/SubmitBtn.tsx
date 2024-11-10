"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

const SubmitBtn = ({
  text,
  loader,
}: {
  text: string;
  loader: string | ReactNode;
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className={`w-full py-[.3rem] dark:text-black text-white dark:bg-white bg-dark border border-transparent rounded-sm hover:opacity-90 focus:outline-none flex justify-center items-center disabled:bg-opacity-35`}
    >
      {pending ? loader : text}
    </button>
  );
};

export default SubmitBtn;
