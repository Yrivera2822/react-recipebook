import dishData from "../data.json";
import { useParams, Link, Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function ItemDetails() {
  let { dishId } = useParams();
  console.log("This is the dish id using dishId ===>", dishId)
  const dishInfo = dishData.find((dish) => dish.id === dishId);
  console.log("This is the dish id ===>", dishInfo)

  return (
    <div>
      <h1>Dish Details</h1>
      
      <div>
        {!dishInfo && <Navigate to="/dishes"/> }
        {dishInfo && (
          <>
            <img className="detail-image" src={dishInfo.image} alt="" />
            <h2>Name: {dishInfo.name}</h2>
            <p>Calories per Serving: {dishInfo.calories}</p>
            <p>Servings: {dishInfo.servings}</p>
            <NavLink to="/">
            <button className="back-btn">
              Back
            </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
export default ItemDetails;

// {
//     "id": "9e7f0d61-aa6b-418a-b56a-6418d19e6e1d",
//     "name": "Pizza",
//     "calories": 400,
//     "image": "https://i.imgur.com/eTmWoAN.png",
//     "servings": 1
//   },
