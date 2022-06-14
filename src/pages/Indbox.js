import Section from "../components/Section";
import Usefetch from "../hooks/Usefetch";
import { useState } from "react";
const Indbox = () => {
  const key = "PorNsbssWGT719UfIj07BezGGZ1kzBHK";
  const { error, isPending, data } =
    Usefetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}
    `);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>
      <input type="text" placeholder="Search here" onChange={inputHandler} />
      <div input={inputText}>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && <Section posts={data} title="Inbox" />}
      </div>
    </div>
  );
};

export default Indbox;
