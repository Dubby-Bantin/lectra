"use client";
import { createUser } from "@/lib/actions/auth.actions";
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
      className="space-y-6 mt-8"
      action={async (formData) => {
        const { error, id } = await createUser(formData);
        if (error) {
          toast.error(`${error}, please try again`);
        } else {
          formRef.current?.reset();
          toast.success("Account created successfully!");
          if (formData.get("role") === "instructor") {
            router.push(`/instructor_profile_setup/${id}`);
          } else {
            router.push(`/user_profile_set_up/${id}`);
          }
        }
      }}
    >
      <div className="flex gap-5">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-dark text-sm dark:text-white"
          >
            FirstName
          </label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            autoComplete="firstname"
            required
            className="input-box"
            placeholder="John"
          />
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="block mb-2 font-medium text-dark text-sm dark:text-white"
          >
            LastName
          </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            autoComplete="LastName"
            required
            className="input-box"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block font-medium text-dark text-sm dark:text-white"
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

      <div className="flex flex-wrap md:flex-nowrap items-center gap-5">
        <div className="relative space-y-2 w-full">
          <label
            htmlFor="password"
            className="block font-medium text-dark text-sm dark:text-white"
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
            className="top-1/2 right-2 absolute text-black dark:text-white"
          >
            {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
          </div>
        </div>

        <div className="space-y-2 w-full">
          <label
            htmlFor="role"
            className="block font-medium text-dark text-sm dark:text-white"
          >
            Role
          </label>
          <Select name="role" required>
            <SelectTrigger className="w-full md:w-[180px]">
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
      {/* <div className="flex justify-center items-center mt-4 text-gray-500">
        <span className="border-gray-600 border-b w-1/5"></span>
        <span className="px-2 text-sm">OR CONTINUE WITH</span>
        <span className="border-gray-600 border-b w-1/5"></span>
      </div> */}
    </form>
  );
};

export default SignUpForm;
