import { useResume } from "./resumeContext";
export default function ExperienceForm({
  experiences,
  register,
  remove,
  changeHandler,
  data,
}) {
  const { setResumeData, resumeData } = useResume();
  const remove_entry_from_actual_Data = (i) => {
    const str = data.exps[i].job_title;
    const filteredArray = resumeData.exps.filter(
      (item) => item.job_title != str
    );
    setResumeData((prev) => {
      return { ...prev, exps: [...filteredArray] };
    });
  };

  const ele = experiences.map((experience, index) => {
    return (
      <div
        key={index}
        className=" p-4 bg-gray-50  mb-6 rounded-xl  text-sm relative"
      >
        {experiences.length > 1 && (
          <button
            onClick={(e) => {
              e.preventDefault(); 
              remove_entry_from_actual_Data(index);   
              remove(index);
                      
            }}
            className="text-red-400  absolute top-1 right-3 bg-red-100 rounded-full  px-2 py-1 hover:bg-red-500 hover:text-white"
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        )}

        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-1 md:grid-rows-3 lg:grid-cols-2 lg:grid-rows-2">
          <div>
            <label htmlFor="job-title" className="label">
              Job Title
            </label>
            <input
              type="text"
              {...register(`exps.${index}.job_title`, { required: true })}
              placeholder="Enter your job title"
              className="inputField"
              onInput={() => changeHandler(data)}
            />
          </div>

          <div>
            <label htmlFor="company-name" className="label">
              Company Name
            </label>
            <input
              type="text"
              {...register(`exps.${index}.company_name`, { required: true })}
              placeholder="Enter company name"
              className="inputField"
              onInput={() => changeHandler(data)}
            />
          </div>

          <div className="col-span-2 lg:col-span-2 md:col-span-1">
            <label htmlFor="location" className="label">
              Location
            </label>
            <input
              type="text"
              {...register(`exps.${index}.location`, { required: true })}
              placeholder="City, Country"
              className="inputField"
              onInput={() => changeHandler(data)}
            />
          </div>
        </div>

        <div className="flex justify-between mt-4  text-gray-600 md:flex-col lg:flex-row">
          <div>
            <label htmlFor="start-date" className="label">
              Start Date
            </label>
            <input
              type="month"
              {...register(`exps.${index}.start_date`, { required: true })}
              className="inputField"
              onInput={() => changeHandler(data)}
            />
          </div>
          <div>
            <label htmlFor="end-date" className="label">
              End Date
            </label>
            <input
              type="month"
              id="end-date"
              {...register(`exps.${index}.end_date`)}
              className="inputField"
              onInput={() => changeHandler(data)}
            />
          </div>
          <div className="flex  justify-start items-end gap-2 inputField border-none">
            <input
              type="checkbox"
              id="current-job"
              {...register(`exps.${index}.present`)}
              className=" w-[1.25rem] h-[1.25rem]"
              onInput={() => changeHandler(data)}
            />
            <label
              htmlFor="current-job"
              className="text-green-600 font-semibold"
            >
              Present
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="job-description" className="label">
            Job Description
          </label>
          <textarea
            id="job-description"
            rows="4"
            placeholder="Describe your responsibilities"
            {...register(`exps.${index}.job_description`)}
            className="inputField"
            onInput={() => changeHandler(data)}
          ></textarea>
        </div>

        <div>
          <label htmlFor="employment-type" className="label">
            Employment Type
          </label>
          <select
            id="employment-type"
            {...register(`exps.${index}.employment_type`, { required: true })}
            className="inputField"
            onInput={() => changeHandler(data)}
          >
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Freelance</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>
      </div>
    );
  });
  return <>{ele}</>;
}
