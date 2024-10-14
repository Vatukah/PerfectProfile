import { useState } from "react";
import logo from "/ppLogo.png";
export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    // wrapper
    <div className="flex justify-center items-center w-full h-[100vh]">
      {/* container */}
      <div className="w-full h-[90vh] bg-white   grid md:grid-cols-2 lg:grid-cols-2 md:w-[90%] lg:w-[70%]">
        {/* logo */}

        <div className="px-8 pt-10  w-full h-full">
          <div className="flex flex-col justify-center items-center gap-4 mb-10">
            <img src={logo} alt="logo" width={"64px"} height={"64px"} />
            <h2 className="text-primaryBlue text-2xl font-bold ">Sign In</h2>
          </div>
          <form action="" method="post">
            <div className="mb-4">
              <label
                htmlFor="auth_username"
                className="block text-primaryBlue font-medium mb-1"
              >
                Username
              </label>
              <input
                type="text"
                name="auth_username"
                id="auth_username"
                value={username}
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
                onInput={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="auth_password"
                className="block text-primaryBlue font-medium mb-1"
              >
                Password
              </label>
              <div className="relative ">
                <input
                  type={showPassword ? "text" : "password"}
                  name="auth_password"
                  id="auth_username"
                  value={password}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
                  onInput={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute top-[50%] translate-y-[-50%] right-3"
                  onClick={(e) => setShowPassword(!showPassword)}
                >
                  {showPassword ? "hide" : "show"}
                </div>
              </div>
            </div>
            <a href="" className="text-cyan-400">
              Forget password ?
            </a>
            <div className="flex justify-center ">
              <input
                type="submit"
                value="Sign In"
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
        <div
         
          className="bg-gray-400 hidden md:block  lg:block"
        >
            dsdsds
        </div>
      </div>
    </div>
  );
}
