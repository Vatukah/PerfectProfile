export default function Temp3({data}){
    return(
        <div className="resume-container border border-gray-300 p-6" id="resume-container">
  <div className="header bg-blue-500 p-4 text-white text-center">
    <h1 className="text-4xl font-bold">{data?.personal?.fullName}</h1>
    <p className="text-lg">Frontend Developer</p>
    <p className="text-sm">
      {data?.personal?.email} | {data?.personal?.phone}
    </p>
  </div>

  <div className="section mt-6">
    <h2 className="text-2xl font-semibold border-b-2 border-blue-500">Profile</h2>
    <p className="mt-4 text-gray-700">{data?.personal?.summary}</p>
  </div>

  <div className="section mt-6">
    <h2 className="text-2xl font-semibold border-b-2 border-blue-500">Skills</h2>
    <ul className="list-disc list-inside mt-4 text-gray-700">
      {data?.skills?.map((skill, index) => (
        <li key={index}>{skill.skillName}</li>
      ))}
    </ul>
  </div>

  <div className="section mt-6">
    <h2 className="text-2xl font-semibold border-b-2 border-blue-500">Experience</h2>
    {data?.exps?.map((exp, index) => (
      <div className="job mt-4" key={index}>
        <h3 className="text-lg font-medium">{exp.job_title}</h3>
        <p className="text-gray-600">
          {exp.company_name} | {exp.location}
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>{exp.job_description}</li>
        </ul>
      </div>
    ))}
  </div>

  <div className="section mt-6">
    <h2 className="text-2xl font-semibold border-b-2 border-blue-500">Education</h2>
    {data?.courses?.map((course, index) => (
      <div className="education mt-4" key={index}>
        <h3 className="text-lg font-medium">{course.course_name}</h3>
        <p className="text-gray-600">
          {course.institute} | {course.start_date} - {course.end_date}
        </p>
      </div>
    ))}
  </div>
</div>

    )
}