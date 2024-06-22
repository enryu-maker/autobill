import React from "react";
import Sidebar from "./Sidebar";
import Pop from "./Pop";
import { useNavigate } from "react-router-dom";
import AddService from "./AddService";
import { useDispatch } from "react-redux";
import { getCustomers, searchCustomers } from "../../Store/actions";
import { ThreeDots } from "react-loader-spinner";
export default function Customers({ current, setCurrent }) {
  const [show, setShow] = React.useState(false);
  const [service, setService] = React.useState(false);
  const [data, setData] = React.useState([])
  const [query, setQuery] = React.useState("")

  const [loading, setLoading] = React.useState(false)
  const [id, setId] = React.useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getCustomers(setLoading, setData))
  }, [])
  return (
    <div className="flex w-[100vw] h-[100vh] justify-between font-Poppins ">
      {show ? <Pop setShow={setShow} setData={setData} /> : null}
      {service ? <AddService setService={setService} userID={id} /> : null}

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
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
          <button
            onClick={() => {
              dispatch(searchCustomers(setLoading, query, setData))
            }}
            className="bg-gradient-to-r font-Poppins from-purple-700 via-purple-600 to-purple-500 text-sm px-4 py-3 text-white rounded-md "
          >
            Search
          </button>
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
              {
                loading ?
                    <ThreeDots
                      visible={true}
                      height="50"
                      width="50"
                      color="#8E24AA"
                      radius="9"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  :
                  data?.map((item, index) => (
                    <tr key={index}>
                      <td class="px-4 py-4 text-sm text-gray-800">{item?.name}</td>
                      <td class="px-4 py-4 text-sm text-gray-800 uppercase">{item?.vehicle_number}</td>
                      <td class="px-4 py-4 text-sm text-gray-800">{item?.make}</td>
                      <td class="px-4 py-4 text-sm text-gray-800">{item?.last_service_date}</td>
                      <td class="px-4 py-4 text-sm text-gray-800">
                        <button onClick={() => {
                          navigate(`/record/${item?.name}`, {
                            state: item
                          })
                        }} class="text-purple-600 mr-4 underline">View</button>
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-800">
                        <button
                          onClick={() => {
                            setService(true)
                            setId(item?.id)
                          }}
                          class="bg-gradient-to-r font-Poppins from-purple-700 via-purple-600 to-purple-500 text-sm px-4 py-2 font-bold tracking-wider text-white">
                          New
                        </button>
                      </td>
                    </tr>
                  ))
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
