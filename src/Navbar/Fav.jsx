import { useLocation } from "react-router-dom";

const Fav= () => {
  const location = useLocation();
  const { allTrends, favoriteIndices } = location.state || {};
console.log(allTrends);
console.log(favoriteIndices);
  // Filter favorited items based on indices
//   const favoriteItems = allTrends.filter((item, index) => favoriteIndices.includes(index));

  return (
    // <div>
    //   <h1>Favorites</h1>
    //   <ul>
    //     {favoriteItems.map((item, index) => (
    //       <li key={index}>{/* Render each favorited item */}</li>
    //     ))}
    //   </ul>
    // </div>

    <div></div>
  );
};

export default Fav;
