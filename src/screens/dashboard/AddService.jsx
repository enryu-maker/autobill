import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createService } from "../../Store/actions";
import { ThreeDots } from "react-loader-spinner";
import BillPop from "./BillPop";
export default function AddService({ setService, userID }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const user = useSelector(state => state.Reducers.profile)
  const [data, setData] = React.useState([]);
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date}`;
  }
  const [inputs, setInputs] = React.useState([{ name: "", cost: 0 }]);
  const [inputs1, setInputs1] = React.useState([{ name: "", cost: 0 }]);
  const [advance, setAdvance] = React.useState("");
  const [km, setKm] = React.useState("");

  function totalprice() {
    let total = 0;
    for (let i = 0; i < inputs.length; i++) {
      total += parseInt(inputs[i].cost);
    }
    for (let i = 0; i < inputs1.length; i++) {
      total += parseInt(inputs1[i].cost);
    }
    return total;
  }

  const handleAddInput = () => {
    setInputs([...inputs, { name: "", cost: 0 }]);
  };

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name] = value;
    setInputs(onChangeValue);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };

  const handleAddInput1 = () => {
    setInputs1([...inputs1, { name: "", cost: 0 }]);
  };

  const handleChange1 = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs1];
    onChangeValue[index][name] = value;
    setInputs1(onChangeValue);
  };

  const handleDeleteInput1 = (index) => {
    const newArray = [...inputs1];
    newArray.splice(index, 1);
    setInputs1(newArray);
  };

  const [showb, setShowb] = React.useState(false)

  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] font-Poppins before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ">
      {showb ? (
        <BillPop setShow={setShowb} data={{
          name: "service" + getDate(),
          date: getDate(),
          labour: inputs,
          spare: inputs1,
          total_amount: totalprice(),
          due_amount: totalprice() - advance,
          paid_amount: advance,
          km: km
        }} cust={user} />
      ) : null}
      <div className="w-[88vw] h-[92vh] flex flex-col justify-evenly  bg-white shadow-lg rounded-lg p-6 relative">
        <div className="flex items-center pb-3 border-b border-gray-300">
          <h3 className="text-gray-800 text-xl font-bold flex-1">
            Add Service
          </h3>
          <svg
            onClick={() => {
              setService(false);
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

        <div className="flex flex-row justify-between">
          <div className="w-[45%] h-[75vh]">
            <h3 className="text-gray-800 py-5 text-xl font-bold flex-1">
              Labour Cost
            </h3>
            <div className=" flex justify-center w-[100%] h-[72%] overflow-y-auto pt-5 font-poppins">
              <div className="container flex flex-wrap justify-between">
                {inputs.map((item, index) => (
                  <div className="input_container space-y-2" key={index}>
                    <div className="flex space-x-3 w-[100%] items-center justify-between ">
                      <div className="">
                        <label
                          htmlFor="name"
                          className="block text-sm text-left  font-bold font-poppins text-gray-900"
                        >
                          Service Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          value={item.name}
                          onChange={(event) => handleChange(event, index)}
                          className="block w-[350px]  p-2 border-2 py-1.5  text-gray-900 focus:outline-purple-600"
                        />
                      </div>
                      <div className="">
                        <label
                          htmlFor="cost"
                          className="block text-sm text-left  font-bold font-poppins text-gray-900"
                        >
                          Price <span className="text-red-600">*</span>
                        </label>
                        <input
                          name="cost"
                          type="number"
                          value={item.cost}
                          onChange={(event) => handleChange(event, index)}
                          className="block w-[100px] px-2 border-2 py-1.5  text-gray-900 focus:outline-purple-600"
                        />
                      </div>
                      {inputs.length > 1 && (
                        <button
                          className="block   py-1.5 mt-5  text-gray-900 "
                          onClick={() => handleDeleteInput(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 fill-red-500 inline"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000"
                            />
                            <path
                              d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    <div className=" flex space-x-5 py-3">
                      {index === inputs.length - 1 && (
                        <>
                          <button
                            className="flex w-[30%] justify-center  bg-gradient-to-r font-Poppins from-purple-700 via-purple-600 to-purple-500 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins font-bold  leading-6 text-white"
                            onClick={() => handleAddInput()}
                          >
                            Add
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[45%] h-[75vh]">
            <h3 className="text-gray-800 py-5 text-xl font-bold flex-1">
              Spare Parts Cost
            </h3>
            <div className=" flex justify-center w-[100%] h-[72%] overflow-y-auto pt-5 font-poppins">
              <div className="container flex flex-wrap justify-between">
                {inputs1.map((item, index) => (
                  <div className="input_container space-y-2" key={index}>
                    <div className="flex space-x-3 w-[100%] items-center justify-between ">
                      <div className="">
                        <label
                          htmlFor="name"
                          className="block text-sm text-left  font-bold font-poppins text-gray-900"
                        >
                          Part Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          value={item.name}
                          onChange={(event) => handleChange1(event, index)}
                          className="block w-[350px]  p-2 border-2 py-1.5  text-gray-900 focus:outline-purple-600"
                        />
                      </div>
                      <div className="">
                        <label
                          htmlFor="cost"
                          className="block text-sm text-left  font-bold font-poppins text-gray-900"
                        >
                          Price <span className="text-red-600">*</span>
                        </label>
                        <input
                          name="cost"
                          type="number"
                          value={item.cost}
                          onChange={(event) => handleChange1(event, index)}
                          className="block w-[100px] px-2 border-2 py-1.5  text-gray-900 focus:outline-purple-600"
                        />
                      </div>
                      {inputs1.length > 1 && (
                        <button
                          className="block   py-1.5 mt-5  text-gray-900 "
                          onClick={() => handleDeleteInput1(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 fill-red-500 inline"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000"
                            />
                            <path
                              d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    <div className=" flex space-x-5 py-3">
                      {index === inputs1.length - 1 && (
                        <>
                          <button
                            className="flex w-[30%] justify-center bg-gradient-to-r font-Poppins from-purple-700 via-purple-600 to-purple-500 hover:bg-white hover:text-black hover:border-black hover:border-[1px] p-5 px-3 py-1.5 tracking-wider font-poppins font-bold  leading-6 text-white"
                            onClick={() => handleAddInput1()}
                          >
                            Add
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 py-2  flex justify-end gap-4">
          <div className="bg-gray-100 text-base px-4 py-3.5 rounded-md outline-[#333]">
            Total Cost : ₹{totalprice()}
          </div>
          <input
            type="number"
            value={advance}
            onChange={(event) => {
              setAdvance(parseInt(event.target.value));
            }}
            className="block w-[150px] px-2 border-2 py-1.5 rounded-md text-gray-900 focus:outline-purple-600"
            placeholder="Advance"
          />
          <div className="bg-gray-100 text-base px-4 py-3.5 rounded-md outline-[#333]">
            Balance : ₹{totalprice() - advance}
          </div>
          <input
            type="number"
            value={km}
            onChange={(event) => {
              setKm(parseInt(event.target.value));
            }}
            className="block w-[150px] px-2 border-2 py-1.5 rounded-md text-gray-900 focus:outline-purple-600"
            placeholder="KM"
          />
          <button
            onClick={() => {
              dispatch(
                createService(
                  setLoading,
                  {
                    name: "service" + getDate(),
                    date: getDate(),
                    labour: inputs,
                    spare: inputs1,
                    total_amount: totalprice(),
                    due_amount: totalprice() - advance,
                    paid_amount: advance,
                    km: km

                  },
                  userID
                )
              );
            }}
            type="button"
            className="bg-gradient-to-r font-Poppins from-purple-700 via-purple-600 to-purple-500 text-lg px-8 py-3 text-white "
          >
            {loading ? (
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
            ) : (
              "Save"
            )}
          </button>
          <button
            onClick={() => {
              setShowb(true)
            }}
            type="button"
            className="bg-gradient-to-r font-Poppins from-purple-700 via-purple-600 to-purple-500 text-lg px-8 py-3 text-white "
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
