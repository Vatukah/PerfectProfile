import { createContext, useContext, useEffect, useState } from "react";
const ResumeContext = createContext();
export default function ResumeProvider({children}) {
  const [resumeData, setResumeData] = useState({
    personal: {},
    courses: [],
    exps: [],
    skills: [],
  });

  const[course,setCourse]=useState([]);

  // Deep merge utility function
const deepMerge = (target, source) => {
    for (const key in source) {
      if (source[key] instanceof Array) {
        target[key] = [...source[key]]; // Replace or concatenate arrays as needed
      } else if (source[key] instanceof Object) {
        target[key] = deepMerge(target[key] || {}, source[key]); // Recursively merge objects
      } else {
        target[key] = source[key]; // Primitive values, directly assign
      }
    }
    return target;
  };
  const updateResumeData = (data) => {
    
    setResumeData((prevData) => {
   return {...prevData,...data}
    });
  };
  useEffect(()=>{},[resumeData])

  return(
    <ResumeContext.Provider value={{resumeData,updateResumeData,setResumeData,course,setCourse}}>

        {children}
    </ResumeContext.Provider>
  )
}
 const useResume=()=>{
    return useContext(ResumeContext);
}
export {useResume}
