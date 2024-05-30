import React from "react";
import ListItem from "../components/ListItem";
import AddDish from "../components/AddDish";
import Footer from "../components/Footer";


function Dashboard({ dishes, setDishes }) {
  return (
    <div>
      <ListItem dishes={dishes} setDishes={setDishes} />
      <div>
      <AddDish dishes={dishes} setDishes={setDishes} /></div>
      <div>
      <Footer /></div>
    </div>
  );
}

export default Dashboard;
