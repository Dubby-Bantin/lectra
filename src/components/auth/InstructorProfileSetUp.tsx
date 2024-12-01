"use client";
import PhoneInput from "react-phone-number-input";
import SubmitBtn from "../common/SubmitBtn";
import { useRef, useState } from "react";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import "react-phone-number-input/style.css";
import { Checkbox } from "../ui/checkbox";
import Combo from "../common/Combo";
import { universities } from "@/lib/utils/constants";
import ImageDropZone from "../common/ImageDropZone";
import { useRouter } from "next/navigation";
import { updateInstructorRef } from "@/lib/actions/auth.actions";
import PreferredLectureDays from "./PreferredLectureDays";
import { toast } from "sonner";
const InstructorProfileSetUp = ({ id }: { id: string }) => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [open, setOpen] = useState(false);
  const [university, setUniversity] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const router = useRouter();

  // TODO: add major degree and expertise in a text editor instead of inputs
  return (
    <form
      action={async (formData) => {
        await updateInstructorRef(
          formData,
          phoneNumber,
          university,
          selectedDays,
          id
        );

        formRef.current?.reset();
        toast.success("Your Profile setup was successfull!");
        router.push(`/instructor/dashboard/${id}`);
      }}
      ref={formRef}
      className="flex flex-col items-center gap-5 p-6 w-full"
    >
      <div className="mb-5 w-full text-gray-700 dark:text-white">
        {/* Personal Information */}
        <section className="mb-10">
          <h1 className="mb-5 font-bold text-2xl">Personal Information</h1>
          <div className="flex flex-wrap gap-5">
            {/* Address */}
            <div className="w-full">
              <label
                htmlFor="Preferred Language"
                className="block mb-3 font-medium text-sm"
              >
                Preferred Language
              </label>
              <input
                id="preferred_language"
                name="preferred_language"
                type="text"
                autoComplete="preferred_language"
                required
                className="input-box"
                placeholder="English"
              />
            </div>

            {/* Phone Number & Gender */}
            <div className="flex md:flex-row flex-col gap-5 w-full">
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block mb-3 font-medium text-sm"
                >
                  Phone Number
                </label>
                <PhoneInput
                  id="phone"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  defaultCountry="US"
                  international
                  className="input-box phone-input"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="gender"
                  className="block mb-3 font-medium text-sm"
                >
                  Gender
                </label>
                <Select name="gender" required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5 w-full">
              <div className="w-full">
                <label className="block mb-3 font-medium text-sm">Bio</label>
                <textarea
                  name="bio"
                  className="input-box"
                  placeholder="Write a brief bio about yourself..."
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="expertise"
                  className="block mb-3 font-medium text-sm"
                >
                  Expertise
                </label>
                <textarea
                  name="expertise"
                  className="input-box"
                  placeholder="Write a brief bio about yourself..."
                />
              </div>
            </div>
            <div className="w-full">
              <label className="block mb-3 font-medium text-sm">
                Preferred Lecture Days
              </label>
              <PreferredLectureDays
                selectedDays={selectedDays}
                setSelectedDays={setSelectedDays}
              />
            </div>

            <div className="flex flex-col justify-center items-end w-full">
              <label
                htmlFor="profile_photo"
                className="block mb-3 font-medium text-sm"
              >
                Profile Photo
              </label>
              {/* Profile Photo Upload */}
              <ImageDropZone name="profile_photo" />
            </div>
          </div>
        </section>
        {/* Professional Information */}
        <section className="mb-10">
          <h1 className="mb-5 font-bold text-2xl">Professional Information</h1>
          <div className="flex flex-wrap gap-5">
            {/* Degree */}
            <div className="w-full">
              <label
                htmlFor="degree"
                className="block mb-3 font-medium text-sm"
              >
                Degree
              </label>
              <input
                id="degree"
                name="degree"
                type="text"
                autoComplete="degree"
                required
                className="input-box"
                placeholder="Degree (e.g., Bachelor’s, Master’s, PhD)"
              />
            </div>

            {/* Major & University */}
            <div className="flex md:flex-row flex-col gap-5 w-full">
              <div className="w-full">
                <label
                  htmlFor="major"
                  className="block mb-3 font-medium text-sm"
                >
                  Major
                </label>
                <input
                  id="major"
                  name="major"
                  type="text"
                  autoComplete="major"
                  required
                  className="input-box"
                  placeholder="Major (e.g., Computer Science, English, Math)"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="university"
                  className="block mb-3 font-medium text-sm"
                >
                  University
                </label>
                <Combo
                  data={universities}
                  open={open}
                  setOpen={setOpen}
                  value={university}
                  setValue={setUniversity}
                  search="university"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Verification & Documentation */}
        <section className="mb-10 w-full">
          <h1 className="mb-5 font-bold text-2xl">
            Verification & Documentation
          </h1>
          <div className="flex flex-wrap justify-center gap-10 mb-5 w-full">
            {/* ID Verification Upload */}

            <div className="w-full">
              <label
                htmlFor="teaching_certificate_photo"
                className="block mb-3 font-medium text-sm"
              >
                Teaching Certificate
              </label>
              <ImageDropZone name="teaching_certificate_photo" />
            </div>

            <div className="w-full">
              <label
                htmlFor="id_verification_photo"
                className="block mb-3 font-medium text-sm"
              >
                ID Verification
              </label>
              <ImageDropZone name="id_verification_photo" />
            </div>
          </div>
        </section>
        {/* Employment History */}
        <section className="mb-10">
          <h1 className="mb-5 font-bold text-2xl">Employment History</h1>
          <textarea
            name="employment_history"
            className="input-box"
            placeholder="List of previous teaching jobs with references"
          />
        </section>
        {/* Agreement & Consent */}
        <section className="mb-10 w-full">
          <h1 className="mb-5 font-bold text-2xl">Agreement & Consent</h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" required />
              <label htmlFor="terms" className="font-medium text-sm">
                I agree to the Terms of Service and understand the guidelines
                for using this platform.
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="privacy" required />
              <label htmlFor="privacy" className="font-medium text-sm">
                I consent to the collection and processing of my personal data
                as outlined in the Privacy Policy.
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="compliance" required />
              <label htmlFor="compliance" className="font-medium text-sm">
                I confirm that I comply with all applicable educational
                regulations, including FERPA.
              </label>
            </div>
          </div>{" "}
        </section>{" "}
      </div>{" "}
      <SubmitBtn
        text="Submit & Continue"
        loader="Setting up profile... please wait"
      />
    </form>
  );
};

export default InstructorProfileSetUp;
