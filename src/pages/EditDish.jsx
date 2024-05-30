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
      <h1 >Edit Item:</h1>
      <div className="EditDish">
        <form onSubmit={handleSubmit}>
          {" "}
          <label>Image </label>
          <input
          className="add-dish-input"
            type="url"
            name="image"
            value={dishToEdit.image}
            onChange={(e) =>
              setDishToEdit((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label>Name: </label>
          <input
          className="add-dish-input"
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
          className="add-dish-input"
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
          className="add-dish-input"
            type="number"
            name="servings"
            // step={0}
            value={dishToEdit.servings}
            onChange={(e) =>
              setDishToEdit((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <button className="edit-dish-button" type="submit">Edit your dish!</button>
        </form>
      </div>
    </div>
  );
}

export default EditDish;
