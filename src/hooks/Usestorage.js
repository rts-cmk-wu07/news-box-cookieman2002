import { useState } from "react";

const UseStorage = () => {
  const [data, setData] = useState(null);

  setData({ ...localStorage });
  console.log(data);
  return { data };
};

export default UseStorage;
