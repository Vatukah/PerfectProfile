import { useEffect, useState ,useRef} from "react";
import { useForm, useFieldArray, set } from "react-hook-form";
import { useParams } from "react-router-dom";
import Course from "./courseForm";
import ExperienceForm from "./experienceForm";
import ResumeTemplate from "./resumeTemplate";
import { useResume } from "./resumeContext";
import MobilePreview from "./mobilePreview";
export default function ResumeForm() {

  const param= useParams();
  
  const [formHOlderActive, setFormHolderActive] = useState({
    personalForm: false,
    educationForm: false,
    experienceForm: false,
    skillForm: false,
  });
  const [mobilePreviewDailog,setMobilePreviewDailog]=useState(false);
  const [mobileScreen,setMobileScreen]=useState(false);
  const isOnline = window.navigator.onLine;
  const minus = isOnline ? <i className="fa-solid fa-minus"></i> : "-";
  const plus = isOnline ? <i className="fa-solid fa-plus"></i> : "+";
  const throttlingRef = useRef();

  const {resumeData:myData,updateResumeData:uData}=useResume();
  


  // update resume data

  const updateResumeData=(data)=>{
    clearTimeout(throttlingRef.current);
    throttlingRef.current =setTimeout(()=>{
uData(data);

    },400)
    
  }

 const  handleViewport=()=>{
  if(mobilePreviewDailog){
    document.body.style.overflow='hidden';
  }else{
    document.body.style.overflow='unset';
  }
  }

 useEffect(()=>{
  handleViewport();

 },[mobilePreviewDailog])

  return (
    <>
    <div className="grid grid-cols lg:grid-cols-[.6fr_1fr] md:grid-cols-[.6fr_1fr] -z-index-1 ">
     
      <div className="formSidebar  bg-white py-6 h-[100vh] overflow-y-auto shadow-lg" >
        <div className="flex justify-between md:justify-center lg:justify-center items-center px-2">
          <div className=" md:text-center lg:text-center">
        <h2 className="text-2xl font-semibold text-primaryBlue ">
          Build Your Resume
        </h2>
        <p className=" text-gray-600 mb-6">Fill the form</p></div>
        <div className="w-[40%] md:w-0 lg:w-0 overflow-hidden flex justify-end items-center p-2 md:p-0 lg:p-0">
          <button onClick={()=>setMobilePreviewDailog(!mobilePreviewDailog)}>preview</button>
        </div>
        </div>
        <div className="personalDetailFormHolder border-b border-primaryBlue">
          <div className={`flex justify-between w-full px-6 py-4 `}>
            <p className="font-semibold ">Personal Details</p>{" "}
            <button
              className="text-primaryBlue text-xl font-bold"
              onClick={() =>
                setFormHolderActive((prevState) => {
                  return {
                    ...formHOlderActive,
                    personalForm: !prevState.personalForm,
                  };
                })
              }
            >
              {formHOlderActive.personalForm ? minus : plus}
            </button>
          </div>
          <div
            className={`overflow-hidden ${
              formHOlderActive.personalForm ? "h-fit" : "h-[0px]"
            }`}
          >
            <PersonalDetails updateData={updateResumeData} activeStateHandler={setFormHolderActive}/>
          </div>
        </div>
        <div className="educationFormHolder border-b border-primaryBlue">
          <div className={`flex justify-between w-full  px-6 py-4 `}>
            <p className="font-semibold ">Educations Details</p>{" "}
            <button
              className="text-primaryBlue text-xl font-bold"
              onClick={() =>
                setFormHolderActive((prevState) => {
                  return {
                    ...prevState,
                    educationForm: !prevState.educationForm,
                  };
                })
              }
            >
              {formHOlderActive.educationForm ? minus : plus}
            </button>
          </div>
          <div
            className={`overflow-hidden ${
              formHOlderActive.educationForm ? "h-fit" : "h-[0px]"
            }`}
          >
            <Education updateData={updateResumeData}  activeStateHandler={setFormHolderActive}/>
          </div>
        </div>
        <div className="experienceFormHolder border-b border-primaryBlue">
          <div className={`flex justify-between w-full px-6 py-4 `}>
            <p className="font-semibold ">Experiences Details</p>{" "}
            <button
              className="text-primaryBlue text-xl font-bold"
              onClick={() =>
                setFormHolderActive((prevState) => {
                  return {
                    ...formHOlderActive,
                    experienceForm: !prevState.experienceForm,
                  };
                })
              }
            >
              {formHOlderActive.experienceForm ? minus : plus}
            </button>
          </div>
          <div
            className={`overflow-hidden ${
              formHOlderActive.experienceForm ? "h-fit" : "h-[0px]"
            }`}
          >
            <Experience updateData={updateResumeData} activeStateHandler={setFormHolderActive}/>
          </div>
        </div>
        <div className="skillFormHolder border-b border-primaryBlue">
          <div className={`flex justify-between w-full px-6 py-4 `}>
            <p className="font-semibold ">Skills Details</p>{" "}
            <button
              className="text-primaryBlue text-xl font-bold"
              onClick={() =>
                setFormHolderActive((prevState) => {
                  return {
                    ...formHOlderActive,
                    skillForm: !prevState.skillForm,
                  };
                })
              }
            >
              {formHOlderActive.skillForm ? minus : plus}
            </button>
          </div>
          <div
            className={`overflow-hidden ${
              formHOlderActive.skillForm ? "h-fit" : "h-[0px]"
            }`}
          >
            {/* <Skill /> */}
            <Skill updateData={updateResumeData} activeStateHandler={setFormHolderActive}/>
          </div>
        </div>
      </div>
      <div className={`previewBlock p-2 justify-center hidden md:flex lg:flex`}>
        
        <div className="w-full h-full relative">

       
<ResumeTemplate tempId={param.template}/>
   

       </div>
      </div>
    </div>
    <MobilePreview active={mobilePreviewDailog} activeHandler={setMobilePreviewDailog}/>
 </> );
}

const PersonalDetails = ({updateData,activeStateHandler}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({defaultValues:{
    personal:{
      fullName:'',
      email:'',
      phone:'',
      address:'',
      summary:''    
    }
  }});
  const formData = watch();
  const handleChange = (data) => {
    updateData(data);
   
  };
  return (
    <>
      <div className=" flex items-center justify-center bg-offWhite">
        <div className="w-full max-w-lg bg-white p-8  rounded-lg">
          <form  className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-primaryBlue font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                {...register(`personal.fullName`, { required: true})}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
                placeholder="John Doe"
                onInput={()=> handleChange(formData)}
              />
              {errors.fullName && (
                <span className="text-red-600 text-sm">
                  Full name is required
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-primaryBlue font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                {...register(`personal.email`, { required: true })}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
                placeholder="you@example.com"
                onInput={()=> handleChange(formData)}
              />
              {errors.email && (
                <span className="text-red-600 text-sm">Email is required</span>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-primaryBlue font-medium mb-1">
                Phone
              </label>
              <input
                type="text"
                {...register(`personal.phone`, { required: true })}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
                placeholder="(123) 456-7890"
                onInput={()=> handleChange(formData)}
              />
              {errors.phone && (
                <span className="text-red-600 text-sm">
                  Phone number is required
                </span>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-primaryBlue font-medium mb-1">
                Address
              </label>
              <input
                type="text"
                {...register(`personal.address`, { required: true })}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
                placeholder="123 Street Name, City, Country"
                onInput={()=> handleChange(formData)}
              />
              {errors.address && (
                <span className="text-red-600 text-sm">
                  Address is required
                </span>
              )}
            </div>

            {/* Summary */}
            <div>
              <label className="block text-primaryBlue font-medium mb-1">
                Summary
              </label>
              <textarea
                {...register(`personal.summary`, { required: true })}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
                placeholder="Brief summary about you..."
                onInput={()=> handleChange(formData)}
              />
              {errors.summary && (
                <span className="text-red-600 text-sm">
                  Summary is required
                </span>
              )}
            </div>

            
          </form>
          <div className="flex justify-end">
          <div className="closeDropDown text-primaryBlue font-semibold ml-auto cursor-pointer " onClick={()=>activeStateHandler((prev)=>{
            return {...prev,personalForm:!prev.personalForm}
          })}>close</div>  </div>
        </div>
      </div>
    </>
  );
};

const Education = ({updateData,activeStateHandler}) => {
 
  const isOnline = window.navigator.onLine;
  const plus = isOnline ? (
    <i className="fa-solid fa-plus "></i>
  ) : (
    <div className="text-xl  ">+</div>
  );

  const handleAddCourse = () => {
    append({
      course_name: "",
      institute: "",
      address: "",
      start_date: "",
      end_date: "",
      completed: "",
    });
  };
  const handleRemoveCourse = (Course) => {
    const filteredCourse = course.filter((course) => course != Course);
    setCourse(filteredCourse);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm({
    defaultValues: {
      courses: [
        {
          course_name: "",
          institute: "",
          address: "",
          start_date: "",
          end_date: "",
          status: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "courses",
  });

  const formData = watch();
  const handleChange = (data) => {
    updateData(data);
   
  };
  return (
    <section className=" px-4 py-8 max-w-lg">
      <form action="" method="post">
        <Course register={register} courses={fields} remove={remove} changeHandler={handleChange} data={formData}/>
      </form>
      <div className="flex  items-center">
        <button
          onClick={handleAddCourse}
          className="bg-primaryBlue text-white  font-semibold  rounded-full shadow-md hover:bg-blue-100 transition  w-[8%] aspect-square ml-auto"
        >
          {plus}
        </button>
        <div className="closeDropDown text-primaryBlue font-semibold ml-auto cursor-pointer" onClick={()=>activeStateHandler((prev)=>{
            return {...prev,educationForm:!prev.educationForm}
          })}>close</div>
      </div>
    </section>
  );
};

const Experience = ({updateData,activeStateHandler}) => {
  const isOnline = window.navigator.onLine;
  const plus = isOnline ? (
    <i className="fa-solid fa-plus "></i>
  ) : (
    <div className="text-xl  ">+</div>
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm({
    defaultValues: {
      exps: [
        {
          job_title: "",
          company_name: "",
          location: "",
          start_date: "",
          end_date: "",
          present: false,
          job_description: "",
          employment_type: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name: "exps" });
  const formData = watch();
  const handleChange = (data) => {
    updateData(data);
  };


  const handleAddExp = () => {
    append({
      job_title: "",
      company_name: "",
      location: "",
      start_date: "",
      end_date: "",
      present: false,
      job_description: "",
      employment_type: "",
    });
  };

  return (
    <section className="p-4 max-w-lg">
      <form >
        <ExperienceForm
          register={register}
          experiences={fields}
          remove={remove}
          changeHandler={handleChange}
          data={formData}
        />
      </form>
      {/* add button */}
      <div className="flex  items-center">
        <button
          onClick={handleAddExp}
          className="bg-primaryBlue text-white font-semibold shadow-lg rounded-full shadow-md hover:bg-blue-100 transition  w-[8%]  aspect-square ml-auto"
        >
          {plus}
        </button>
        <div className="closeDropDown text-primaryBlue font-semibold ml-auto cursor-pointer" onClick={()=>activeStateHandler((prev)=>{
            return {...prev,experienceForm:!prev.experienceForm}
          })}>close</div>
      </div>
    </section>
  );
};

const Summary = () => {
  return (
    <>
      <h3>summary</h3>
    </>
  );
};

const Skill = ({updateData,activeStateHandler}) => {
 
  const isOnline = window.navigator.onLine;
  const plus = isOnline ? (
    <i className="fa-solid fa-plus "></i>
  ) : (
    <div className="text-xl  ">+</div>
  );
  const [optional,setOptional]=useState(false);
  const { register, handleSubmit, control,watch } = useForm({
    defaultValues: {
      skills: [
        {
          skillName: "",
          proficiency: "",
          experience: "",
          description: "",
          certifications: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });
const { setResumeData, resumeData } = useResume();
  const formData = watch();
 
  const handleChange = (data) => {
    updateData(data);
    
  };
  
  const remove_entry_from_actual_Data = (i) => {
    const str=formData.skills[i].skillName;
  const filteredArray = resumeData.skills.filter(
      (item) => item.skillName != str
    );
    setResumeData((prev) => {
      return { ...prev, skills: [...filteredArray] };
    });
   
    
  };


  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-lg ">
      <form >
        {fields.map((item, index) => (
          <div
            key={item.id}
            className=" p-4 bg-gray-50  mb-6 rounded-xl  text-sm relative"
          >
            {/* Remove Skill */}
            {fields.length > 1 && (
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

            {/* Skill Name */}
            <div>
              <label className="label">Skill Name</label>
              <input
                type="text"
                {...register(`skills.${index}.skillName`, { required: true })}
                className="inputField"
                placeholder="Enter Skill Name (e.g., JavaScript)"
                onInput={()=>handleChange(formData)}
               
              />
            </div>
            <div className="flex justify-between mt-4  text-gray-600 md:flex-col lg:flex-row">
              {/* Proficiency Level */}
              <div>
                <label className="label">Proficiency Level</label>
                <select
                  {...register(`skills.${index}.proficiency`, {
                    required: true,
                  })}
                  className="inputField"
                  onInput={()=>handleChange(formData)}
                >
                  <option value="">Select Proficiency Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

              {/* Years of Experience */}
              <div>
                <label className="label">Years of Experience</label>
                <input
                  type="number"
                  {...register(`skills.${index}.experience`, {
                    required: true,
                  })}
                  className="inputField"
                  placeholder="Enter Years of Experience"
                  onInput={()=>handleChange(formData)}
                />
              </div>
            </div>

            {/* Skill Description */}
            <div className="flex p-4 justify-between">
              <p>Add more details</p>
              <div className={`text-primaryBlue font-semibold ${optional?'rotate-180':''} transition-transform`} onClick={()=>setOptional(!optional)}>v</div>
            </div>
            <div className={`optionalBlock  ${optional?'h-auto':'h-0'} overflow-hidden`}>
            <div>
              <label className="label">Skill Description (Optional)</label>
              <textarea
                {...register(`skills.${index}.description`)}
                className="inputField"
                placeholder="Describe how you applied this skill"
                onInput={()=>handleChange(formData)}
              />
            </div>

            {/* Certifications */}
            <div>
              <label className="label">Certifications (Optional)</label>
              <input
                type="text"
                {...register(`skills.${index}.certifications`)}
                className="inputField"
                placeholder="Enter relevant certifications"
                onInput={()=>handleChange(formData)}
              />
            </div>
            </div>
          </div>
        ))}
 </form>
        {/* Add Another Skill */}
        <div className="flex justify-center">
          <button
            onClick={() =>{
              append({
                skillName: "",
                proficiency: "",
                experience: "",
                description: "",
                certifications: "",
              })}
            }
            className="bg-primaryBlue text-white font-semibold  rounded-full shadow-md hover:bg-blue-100 transition  w-[8%] aspect-square ml-auto"
          >
            {plus}
          </button>
          <div className="closeDropDown text-primaryBlue font-semibold ml-auto cursor-pointer" onClick={()=>activeStateHandler((prev)=>{
            return {...prev,skillForm:!prev.skillForm}
          })}>close</div>
        </div>
        {/* sRxEWO4EUYYTmiuK   supaPass */}
    </div>
  );
};
