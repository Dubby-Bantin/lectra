import Select, { MultiValue } from "react-select";
import { useTheme } from "next-themes";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Option } from '@/types';

// Define type for options
interface PreferredLectureDaysProps {
  selectedDays: string[];
  setSelectedDays: Dispatch<SetStateAction<string[]>>;
}

const PreferredLectureDays: React.FC<PreferredLectureDaysProps> = ({
  selectedDays,
  setSelectedDays,
}) => {
  const { theme } = useTheme(); // Use theme context to detect light or dark mode

  // Handle change when user selects options
  const handleChange = (selectedOptions: MultiValue<Option>) => {
    setSelectedDays(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };

  // Log selected days when they change
  useEffect(() => {
    console.log(selectedDays); // Log the newly selected options
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
