import Archived from "../components/Archived";
import UseStorage from "../hooks/Usestorage";

const Archive = () => {
  const { data } = UseStorage();
  console.log(data);
  return <div>{data && <Archived posts={data} />}</div>;
};

export default Archive;
