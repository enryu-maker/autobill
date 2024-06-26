import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IMAGE } from "../../Assets/Image";
import { useDispatch } from "react-redux";
import { getInfo } from "../../Store/actions";
import BillPop from "./BillPop";
import Delete from "./Delete";
import Edit from "./Edit";

export default function Record() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [data, setData] = React.useState({});
  const [dshow, setDshow] = React.useState(false);
  const [eshow, setEshow] = React.useState(false);
  const [current, setCurrent] = React.useState(0);
  const [current1, setCurrent1] = React.useState(0);
  console.log(data)
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getInfo(setLoading, setData, state?.id));
  }, []);
  return (
    <div className="h-[100%] w-[100%] flex  flex-col items-center space-y-8">
      {show ? (
        <BillPop setShow={setShow} data={data?.service[current]} cust={state} />
      ) : null}
      {dshow ? (
        <Delete
          setDshow={setDshow}
          id={state?.id}
          current={current1}
          setData={setData}
        />
      ) : null}
      {eshow ? (
        <Edit
          setShow={setEshow}
          id={state?.id}
          current={current1}
          setData={setData}
          data={data?.service[current]}
        />
      ) : null}
      <div className="h-[50px] flex justify-between items-center w-[78%] mt-5">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <img className="h-5" src={IMAGE.back} />
        </button>
        <div className="flex items-center justify-center font-black text-3xl">
          <img className="h-16" src={IMAGE.record} />
        </div>
        <button></button>
      </div>
      <div className="h-[180px] w-[78%] items-center justify-evenly flex shadow-md rounded-lg">
        <div className="flex justify-center items-center space-x-3">
          <img className="h-[120px]" src={IMAGE.man} />
          <div className="flex flex-col">
            <p className="font-Poppins text-2xl font-black">{state?.name}</p>
            <p className="font-Poppins text-base">#{state?.id}</p>
          </div>
        </div>
        <div className="h-[78%] w-[2px] bg-gray-300" />
        <div className="flex flex-col space-y-5">
          <div className="flex space-x-8">
            <p className=" text-lg font-bold text-gray-400 font-Poppins">
              Phone No. :{" "}
              <span className=" font-medium text-black">
                {state?.mobile_number}
              </span>
            </p>
            <p className=" text-lg font-bold text-gray-400 font-Poppins">
              Last Service. :{" "}
              <span className=" font-medium text-black">
                {state?.last_service_date}
              </span>
            </p>
          </div>
          <div className="flex space-x-8">
            <p className=" text-lg font-bold text-gray-400 font-Poppins">
              Vehical No. :{" "}
              <span className=" font-medium text-black uppercase">
                {state?.vehicle_number}
              </span>
            </p>
            <p className=" text-lg font-bold text-gray-400 font-Poppins">
              Make :{" "}
              <span className=" font-medium text-black">{state?.make}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="font-poppins w-[78%] overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-100 whitespace-nowrap">
            <tr>
              <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Total Cost
              </th>
              <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Advance
              </th>
              <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Due Balance
              </th>
              <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Invoice
              </th>
              <th class="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>

          <tbody class="bg-white divide-y divide-gray-200 whitespace-nowrap">
            {data?.service?.map((item, index) => (
              <tr>
                <td class="px-4 py-4 text-sm text-gray-800">{item?.date}</td>
                <td class="px-4 py-4 text-sm text-gray-800">
                  {item?.total_amount}
                </td>
                <td class="px-4 py-4 text-sm text-gray-800">
                  {item?.paid_amount}
                </td>
                <td class="px-4 py-4 text-sm text-gray-800">
                  {item?.due_amount}
                </td>
                <td class="px-4 py-4 text-sm text-gray-800">
                  <button
                    onClick={() => {
                      setShow(true);
                      setCurrent(index);
                    }}
                    class="bg-gradient-to-r font-Poppins from-purple-700 via-purple-600 to-purple-500 text-sm px-4 py-2 font-bold tracking-wider text-white"
                  >
                    View
                  </button>
                </td>
                <td class="px-4 py-4 text-sm text-gray-800">
                  <button
                    onClick={() => {
                      setEshow(true);
                      setCurrent1(item?.id);
                      setCurrent(index);
                    }}
                    class="text-blue-600 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setDshow(true);
                      setCurrent1(item?.id);
                    }}
                    class="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
