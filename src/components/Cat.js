import Usefetch from "../hooks/Usefetch";

const Cat = ({ setItem, menuItem, Filteritem }) => {
  const key = "PorNsbssWGT719UfIj07BezGGZ1kzBHK";
  const { error, isPending, data } =
    Usefetch(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${key}
      `);

  return (
    <div>
      {menuItem.map((val, id) => {
        return (
          <button key={id} onClick={() => Filteritem}>
            {val.section}
          </button>
        );
      })}
      <button onClick={() => setItem(data)}></button>
    </div>
  );
};

export default Cat;
