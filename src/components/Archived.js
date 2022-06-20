const Archived = ({ posts }) => {
  let topics = posts.map((topic) => topic.section);

  let sortedTopics = topics.filter((element, index) => {
    return topics.indexOf(element) === index;
  });
  return <div>{sortedTopics.map((element, index) => {})}</div>;
};

export default Archived;
