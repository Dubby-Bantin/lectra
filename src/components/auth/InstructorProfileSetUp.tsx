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
// import CalendarComponent from "../common/CalendarComponent";
import { Checkbox } from "../ui/checkbox";
import Combo from "../common/Combo";
import { universities } from "@/utils/constants";
import ImageDropZone from "../common/ImageDropZone";
import { useRouter } from "next/navigation";
import { updateInstructorRef } from "@/lib/auth";
import PreferredLectureDays from "./PreferredLectureDays";
import CourseInput from "./ReactTags";
const InstructorProfileSetUp = ({ id }: { id: string }) => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  // const [birthDate, setBirthDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);
  const [university, setUniversity] = useState("");
  const [courses, setCourses] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const router = useRouter();

  return (
    <form
      action={async (formData) => {
        await updateInstructorRef(
          formData,
          phoneNumber,
          // birthDate,
          university,
          courses,
          selectedDays,
          id
        );

        formRef.current?.reset();
        router.push(`/instructor/dashboard/${id}`);
      }}
      ref={formRef}
      className="p-6 w-full flex flex-col items-center gap-5"
    >
      <div className="w-full text-gray-700 dark:text-white mb-5">
        {/* Personal Information */}
        <section className="mb-10">
          <h1 className="text-2xl font-bold mb-5">Personal Information</h1>
          <div className="flex flex-wrap gap-5">
            {/* Address */}
            <div className="w-full">
              <label
                htmlFor="Preferred Language"
                className="block text-sm font-medium mb-3"
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
            <div className="w-full flex gap-5">
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-3"
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
                  className="phone-input input-box"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium mb-3"
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
            <div className="w-full">
              <label className="block text-sm font-medium mb-3">
                Preferred Lecture Days
              </label>
              <PreferredLectureDays
                selectedDays={selectedDays}
                setSelectedDays={setSelectedDays}
              />
            </div>

            <div className="flex justify-center flex-col items-end w-full">
              <label
                htmlFor="profile_photo"
                className="block text-sm font-medium mb-3"
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
          <h1 className="text-2xl font-bold mb-5">Professional Information</h1>
          <div className="flex flex-wrap gap-5">
            {/* Degree */}
            <div className="w-full">
              <label
                htmlFor="degree"
                className="block text-sm font-medium mb-3"
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
            <div className="w-full flex gap-5">
              <div className="w-full">
                <label
                  htmlFor="major"
                  className="block text-sm font-medium mb-3"
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
                  className="block text-sm font-medium mb-3"
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
          <h1 className="text-2xl font-bold mb-5">
            Verification & Documentation
          </h1>
          <div className="flex flex-wrap gap-10 w-full justify-center mb-5">
            {/* ID Verification Upload */}

            <div className="w-full">
              <label
                htmlFor="teaching_certificate_photo"
                className="block text-sm font-medium mb-3"
              >
                Teaching Certificate
              </label>
              <ImageDropZone name="teaching_certificate_photo" />
            </div>

            <div className="w-full">
              <label
                htmlFor="id_verification_photo"
                className="block text-sm font-medium mb-3"
              >
                ID Verification
              </label>
              <ImageDropZone name="id_verification_photo" />
            </div>
          </div>

          <CourseInput courses={courses} setCourses={setCourses} />
        </section>
        {/* Employment History */}
        <section className="mb-10">
          <h1 className="text-2xl font-bold mb-5">Employment History</h1>
          <textarea
            name="employment_history"
            className="input-box"
            placeholder="List of previous teaching jobs with references"
          />
        </section>
        {/* Agreement & Consent */}
        <section className="mb-10">
          <h1 className="text-2xl font-bold mb-5">Agreement & Consent</h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" required />
              <label htmlFor="terms" className="text-sm font-medium">
                I agree to the Terms of Service and understand the guidelines
                for using this platform.
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="privacy" required />
              <label htmlFor="privacy" className="text-sm font-medium">
                I consent to the collection and processing of my personal data
                as outlined in the Privacy Policy.
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
      </div>{" "}
      <SubmitBtn
        text="Submit & Continue"
        loader="Setting up profile... please wait"
      />
    </form>
  );
};

export default InstructorProfileSetUp;
