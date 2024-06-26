import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomers } from "../../Store/actions";
import { ThreeDots } from "react-loader-spinner";

export default function Pop({ setShow, setData }) {
  const [focused, setFocused] = useState({});
  const [loading,setLoading] = React.useState(false)
  const [values, setValues] = useState({
    name: "",
    mobile_number: "",
    vehicle_number: "",
    make: "",
    model:""
  });

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    setFocused({ ...focused, [field]: values[field] !== "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch()

  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
        <div className="flex items-center pb-3 border-b border-gray-300">
          <h3 className="text-gray-800 text-xl font-bold flex-1">
            Add Customer
          </h3>
          <svg
            onClick={() => {
              setShow(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
            viewBox="0 0 320.591 320.591"
          >
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"
            ></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"
            ></path>
          </svg>
        </div>

        <div className="my-6 flex flex-col gap-5">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name")}
              className="block w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder=""
              autoComplete="off"
            />
            <label
              className={`absolute left-3 top-2 px-1 bottom-0 transition-all duration-200 transform ${
                focused.name || values.name
                  ? "-translate-y-6 top-0 bg-white text-indigo-500"
                  : "text-gray-500"
              } pointer-events-none sm:text-base sm:font-light`}
            >
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="mobile_number"
              value={values.mobile_number}
              onChange={handleChange}
              onFocus={() => handleFocus("mobile_number")}
              onBlur={() => handleBlur("mobile_number")}
              className="block w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder=""
              autoComplete="off"
            />
            <label
              className={`absolute left-3 top-2 px-1 bottom-0 transition-all duration-200 transform ${
                focused.mobile_number || values.mobile_number
                  ? "-translate-y-6 top-0 bg-white text-indigo-500"
                  : "text-gray-500"
              } pointer-events-none sm:text-base sm:font-light`}
            >
              Mobile
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="vehicle_number"
              value={values.vehicle_number}
              onChange={handleChange}
              onFocus={() => handleFocus("vehicle_number")}
              onBlur={() => handleBlur("vehicle_number")}
              className="block w-full uppercase px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder=""
              autoComplete="off"
            />
            <label
              className={`absolute left-3 top-2 px-1 bottom-0 transition-all duration-200 transform ${
                focused.vehicle_number || values.vehicle_number
                  ? "-translate-y-6 top-0 bg-white text-indigo-500"
                  : "text-gray-500"
              } pointer-events-none sm:text-base sm:font-light`}
            >
              Vehicle Number
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="make"
              value={values.make}
              onChange={handleChange}
              onFocus={() => handleFocus("make")}
              onBlur={() => handleBlur("make")}
              className="block w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder=""
              autoComplete="off"
            />
            <label
              className={`absolute left-3 top-2 px-1 bottom-0 transition-all duration-200 transform ${
                focused.make || values.make
                  ? "-translate-y-6 top-0 bg-white text-indigo-500"
                  : "text-gray-500"
              } pointer-events-none sm:text-base sm:font-light`}
            >
              Vehicle Make
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="model"
              value={values.model}
              onChange={handleChange}
              onFocus={() => handleFocus("model")}
              onBlur={() => handleBlur("model")}
              className="block w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder=""
              autoComplete="off"
            />
            <label
              className={`absolute left-3 top-2 px-1 bottom-0 transition-all duration-200 transform ${
                focused.model || values.model
                  ? "-translate-y-6 top-0 bg-white text-indigo-500"
                  : "text-gray-500"
              } pointer-events-none sm:text-base sm:font-light`}
            >
               Model
            </label>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
            onClick={() => setShow(false)}
          >
            Close
          </button>
          <button
            type="button"
              onClick={()=>{
                dispatch(addCustomers(setLoading,values,setData))
              }}
            className="bg-gradient-to-r font-Poppins from-purple-700 via-purple-600 to-purple-500 text-sm px-4 py-3 text-white rounded-md "
          >
                            {
                  loading ?
                    <ThreeDots
                      visible={true}
                      height="30"
                      width="30"
                      color="#ffffff"
                      radius="9"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                    :
                    "Save"
                }
          </button>
        </div>
      </div>
    </div>
  );
}
