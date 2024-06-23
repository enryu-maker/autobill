import React from "react";
import Sidebar from "./Sidebar";
import CustomLineChart from "./Chart";
import { PiCurrencyInrBold } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaCircleExclamation } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { getDashboard } from "../../Store/actions";

export default function Main({ current, setCurrent }) {
  const [data, setData] = React.useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    dispatch(getDashboard(setLoading, setData));
    console.log(data);
  }, []);
  return (
    <div className="flex w-[100vw] h-[100vh] justify-between scroll-x-hidden overflow-x-hidden">
      <div className="w-[20%]">
        <Sidebar current={current} setCurrent={setCurrent} />
      </div>
      <div className="w-[80%] text-black p-5 bg-gray-50">
        <div className="w-full h-fit flex flex-row justify-between">
          <div className="h-full w-[40vh] pl-8 flex flex-col bg-white shadow-md items-center  rounded-xl p-5">
            <div className="h-full w-full ">
              <p className="font-semibold font-Poppins text-5xl ">
                {data?.total_due_amount || 0}
              </p>
            </div>
            <div className="h-full w-full flex mt-2">
              <PiCurrencyInrBold className="text-2xl mr-2" />
              <p className="font-semibold font-Poppins text-xl">
                Total Due Amount
              </p>
            </div>
          </div>
          <div className="h-full w-[40vh] pl-8 flex flex-col bg-white shadow-md gap-0 justify-between rounded-xl p-5">
            <div className="h-full w-full ">
              <p className="font-semibold font-Poppins text-5xl ">
                {data?.customer_count}
              </p>
            </div>
            <div className="h-full w-full flex mt-2">
              <BsFillPeopleFill className="text-2xl mr-2" />
              <p className="font-semibold font-Poppins text-xl">
                Total Customers
              </p>
            </div>
          </div>
          <div className="h-full w-[40vh] pl-8 flex flex-col bg-white shadow-md items-center  rounded-xl p-5">
            <div className="h-full w-full ">
              <p className="font-semibold font-Poppins text-5xl ">
                {data?.customer_due_amount}
              </p>
            </div>
            <div className="h-full w-full flex mt-2">
              <FaCircleExclamation className="text-2xl mr-2" />
              <p className="font-semibold font-Poppins text-xl">
                Total Due Customers
              </p>
            </div>
          </div>
        </div>
        <div
          id="chart"
          className="bg-white shadow-lg rounded-xl p-8 h-2/3 my-5"
        >
          <CustomLineChart data={data?.chat} />
        </div>
      </div>
    </div>
  );
}
