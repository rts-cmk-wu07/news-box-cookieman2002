import Usefetch from "../hooks/Usefetch";
import { useState } from "react";
import Section from "../components/Section";
import { TopicContext } from "../contexts/context";
const Indbox = ({ isActive, activeSections, setActiveSections }) => {
  const key = "PorNsbssWGT719UfIj07BezGGZ1kzBHK";
  const { error, isPending, data } =
    Usefetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}
    `);

  return (
    <div>
      <div>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && (
          <Section
            active={isActive}
            activeSections={activeSections}
            setActiveSections={setActiveSections}
            posts={data}
            title="inbox"
          />
        )}
      </div>
    </div>
  );
};

export default Indbox;
