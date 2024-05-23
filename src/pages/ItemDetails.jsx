import dishData from "../data.json";
import { useParams, Link, Navigate } from "react-router-dom";

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
            <img src={dishInfo.image} alt="" />
            <h2>{dishInfo.name}</h2>
            <p>{dishInfo.calories}</p>
            <p>{dishInfo.servings}</p>
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
