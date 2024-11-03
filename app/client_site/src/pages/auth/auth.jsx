import { useState } from "react";
import Loader from "../../components/loader.jsx";
import logo from "/ppLogo.png";
import {useSupa} from "../../hooks/useSupa.js";
import supabase from "../../Auth/supabase/supa.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Auth({ type = "SignUp" }) {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [showError,setShowError] = useState(null)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn,signUp,authError,user,loading,setAuthError} = useSupa();
  const navigate = useNavigate();

  
  const submit = async (data) => {
     setAuthError(null);
    if (type == "SignUp") {
 
       const {data:signupRes,error} =await signUp(data);
       
       if(signupRes.user){
       const {data:userrofileRes,error}=await supabase.from('user_profiles').update({full_name:data?.fullname}).eq('id',signupRes.user.id); 
       console.log(userrofileRes,error)
       setConfirmDialog(true);
       }else{
        console.error(error)
        setAuthError(error)
       }
      
   
     } else {
    const {data:signInRes,error}= await signIn(data);
      if(signInRes.user){navigate('/dashboard')}
      else { 
          setAuthError(error);
        }
      
   
    }
  };

  return (
    // wrapper
    <div className="flex justify-center items-center w-full h-[100vh] ">
      
      {loading && <Loader/>}
      
      {/* container */}
      <div className="w-full h-[90vh] bg-white   grid md:grid-cols-2 lg:grid-cols-2 md:w-[90%] lg:w-[70%]">
        {/* logo */}

        <div className="px-8 pt-10  w-full h-full">
          <div className="flex flex-col justify-center items-center gap-4 mb-10">
            <img src={logo} alt="logo" width={"64px"} height={"64px"} />
            <h2 className="text-primaryBlue text-2xl font-bold ">{type}</h2>
          </div>
          <form
            action=""
            method=""
            onSubmit={handleSubmit((data) => submit(data))}
          >
            <div className="mb-4">
            {authError && (<div className=" font-bold p-2 bg-red-100 text-red-600 rounded-lg border-red-600 border"> {authError?.message}</div>)}
              <label
                htmlFor="fullname"
                className="block text-primaryBlue font-medium mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                {...register("fullname", { required: true })}
                id="fullname"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
              />
              {errors.fullname && (
                <span className="text-red-600 text-sm">
                  Fullname is required
                </span>
              )}
              <label
                htmlFor="email"
                className="block text-primaryBlue font-medium mb-1"
              >
                Username
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
              />
              {errors.email && (
                <span className="text-red-600 text-sm">
                  Username is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-primaryBlue font-medium mb-1"
              >
                Password
              </label>
              <div className="relative ">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  id="password"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
                />
                <div
                  className="absolute top-[50%] translate-y-[-50%] right-3"
                  onClick={(e) => setShowPassword(!showPassword)}
                >
                  {showPassword ? "hide" : "show"}
                </div>
              </div>
              {errors.password && (
                <span className="text-red-600 text-sm">
                  Password is required
                </span>
              )}
            </div>
            {type=='SignIn' && <a href="" className="text-cyan-400">
              Forget password ?
            </a>}
            <div className="flex justify-center ">
              <input
                type="submit"
                value={type=='SignIn'?"Sign In":"Sign Up"}
                className="bg-primaryBlue text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition"
              />
            </div>
          </form>
          <div
            id="auth_providers"
            className="border border-gray-100 my-4 text-center"
          >
            <p>OR</p>
            <div className="flex items-center gap-2 ">
              <div className="bg-green-400 w-10 aspect-square rounded-full shadow-md"></div>
            </div>
          </div>
        </div>
        <div className="bg-gray-400 hidden md:block  lg:block">dsdsds</div>
      </div>
      <div
        id="confirmDialogWrapper"
        className="fixed w-full h-[100vh] top-0 left-0 backdrop-blur flex justify-center items-center"
        style={{ display: `${confirmDialog ? "flex" : "none"}` }}
      >
        <div className="w-[20rem] rounded-lg bg-white border-primaryBlue border ">
          <h2 className="font-bold border-b   border-primaryBlue px-4 py-2 ">
            check your e-mail
          </h2>
          <p className="text-gray-400 px-4 py-2 ">
            we have sent you an email, confirm that for sign up.
          </p>
        </div>
      </div>
    </div>
  );
}
