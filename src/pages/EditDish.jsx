import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditDish({ dishes, setDishes }) {
  const { dishId } = useParams();
  const navigate = useNavigate();

  const [dishToEdit, setDishToEdit] = useState(
    dishes.find((dish) => dish.id === dishId)
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setDishes((prev) =>
      prev.map((dish) => {
        if (dish.id === dishId) {
          dish = dishToEdit;
        }
        return dish;
      })
    );
    navigate("/");
  };

  return (
    <div>
      <h1>Add Dish</h1>
      <div className="AddDish">
        <h4>Add a Dish</h4>

        <form onSubmit={handleSubmit}>
          {" "}
          <label>Image </label>
          <input
            type="url"
            name="image"
            onChange={(e) =>
              setDishToEdit((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={dishToEdit.name}
            onChange={(e) =>
              setDishToEdit((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label>Calories </label>
          <input
            type="text"
            name="calories"
            value={dishToEdit.calories}
            onChange={(e) =>
              setDishToEdit((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label>Servings: </label>
          <input
            type="number"
            name="servings"
            step={2}
            value={dishToEdit.servings}
            onChange={(e) =>
              setDishToEdit((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <button type="submit">Edit your dish!</button>
        </form>
      </div>
    </div>
  );
}

export default EditDish;
