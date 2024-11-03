import React, { useEffect, useState } from "react";
import logo from '/ppLogo.png'
import { Outlet ,useNavigate,NavLink, Link} from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import {useSupa} from "./hooks/useSupa.js";
import supabase from "./Auth/supabase/supa.js";
import AccountCenter from "./components/accountCenter.jsx";
import Loader from "./components/loader.jsx";

function App() {
 const {loading}=useSupa();
  if(loading) return <Loader/>
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Outlet/>
     
      <Footer/>
    </div>
  );
}

function Header() {
  const navigate=useNavigate();
  const [sideBar,setSideBar]=useState(false);
  const [accountCenter,setAccountcenter]= useState(false)
  const {signOut,user} =useSupa();
  const [fullname,setFullname]=useState("rashmi")

  const getUsername=async()=>{
      const {data,error}=await supabase.from('user_profiles').select('full_name').eq('id',user.id);
      
      if(data){
       
        setFullname(data[0].full_name)
      }
  }
 
  const accountBar= <><div className="w-8 aspect-square bg-red-400 text-center font-bold text-white rounded-full" onClick={()=> setAccountcenter(!accountCenter)}> {user?.email[0].toUpperCase()}</div> </>
  useEffect(()=>{
  
   getUsername();
  },[fullname])
  return (
    <header className="bg-white shadow sticky top-0 left-0" style={{zIndex:999}} >
      <div className="w-full px-2 py-4 flex justify-between items-center">
        <div className="flex justify-evenly items-end">
          <img src={logo} alt="logo" width={"48px"} height={"48px"} />
          <h1 className="text-3xl font-bold text-gray-400 -ml-3">
            erfect Profile
          </h1>
        </div>
        <div className="burger text-2xl rotate-[90deg] font-bold lg:hidden" onClick={(e)=>setSideBar(true)}>III</div>
        <div className={` lg:hidden sideBar fixed top-0 ${ sideBar?'right-[0%]':'right-[-100%]'} w-[40vw] h-[100vh] bg-white flex justify-center items-start text-xl pt-16 ` } style={{transition:'right .3s ease-out'}}>
          <button onClick={()=>setSideBar(false)} className="absolute right-6 top-6">X</button>
          <div className="">
            <div className={'flex flex-col gap-8 pt-16'}>
            <NavLink to="/">Home</NavLink>
            <NavLink  to={"/templates"}>Templates</NavLink>
            { !user && (<>
              <NavLink to="/signIn">Sign In</NavLink>
              <NavLink to="/signUp" className={"p-2 bg-primaryBlue text-white font-semibold hover:bg-opacity-[0.8] rounded-lg"}>Sign Up</NavLink>
          </>)}

            {user && <AccountCenter user={fullname} handlers={{signOut}}/>}
            
            </div>
        
          </div>
         
        </div>
        <div className="hidden lg:block ">
          <ul className="flex space-x-4 font-semibold text-gray-400  relative">
            <li className="hover:text-primaryBlue">
             
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li className=" hover:text-primaryBlue">
             <NavLink to="/templates">Templates</NavLink>
            </li>
           
           { !user && (<><li className=" hover:text-primaryBlue">
              <NavLink to="/signIn" className={'p-2 hover:bg-gray-200 font-semibold text-gray-400  rounded-lg'}>Sign In</NavLink>
            </li>
            <li className=" hover:text-primaryBlue">
              <NavLink to="/signUp" className={"p-2 bg-primaryBlue text-white font-semibold hover:bg-opacity-[0.8] rounded-lg"}>Sign Up</NavLink>
            </li></>)}
            {user && accountBar}
            {accountCenter && <div className="absolute top-[100%] right-0 w-[16rem] h-[11rem] border border-primaryBlue rounded-lg shadow-lg overflow-hidden bg-white">
              <AccountCenter user={fullname} handlers={{signOut}}/></div>}
           
          
           
            
          </ul>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const navigate =useNavigate();

  
  return (
    <>
      <section className="bg-[#47bbf0] text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Build Your Professional Resume Effortlessly
          </h2>
          <p className="text-xl mb-8">
            Create a standout resume in minutes with our easy-to-use online
            builder.
          </p>
          <button
            href="/build"
            className="bg-white text-[#47bbf0] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition"
           onClick={()=> navigate('/templates')}
          >
          Choose Template
          </button>
         
         </div>
      </section>
      <section className="grid grid-cols-2 p-4  h-fit">
        <div className=" flex justify-center items-center">
          <img
            src="./man-working-on-laptop.svg"
            alt="illustration"
            width={"80%"}
            height={"80%"}
          />
        </div>
        <div className=" flex justify-center items-center flex-col gap-4">
          <h2 className="text-[#4ec4fe] w-[80%] font-bold text-5xl">
            Perfect for Everyone
          </h2>
          <p className="w-[80%] text-gray-600 ">
            From recent graduates to seasoned professionals, PerfectProfile is
            designed to help you create a resume that stands out. Whether you
            need a resume for a job application, a portfolio showcase, or
            networking opportunities, our tool makes the process fast and easy.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2  h-fit ">
        
        <div className=" flex justify-center items-center  flex-col gap-4">
          <h2 className="text-[#4ec4fe] w-[80%] font-bold text-5xl">
           Why Us ?
          </h2>
        <div className="text-gray-600 mt-2">
          <p className="bulletPoints">Easy to Use 
            <span >Our intuitive interface makes resume building simple and stress-free.</span>
            </p>
          <p className="bulletPoints">Customizable Templates
          <span >Choose from a variety of modern, clean templates designed to impress.</span>
          </p>
          <p className="bulletPoints">Instant Download
          <span >Export your resume as a PDF, ready to send to potential employers.</span>
          </p>
          <p className="bulletPoints">Secure & Private
          <span >Your data is safe with us, and your information is never shared.</span>
          </p>
        </div>
        </div>
        <div className=" flex justify-center items-center ">
          <img
            src="./digital-contract.svg"
            alt="illustration"
            width={"80%"}
            height={"80%"}
          />
        </div>
      </section>

     <section className=" h-fit  p-4 steps ">
      <h2 className="text-[#4ec4fe]  font-bold text-4xl text-center mb-4">Just 3 Steps to go</h2>
      <div className="grid grid-cols-1 gap-6 items-center h-full md:grid-cols-3 lg:grid-cols-3 content-center">
      <div className=" howItsWorks">
      <i className="fa-regular fa-rectangle-list "></i>
         <h3>Enter Details</h3>
         <p>Simply fill out your information, including work experience, education, and skills.</p>
      </div>
      <div className="  howItsWorks">
      <i className="fa-solid fa-gears"></i>
       <h3>Customize the Look</h3>
       <p>Choose a template and adjust the design to fit your style</p>
      </div>
      <div className=" howItsWorks">
      <i className="fa-regular fa-share-from-square"></i>
       <h3>Download and Share</h3>
       <p>Your resume is ready to download and use in minutes.</p>
      </div>
      </div>
     </section>
     <section className="  bg-[#3fcbfff6] text-center p-4  ">
  <div> <a
            href="#build"
            className="bg-white text-[#47bbf0] font-semibold px-12 py-3 rounded-full shadow-md hover:bg-blue-100 transition"
          >
            Get Started
          </a></div>
     </section>
    
    </>
  );
}

const Footer=()=>{

  return(<>
  <footer className="  bg-[#3fcbfff6] flex p-2">
  <div className="contacts">
    <a href="#instagram"><i className="fa-brands  fa-instagram"></i></a>
    <a href="#instagram"><i className="fa-brands  fa-x"></i></a>
    <a href="#instagram"><i className="fa-brands  fa-github"></i></a>
    <a href="#instagram"><i className="fa-brands  fa-linkedin"></i></a>
  </div>
  </footer>
  </>)
}

export default App;
export {HeroSection,Header};
