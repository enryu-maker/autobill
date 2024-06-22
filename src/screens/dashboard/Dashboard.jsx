import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Cutsomer from "./Cutsomer";

export default function Dashboard() {
  const [current, setCurrent] = React.useState(0);
  function CurrentAdd(current, setCurrent) {
    switch (current) {
      case 0:
        return <Main current={current} setCurrent={setCurrent} />;
      case 1:
        return <Cutsomer current={current} setCurrent={setCurrent} />;
      default:
      // code block
    }
  }
  return <div className=" font-Poppins">{CurrentAdd(current, setCurrent)}</div>;
}
