"use client";
import { createUser } from "@/lib/auth";
import SubmitBtn from "../common/SubmitBtn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
const SignUpForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  return (
    <form
      ref={formRef}
      className="mt-8 space-y-6"
      action={async (formData) => {
        const { error, id } = await createUser(formData);
        if (error) {
          toast.error(`${error}, please try again`);
        } else {
          formRef.current?.reset();
          toast.info("Account created successfully!");
          if (formData.get("role") === "instructor") {
            router.push(`/instructor_profile_setup/${id}`);
          } else {
            router.push(`/user_profile_set_up/${id}`);
          }
        }
      }}
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium dark:text-white text-dark"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="input-box"
          placeholder="JohnDoe"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium dark:text-white text-dark"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="input-box"
          placeholder="johndoe@email.com"
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="space-y-2 relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium dark:text-white text-dark"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            className="input-box"
            placeholder="********"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="dark:text-white text-black absolute top-1/2 right-2"
          >
            {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="role"
            className="block text-sm font-medium dark:text-white text-dark"
          >
            Role
          </label>
          <Select name="role" required>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="instructor">Instructor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <SubmitBtn text="Sign up" loader="Creating account..." />
      <div className="flex items-center justify-center mt-4 text-gray-500">
        <span className="w-1/5 border-b border-gray-600"></span>
        <span className="px-2 text-sm">OR CONTINUE WITH</span>
        <span className="w-1/5 border-b border-gray-600"></span>
      </div>
    </form>
  );
};

export default SignUpForm;
