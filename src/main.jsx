import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.jsx'
import {HeroSection} from './App.jsx'
import './index.css'
import ResumeForm from './components/form.jsx';
import Templates from './components/templates.jsx';
import ResumeProvider from './components/resumeContext.jsx';
 const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<HeroSection/>
    },
    {
      path:"/build",
      element:<ResumeForm/>
    },
    {
      path:"/templates",
      element:<Templates/>
    }
  ]
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResumeProvider>
    <RouterProvider router={router}/>
    </ResumeProvider>
  </StrictMode>,
)
