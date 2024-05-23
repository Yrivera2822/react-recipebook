import { useState } from "react";
import dishData from "../data.json";
import { Link } from "react-router-dom";

function ListItem() {
  const [dishes, setDishes] = useState(dishData);
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
          {/* return() */}
            <div className="dish-container" key={dish.id}>
              
                <Link to={`/ItemDetails/${dish.id}`}  >
                
              <img src={dish.image} className="dish-image" /> </Link>
              <br />
              <span>{dish.name}</span>
              {/* <span>Calories: {dish.calories}</span> <br />
              <span>Serving size: {dish.servings}</span> */}
              
              <button  onClick={()=> deleteDish(dish.id)} className="delete-btn" >Delete this dish</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default ListItem;

