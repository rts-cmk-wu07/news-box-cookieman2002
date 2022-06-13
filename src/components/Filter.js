const Filteritem = (curcat) => {
    const newItem = posts.filter((newVal) => {
      return newVal.section === curcat;
    });
    setItem(newItem);
  };
 
export default Filteritem;