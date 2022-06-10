import { useEffect, useState } from "react";
const Usefetch = (url) => {
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("could not fetch");
          }
          return response.json();
        })
        .then((data) => {
          setData(data.results);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          setPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default Usefetch;
