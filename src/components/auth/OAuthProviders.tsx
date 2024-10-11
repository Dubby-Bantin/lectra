"use client";

import { signInWithGitHub, signInWithGoogle } from "@/lib/firebase";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const OAuthProviders = () => {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={signInWithGitHub}
        className="flex items-center justify-center w-full px-4 py-2 mr-2 text-sm font-medium dark:text-white text-primary border rounded-md hover:bg-accent transition-all duration-500"
      >
        <FaGithub className="mr-2" />
        GitHub
      </button>
      <button
        onClick={signInWithGoogle}
        className="flex items-center justify-center w-full px-4 py-2 ml-2 text-sm font-medium dark:text-white text-primary border rounded-md hover:bg-accent transition-all duration-500"
      >
        <FcGoogle className="mr-2" />
        Google
      </button>
    </div>
  );
};

export default OAuthProviders;
