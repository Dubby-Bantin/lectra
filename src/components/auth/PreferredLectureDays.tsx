import Select, { MultiValue } from "react-select";
import { useTheme } from "next-themes";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Option } from "@/types";

interface PreferredLectureDaysProps {
  selectedDays: string[];
  setSelectedDays: Dispatch<SetStateAction<string[]>>;
}

const PreferredLectureDays: React.FC<PreferredLectureDaysProps> = ({
  selectedDays,
  setSelectedDays,
}) => {
  const { theme } = useTheme();

  const handleChange = (selectedOptions: MultiValue<Option>) => {
    setSelectedDays(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };

  useEffect(() => {
    console.log(selectedDays);
  }, [selectedDays]);

  return (
    <div className={theme === "dark" ? "darkTheme" : "lightTheme"}>
      <Select
        isMulti
        options={[
          { value: "sunday", label: "Sunday" },
          { value: "monday", label: "Monday" },
          { value: "tuesday", label: "Tuesday" },
          { value: "wednesday", label: "Wednesday" },
          { value: "thursday", label: "Thursday" },
          { value: "friday", label: "Friday" },
          { value: "saturday", label: "Saturday" },
          { value: "everyday", label: "Everyday" },
        ]}
        // styles={customStyles} // Apply custom styles
        placeholder="Select preferred lecture days"
        onChange={handleChange} // Capture selected options
      />
    </div>
  );
};

export default PreferredLectureDays;
