import React from "react";
import ListItem from "../components/ListItem";
import AddDish from "../components/AddDish";
import Footer from "../components/Footer";


function Dashboard({ dishes, setDishes }) {
  return (
    <div>
      <ListItem dishes={dishes} setDishes={setDishes} />
      <AddDish dishes={dishes} setDishes={setDishes} />
      <Footer />
    </div>
  );
}

export default Dashboard;
