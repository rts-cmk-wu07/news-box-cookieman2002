import Section from "../components/Section";
import Usefetch from "../hooks/Usefetch";
const Indbox = () => {
  const key = "PorNsbssWGT719UfIj07BezGGZ1kzBHK";
  const { error, isPending, data } =
    Usefetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}
    `);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <Section posts={data} title="Inbox" />}
    </div>
  );
};

export default Indbox;
