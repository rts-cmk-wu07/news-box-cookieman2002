const card = ({item}) => {
    
    
    return ( <>
    {item.map((val) => {
        <div key={val.created_date}>
            <img src={val.multimedia[0].url} alt="" />
            <div>
                <h2>{val.title}</h2>
                <p>{val.created}</p>
            </div>
        </div>

    })}
    </> );
}
 
export default card;