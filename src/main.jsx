import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ResumeForm from './components/form.jsx';
 const router = createBrowserRouter([{
  path:'/',
  element:<App/>
 },
 {
path:'/build',
element:<ResumeForm/>
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
 
  </StrictMode>,
)
