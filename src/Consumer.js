import React, { useContext } from "react";
import { Data } from "./App";

const Consumer = () => {
  const data = useContext(Data);
  return <div>{data}</div>;
};

export default Consumer;
