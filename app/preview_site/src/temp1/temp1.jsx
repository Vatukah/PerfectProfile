
export default function Temp1({data}){

    return(
        <div className="resume-container border border-gray-300 p-6" id="resume-container">
  <div className="header ">
    <h1 >{data?.personal?.fullName}</h1>
    <p >Frontend Developer</p>
    <p >
      {data?.personal?.email} | {data?.personal?.phone}
    </p>
  </div>

  <div className="section ">
    <h2 >Profile</h2>
    <p >{data?.personal?.summary}</p>
  </div>

  <div className="section">
    <h2>Skills</h2>
    <ul>
      {data?.skills?.map((skill, index) => (
        <li key={index}>{skill.skillName}</li>
      ))}
    </ul>
  </div>

  <div className="section ">
    <h2 >Experience</h2>
    {data?.exps?.map((exp, index) => (
      <div className="job" key={index}>
        <h3 >{exp.job_title}</h3>
        <p >
          {exp.company_name} | {exp.location}
        </p>
        <ul >
          <li>{exp.job_description}</li>
        </ul>
      </div>
    ))}
  </div>

  <div className="section ">
    <h2 >Education</h2>
    {data?.courses?.map((course, index) => (
      <div className="education " key={index}>
        <h3>{course.course_name}</h3>
        <p >
          {course.institute} | {course.start_date} - {course.end_date}
        </p>
      </div>
    ))}
  </div>
</div>

    )
}