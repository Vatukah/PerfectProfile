import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { HeroSection } from "./App.jsx";
import "./index.css";

import Templates from "./pages/templates/templates.jsx";

import Dashboard from "./pages/dashboard/dashboard.jsx";
import Auth from "./pages/auth/auth.jsx";
import Build from "./pages/build/build.jsx";
import PrivateRoute from "./components/privateRoute.jsx";
import AuthProvider from "./Auth/authProvider.jsx";
import ResumeProvider from "./components/resumeContext.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
      {
        path: "/dashboard",
        element:<PrivateRoute><Dashboard /></PrivateRoute>,
      },
    ],
  },
  {
    path: "/signUp",
    element: <Auth />,
  },
  {
    path: "/signIn",
    element: <Auth type="SignIn"/>,
  },
  {
    path: "/build/:template",
    element:<PrivateRoute><Build/></PrivateRoute>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
  <AuthProvider>
    <ResumeProvider>
      <RouterProvider router={router} />
   </ResumeProvider>
   </AuthProvider> 
  </StrictMode>
);
