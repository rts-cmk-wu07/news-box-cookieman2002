const Archived = ({ posts }) => {
  //   let topics = posts.map((topic) => topic.section);
//   console.log(topics);
let topics = posts.map((topic) => topic.section);

  // console.log(posts[0].multimedia[0].url);

  let sortedTopics = topics.filter((element, index) => {
    return topics.indexOf(element) === index;
  });
  return <div>
    {sortedTopics.map((element, index) => {
        
    })}

  </div>;
};

export default Archived;
