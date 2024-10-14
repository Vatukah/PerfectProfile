import { useResume } from "./resumeContext";

export default function Course({
  register,
  courses,
  remove,
  changeHandler,
  data,
}) {
  const { setResumeData, resumeData } = useResume();
  const remove_entry_from_actual_Data = (i) => {
    const str = data.courses[i].course_name;
    const filteredArray = resumeData.courses.filter(
      (item) => item.course_name != str
    );
    setResumeData((prev) => {
      return { ...prev, courses: [...filteredArray] };
    });
  };

  const courseEle = courses.map((course, index) => {
    return (
      <div
        key={course.id}
        className=" p-4 bg-gray-50  mb-6 rounded-xl  text-sm relative"
      >
        {courses.length > 1 && (
          <button
            className="text-red-400  absolute top-1 right-3 bg-red-100 rounded-full  px-2 py-1 hover:bg-red-500 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
               remove_entry_from_actual_Data(index);
               remove(index);
             
            }}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        )}

        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-1 md:grid-rows-3 lg:grid-cols-2 lg:grid-rows-2">
          <div>
            <label htmlFor="course" className="label">
              Course{" "}
            </label>
            <input
              type="text"
              {...register(`courses.${index}.course_name`)}
              className="inputField"
              onInput={() => changeHandler(data)}
            />
          </div>
          <div>
            <label htmlFor="course" className="label">
              School{" "}
            </label>
            <input
              type="text"
              {...register(`courses.${index}.institute`)}
              className="inputField"
              onInput={() => changeHandler(data)}
            />
          </div>
          <div className="col-span-2 lg:col-span-2 md:col-span-1">
            <label htmlFor="course" className="label">
              Address{" "}
            </label>
            <input
              type="text"
              {...register(`courses.${index}.address`)}
              className="inputField"
              onInput={() => changeHandler(data)}
            />
          </div>
        </div>
        <div className="flex justify-between mt-4  text-gray-600 md:flex-col lg:flex-row">
          <div>
            <label htmlFor={`${course}_startDate`} className="label">
              Start Date
            </label>
            <input
              type="date"
              {...register(`courses.${index}.start_date`)}
              className="inputField"
              onInput={() => changeHandler(data)}
            />
          </div>
          <div>
            <label htmlFor={`${course}_endDate`} className="label">
              End Date
            </label>
            <input
              type="date"
              {...register(`courses.${index}.end_date`)}
              className="inputField"
              onInput={() => changeHandler(data)}
            />
          </div>
          <div>
            <label htmlFor="dropDown" className="label">
              Status
            </label>
            <select
              name="courseStatus"
              id="courseStatus"
              className="inputField"
              {...register(`courses.${index}.status`)}
              onInput={() => changeHandler(data)}
            >
              <option value="completed">completed</option>
              <option value="pursuing">pursuing</option>
            </select>
          </div>
        </div>
      </div>
    );
  });
  return <>{courseEle}</>;
}
