import { useState } from "react";
import dishData from "../data.json";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import AddDish from "./AddDish";

function ListItem({ dishes, setDishes }) {
  const deleteDish = (dishId) => {
    const filteredDishes = dishes.filter((dish) => dish.id !== dishId);
    setDishes(filteredDishes);
  };

  return (
    <div className="parent-container">
      <h1>YOUR FAVORITE DISHES ARE HERE!</h1>
      <div className="all-dishes">
        {dishes.map((dish) => (
          <>
            {/* return() */}
            <div className="dish-container" key={dish.id}>
              <Link to={`/ItemDetails/${dish.id}`}>
                <img src={dish.image} className="dish-image" />{" "}
              </Link>
              <br />
              <span>{dish.name}</span>
              <button
                onClick={() => deleteDish(dish.id)}
                className="delete-btn"
              >
                Delete this dish
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default ListItem;
