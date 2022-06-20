import { useEffect, useState } from "react";

const UseStorage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ ...localStorage });
    });
  }, []);

  return { data };
};

export default UseStorage;
