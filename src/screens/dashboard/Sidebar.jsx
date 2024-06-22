import React from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { IMAGE } from "../../Assets/Image";
import { useSelector } from "react-redux";
import { baseURL } from "../../Helper/Helper";

export default function Sidebar({ current, setCurrent }) {
  const navigate = useLocation();
  const user = useSelector(state=>state.Reducers.profile)
  console.log(user)
  return (
    <nav className="bg-white shadow-xl h-screen fixed w-[20%] top-0 left-0 pt-6 font-poppins overflow-auto">
      <div className="relative flex flex-col h-full">
        <a href="javascript:void(0)" className="text-center">
          <img
            src={IMAGE.logo}
            alt="logo"
            className="w-[160px] inline object-contain"
          />
        </a>

        <ul className="space-y-3 my-8 flex-1">
          <li>
            <a
              href="#/main"
              className={
                navigate.pathname === "/main"
                  ? "text-sm flex items-center text-purple-600 border-r-[5px] border-purple-600 bg-gray-100 px-8 py-4 transition-all"
                  : "text-black text-sm flex items-center hover:text-purple-600 hover:border-r-[5px] border-purple-600 hover:bg-gray-100 px-8 py-4 transition-all"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 512 512"
              >
                <path
                  d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                  data-original="#000000"
                />
              </svg>
              <span>Dashboard</span>
            </a>
          </li>
          {/* <li>
            <a
              href="javascript:void(0)"
              className="text-black text-sm flex items-center hover:text-purple-600 hover:border-r-[5px] border-purple-600 hover:bg-gray-100 px-8 py-4 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13 .5H3A2.503 2.503 0 0 0 .5 3v10A2.503 2.503 0 0 0 3 15.5h10a2.503 2.503 0 0 0 2.5-2.5V3A2.503 2.503 0 0 0 13 .5ZM14.5 13a1.502 1.502 0 0 1-1.5 1.5H3A1.502 1.502 0 0 1 1.5 13v-.793l3.5-3.5 1.647 1.647a.5.5 0 0 0 .706 0L10.5 7.207V8a.5.5 0 0 0 1 0V6a.502.502 0 0 0-.5-.5H9a.5.5 0 0 0 0 1h.793L7 9.293 5.354 7.647a.5.5 0 0 0-.707 0L1.5 10.793V3A1.502 1.502 0 0 1 3 1.5h10A1.502 1.502 0 0 1 14.5 3Z"
                  data-original="#000000"
                />
              </svg>
              <span>Sales</span>
            </a>
          </li> */}
          <li>
            <a
              href="#/customers"
              className={
                navigate.pathname === "/customers"
                  ? "text-sm flex items-center text-purple-600 border-r-[5px] border-purple-600 bg-gray-100 px-8 py-4 transition-all"
                  : "text-black text-sm flex items-center hover:text-purple-600 hover:border-r-[5px] border-purple-600 hover:bg-gray-100 px-8 py-4 transition-all"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 512 512"
              >
                <path
                  d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                  data-original="#000000"
                />
              </svg>
              <span>Customers</span>
            </a>
          </li>
        </ul>

        <div className="flex flex-wrap items-center cursor-pointer border-t border-gray-300 px-4 py-4">
          <img
            src={baseURL + user?.brand_image}
            className="w-9 h-9 rounded-full border-white"
          />
          <div className="ml-4">
            <p className="text-sm text-black font-Poppins font-black">{user?.brand_name}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
