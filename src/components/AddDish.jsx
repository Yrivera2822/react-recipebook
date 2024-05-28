import React, { useState } from "react";
import dishData from "../data.json";

function AddDish({ dishes, setDishes }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDish = {
      name,
      calories,
      image,
      servings,
    };
    console.log("New dish added here --->>", newDish);
    setDishes((prev) => [newDish, ...prev]);
    setName("");
    setCalories("");
    setServings("");
    setImage("");
  };

  return (
    <div className="add-dish-container">
      <form onSubmit={handleSubmit}>
        <span>Add a Dish</span>
        <div className="add-dish-form">
          <label>
            Dish Name:<br></br>
            <input
              type="text"
              placeholder="Dish Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>

          <label>
            Dish Image: <br></br>
            <input
              type="url"
              placeholder="Dish Image"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </label>

          <label>
            Calories:<br></br>
            <input
              type="text"
              placeholder="Calories"
              onChange={(e) => setCalories(e.target.value)}
              value={calories}
            />
          </label>

          <label>
            Servings:<br></br>
            <input
              type="text"
              placeholder="Servings"
              onChange={(e) => setServings(e.target.value)}
              value={servings}
            />
          </label>
        </div>

        <button type="submit">Add Dish</button>
      </form>
    </div>
  );
}

export default AddDish;
