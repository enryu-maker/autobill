import React from "react";
import { IMAGE } from "../../Assets/Image";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../Store/actions";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [data, setData] = React.useState({
    mobile_number: "",
    password: "",
  })
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)
  const dispatch = useDispatch()
  return (
    <div class="bg-gradient-to-r font-Poppins from-purple-900 via-purple-800 to-purple-600 text-[#333]">
      <div class="min-h-screen flex fle-col items-center justify-center lg:p-6 p-4">
        <div class="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
          <div class="max-md:text-center">
            <a href="javascript:void(0)">
              <img
                src={IMAGE.logo2}
                alt="logo"
                class="w-52 mb-10 inline-block"
              />
            </a>
            <h2 class="text-4xl font-extrabold lg:leading-[50px] text-white">
              Effortless Garage Billing Software
            </h2>
            <p class="text-sm mt-6 text-white">
              Immerse yourself in a hassle-free billing experience with AutoBill. Effortlessly manage your garage invoices and payments.
            </p>
            <p class="text-sm mt-10 text-white">
              Don't have an account{" "}
              <a
                href="javascript:void(0);"
                class="text-white font-semibold underline ml-1"
              >
                Contact Us
              </a>
            </p>
          </div>
          <form class="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto max-md:mx-auto w-full">
            <h3 class="text-3xl font-extrabold mb-12 max-md:text-center">
              Sign in
            </h3>
            <div>
              <input
                name="tel"
                type="tel"
                autocomplete="tel"
                required
                value={data?.mobile_number}
                onChange={(e) => {
                  setData({ ...data, mobile_number: e.target.value })
                }}
                class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
                placeholder="Phone"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                autocomplete="current-password"
                required
                value={data?.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value })
                }}
                class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
                placeholder="Password"
              />
            </div>
            <div class="!mt-10">
              <button
                onClick={() => {
                  dispatch(LoginAction(setLoading, data, navigate))
                }}
                type="button"
                class="w-full shadow-xl flex justify-center items-center py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-[#222] focus:outline-none"
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
                    "Log in"
                }

              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
