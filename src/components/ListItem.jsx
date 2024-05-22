import { useState } from "react";
import recipesData from "../data.json";

function ListItem() {
  const [dishes, setDishes] = useState(recipesData);
  const deleteDish = (dishId) => {
    const filteredDishes = dishes.filter((dish) => dish.id !== dishId
        
    );
    setDishes(filteredDishes);
  };

  return (
    <div>
      <h1>YOUR FAVORITE DISHES ARE HERE!</h1>
      <div className="all-dishes">
        {dishes.map((dish) => (
          <>
            <div className="dish-container" key={dish.id}>
              <img src={dish.image} className="dish-image" />
              <span>{dish.name}</span> <br />
              <span>Calories: {dish.calories}</span> <br />
              <span>Serving size: {dish.servings}</span>
              <button  onClick={()=> deleteDish(dish.id)} className="delete-btn" >Delete this dish</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default ListItem;

// {
//     "id": "9e7f0d61-aa6b-418a-b56a-6418d19e6e1d",
//     "name": "Pizza",
//     "calories": 400,
//     "image": "https://i.imgur.com/eTmWoAN.png",
//     "servings": 1
//   },
