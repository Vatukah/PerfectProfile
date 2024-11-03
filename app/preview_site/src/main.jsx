import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Template1 from './App.jsx'
import './index.css'
const data={
  "personal": {
      "fullName": "Anupam Kumar",
      "email": "alemo.nck@gmail.com",
      "phone": "09701001633",
      "address": "Amar Shaheed Jeet Bahadur Colony, Banjarawala , Kargi chowk",
      "summary": ""
  },
  "courses": [
      {
          "course_name": "BSc IT",
          "institute": "ITM",
          "address": "",
          "start_date": "2024-10-23",
          "end_date": "2024-10-30",
          "status": ""
      }
  ],
  "exps": [
      {
          "job_title": "frontend",
          "company_name": "Google",
          "location": "Mumbai, India",
          "start_date": "2024-05",
          "end_date": "",
          "present": false,
          "job_description": "",
          "employment_type": ""
      }
  ],
  "skills": [
      {
          "skillName": "javascript",
          "proficiency": "",
          "experience": "",
          "description": "",
          "certifications": ""
      },
      {
          "skillName": "Html",
          "proficiency": "",
          "experience": "",
          "description": "",
          "certifications": ""
      }
  ]
}
const router= createBrowserRouter([{
    path:'/:id',
    element:<Template1/>
},
{
    path:'/',
    element:<Template1/>
}])

createRoot(document.getElementById('resume-preview-container')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
