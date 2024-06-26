import React from "react";
import generatePDF, { Options } from "react-to-pdf";
import { IMAGE } from "../../Assets/Image";
import { useSelector } from "react-redux";
export default function Bill({ data, cust }) {
  const options = {
    filename: "bill.pdf",
    page: {
      margin: 5,
    },
  };
  const getTargetElement = () => document.getElementById("container");
  const downloadPdf = () => generatePDF(getTargetElement, options);
  const user = useSelector((state) => state.Reducers.profile);
  console.log("b",data)
  return (
    <div className="flex flex-col justify-center items-center font-Poppins">
      <button className="flex w-[30%] justify-center  bg-gradient-to-r font-Poppins my-5 from-purple-700 via-purple-600 to-purple-500 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins font-bold  leading-6 text-white" onClick={downloadPdf}>Download PDF</button>
      <div
        id="container"
        className=" flex flex-col justify-evenly p-5 w-[100%] h-[100%] items-center "
      >
        <p className=" font-Poppins text-xl font-bold tracking-widest underline">
          CASH / CREDIT MEMO
        </p>
        <p className=" font-Poppins text-6xl font-black">{user?.brand_name}</p>
        <p className=" font-Poppins text-lg py-5">
          Anand Nagar, Survey No. 704/1+2/22, in front of Atharva
          <br />
          Mangal Karyalaya Nashik - 422013 Mob :- {user?.mobile_number}
        </p>
        <p className=" font-Poppins text-xl font-bold tracking-widest self-end mt-10">
          Date : {data?.date}
        </p>
        <p className=" font-Poppins text-xl font-bold tracking-widest self-start">
          To, {cust?.name}
        </p>
        <div className="flex justify-between w-full py-5">
          <p className=" font-Poppins text-xl font-bold tracking-widest self-start">
            Vehicle No :{" "}
            <span className=" uppercase"> {cust?.vehicle_number}</span>{" "}
          </p>
          <div className="flex space-x-5">
          <p className=" font-Poppins text-xl font-bold tracking-widest self-start">
            KM: {data?.km}
          </p>
          <p className=" font-Poppins text-xl font-bold tracking-widest self-start">
            Make: {cust?.make}
          </p>
          <p className=" font-Poppins text-xl font-bold tracking-widest self-start">
            Model: {cust?.model}
          </p>
          </div>
          
        </div>
        <h3 className="text-gray-800 text-3xl py-5 font-bold self-start ">
          Labour Charges
        </h3>
        <div class="font-poppins overflow-x-auto py-5">
          <table class="w-[92vw] border-2 divide-y divide-gray-200 ">
            <thead class="bg-gray-100 whitespace-nowrap">
              <tr>
                <th class="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
                  Sr. No.
                </th>
                <th class="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
                  Particulars
                </th>
                <th class="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            {data?.labour?.map((item, index) => (
              <tbody class="bg-white divide-y divide-gray-200 whitespace-nowrap">
                <tr>
                  <td class="px-4 py-4 text-base text-gray-800">{index + 1}</td>
                  <td class="px-4 py-4 text-base text-gray-800">
                    {item?.name}
                  </td>
                  <td class="px-4 py-4 text-base text-gray-800">
                    ₹ {item?.cost}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <h3 className="text-gray-800 text-3xl py-5 font-bold self-start ">
          Spare Part Charges
        </h3>
        <div class="font-poppins overflow-x-auto py-5">
          <table class="w-[92vw] border-2 divide-y divide-gray-200">
            <thead class="bg-gray-100 whitespace-nowrap">
              <tr>
                <th class="px-4 py-4 text-left text-lg font-semibold text-gray-500 uppercase tracking-wider">
                  Sr. No.
                </th>
                <th class="px-4 py-4 text-left text-lg font-semibold text-gray-500 uppercase tracking-wider">
                  Particulars
                </th>
                <th class="px-4 py-4 text-left text-lg font-semibold text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            {data?.spare?.map((item, index) => (
              <tbody class="bg-white divide-y divide-gray-200 whitespace-nowrap">
                <tr>
                  <td class="px-4 py-4 text-base text-gray-800">{index + 1}</td>
                  <td class="px-4 py-4 text-base text-gray-800">
                    {item?.name}
                  </td>
                  <td class="px-4 py-4 text-base text-gray-800">
                    ₹ {item?.cost}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="flex w-[100%]   items-center justify-between pt-10">
            <p className=" font-Poppins text-2xl self-end uppercase">
              FOR {user?.brand_name}
            </p>
            <div class="font-poppins  overflow-x-auto ">
              <table class=" w-[450px] border-2 divide-y divide-gray-200">
                <thead class="bg-gray-100 whitespace-nowrap">
                  <tr>
                    <th class="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
                      Total Amount
                    </th>
                    <th class="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
                      {data?.total_amount}
                    </th>
                  </tr>
                  <tr>
                    <th class="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
                      Advance Amount
                    </th>
                    <th class="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
                      {data?.paid_amount}
                    </th>
                  </tr>
                  <tr>
                    <th class="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
                      Net Balance
                    </th>
                    <th class="px-4 py-4 text-left text-xl font-semibold text-gray-500 uppercase tracking-wider">
                      {data?.due_amount}
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center font-black text-3xl">
          powered by <img src={IMAGE.logo} />
        </div>
      </div>
    </div>
  );
}
