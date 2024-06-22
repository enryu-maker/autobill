import React from "react";
import Sidebar from "./Sidebar";
import Pop from "./Pop";
import { useNavigate } from "react-router-dom";
import AddService from "./AddService";

export default function Customers({ current, setCurrent }) {
  const [show, setShow] = React.useState(false);
  const [service, setService] = React.useState(false);

  const navigate = useNavigate()
  return (
    <div className="flex w-[100vw] h-[100vh] justify-between font-Poppins ">
      {show ? <Pop setShow={setShow} /> : null}
      {service ? <AddService setService={setService} /> : null}

      <div className="w-[20%]">
        <Sidebar current={current} setCurrent={setCurrent} />
      </div>
      <div className="  w-[80%] p-5 space-y-6">
        <div className="flex w-[100%] space-x-5 items-center">
          <input
            name="search"
            type="text"
            autocomplete="text"
            required
            class="bg-gray-100 w-[60%] text-sm px-4 py-3.5 rounded-md outline-[#333]"
            placeholder="Search..."
          />
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="bg-gradient-to-r font-Poppins from-purple-700 via-purple-600 to-purple-500 text-sm px-4 py-3 text-white rounded-md "
          >
            Add customer
          </button>
        </div>
        <div class="font-poppins overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100 whitespace-nowrap">
              <tr>
                <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Vehical Number
                </th>
                <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Make
                </th>
                <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Last Service
                </th>
                <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Record
                </th>
                <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Service
                </th>
              </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 whitespace-nowrap">
              <tr>
                <td class="px-4 py-4 text-sm text-gray-800">Akif Khan</td>
                <td class="px-4 py-4 text-sm text-gray-800">MH15BE4997</td>
                <td class="px-4 py-4 text-sm text-gray-800">Spresso</td>
                <td class="px-4 py-4 text-sm text-gray-800">2024-06-15</td>
                <td class="px-4 py-4 text-sm text-gray-800">
                  <button class="text-purple-600 mr-4">View</button>
                </td>
                <td class="px-4 py-4 text-sm text-gray-800">
                  <button 
                  onClick={()=>{
                    setService(true)
                  }}
                  class="text-green-600 font-black tracking-wide">
                    +New
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
