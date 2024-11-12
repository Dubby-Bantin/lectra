"use client";
import SubmitBtn from "@/components/common/SubmitBtn";
import ImageDropZone from "../common/ImageDropZone";
import { Checkbox } from "../ui/checkbox";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { updateStudentRef } from "@/lib/auth";
import { toast } from "sonner";
const StudentProfileSetup = ({ id }: { id: string }) => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        const { e } = await updateStudentRef(formData, phoneNumber, id);
        if (e) {
          toast.error(e);
        } else {
          toast.success("Your Profile setup was successfull!");
          formRef.current?.reset();
          router.push(`/student/dashboard/${id}`);
        }
      }}
      className="p-6 w-full flex flex-col items-center gap-5"
    >
      <div className="w-full">
        <label htmlFor="phone" className="block text-sm font-medium mb-3">
          Phone Number
        </label>
        <PhoneInput
          id="phone"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={setPhoneNumber}
          defaultCountry="US"
          international
          className="phone-input input-box"
        />
      </div>
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Profile Picture
        </label>
        <ImageDropZone name="student_profile_photo" />
      </div>
      <section className="w-full mb-10">
        <h1 className="text-2xl font-bold mb-5">Agreement & Consent</h1>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Checkbox id="terms" required />
            <label htmlFor="terms" className="text-sm font-medium">
              I agree to the Terms of Service and understand the guidelines for
              using this platform.
            </label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="privacy" required />
            <label htmlFor="privacy" className="text-sm font-medium">
              I consent to the collection and processing of my personal data as
              outlined in the Privacy Policy.
            </label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="compliance" required />
            <label htmlFor="compliance" className="text-sm font-medium">
              I confirm that I comply with all applicable educational
              regulations, including FERPA.
            </label>
          </div>
        </div>{" "}
      </section>{" "}
      <SubmitBtn
        text="Submit & Continue"
        loader="Setting up profile... please wait"
      />
    </form>
  );
};

export default StudentProfileSetup;
