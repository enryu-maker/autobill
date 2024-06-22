import React from "react";
import Sidebar from "./Sidebar";

export default function Main({ current, setCurrent }) {
  return (
    <div className="flex w-[100vw] h-[100vh] justify-between ">
      <div className="w-[20%]">
        <Sidebar current={current} setCurrent={setCurrent} />
      </div>
      <div className="  w-[80%] text-black p-5">hello</div>
    </div>
  );
}
