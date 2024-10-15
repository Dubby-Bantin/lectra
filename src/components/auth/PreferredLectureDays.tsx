import Select, { StylesConfig, MultiValue } from "react-select";
import { useTheme } from "next-themes";
import { useEffect } from "react";

// Define type for options
interface Option {
  value: string;
  label: string;
}

const customStyles: StylesConfig<Option> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "var(--control-bg)", // Use CSS variable for dynamic background
    borderColor: state.isFocused
      ? "var(--focus-border)"
      : "var(--normal-border)", // Use CSS variables
    color: "var(--text-color)", // Text color from variable
    boxShadow: state.isFocused ? "0 0 0 1px var(--focus-border)" : undefined, // Ensure boxShadow is valid or undefined
    "&:hover": {
      borderColor: "var(--hover-border)", // Use hover variable
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "var(--menu-bg)", // Menu background color
    color: "var(--text-color)", // Menu text color
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "var(--focus-bg)" : "transparent", // Focused option background
    color: "var(--text-color)", // Text color
    "&:hover": {
      backgroundColor: "var(--hover-bg)", // Hover background
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--text-color)", // Text color for selected value
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "var(--placeholder-color)", // Placeholder text color
  }),
};

interface PreferredLectureDaysProps {
  selectedDays: string[];
  setSelectedDays: (days: string[]) => void;
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
        styles={customStyles} // Apply custom styles
        placeholder="Select preferred lecture days"
        onChange={handleChange} // Capture selected options
      />
    </div>
  );
};

export default PreferredLectureDays;
