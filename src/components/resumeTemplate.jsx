import { memo, useEffect } from "react";
import { useResume } from "./resumeContext";


const  ResumeTemplate = ()=>{
 const{resumeData,course} =useResume()
 
    return(
        <>
   


    <div className="resume-container">
        <div className="header">
            <h1>{resumeData.personal?.fullName}</h1>
            <p>Frontend Developer</p>
            <p>{resumeData.personal?.email} | {resumeData.personal?.phone}</p>
        </div>

        <div className="section">
            <h2>Profile</h2>
            <p>
                {resumeData.personal?.summary}
            </p>
        </div>

        <div className="section">
            <h2>Skills</h2>
            <ul>
                {resumeData.skills.map((skill,index)=><li key={index}>{skill.skillName}</li>)}
                
            </ul>
        </div>

        <div className="section"> 
            <h2>Experience</h2>
            {resumeData.exps.map((exp,index)=>{
                return (
               
            <div className="job" key={index}>
                <h3>{exp.job_title}</h3>
                <p>{exp.company_name} | {exp.location}</p>
                <ul>
                    <li>{exp.job_description}.</li>
                   
                </ul>
            </div>
            
       
        
        )
            })}
            </div>

        <div className="section">  
            <h2>Education</h2>
            {resumeData.courses.map((course,index)=>{
                return(
                   
                <div className="education" key={index}>
                <h3>{course.course_name}</h3>
                <p>{course.institute}| {course.start_date} - {course.end_date}</p>
                </div>
                    
                )
            })}
          
           
        </div>

        
    </div>


        </>
    )
}

export default ResumeTemplate;