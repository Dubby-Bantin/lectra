import "react-tagsinput/react-tagsinput.css";
import TagsInput from "react-tagsinput";
import "@/styles/tags-input.css";
const CourseInput = ({
  courses,
  setCourses,
}: {
  courses: string[];
  setCourses: (newCourses: string[]) => void;
}) => {
  const handleChange = (newCourses: string[]) => {
    setCourses(newCourses);
  };

  return (
    <div className="w-full">
      <label htmlFor="courses" className="block text-sm font-medium mb-3">
        Courses you&apos;d like to teach:
      </label>
      <TagsInput
        value={courses}
        onChange={handleChange}
        inputProps={{
          placeholder: "Add a course and press Enter",
        }}
      />
    </div>
  );
};

export default CourseInput;
