import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.jsx'
import {HeroSection} from './App.jsx'
import './index.css'
import ResumeForm from './components/form.jsx';
import Templates from './pages/templates/templates.jsx';
import ResumeProvider from './components/resumeContext.jsx';
import Dashboard from './pages/dashboard/dashboard.jsx';
import Auth from './pages/auth/auth.jsx';

 const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<HeroSection/>
    },
    {
      path:"/build/:template",
      element:<ResumeForm/>
    },
    {
      path:"/templates",
      element:<Templates/>
    },{
 path:"/user/:id",
 element:<Dashboard/>

 }
  ]
 },{
  path:'/signIn',
  element:<Auth/>
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResumeProvider>
    <RouterProvider router={router}/>
    </ResumeProvider>
  </StrictMode>,
)
