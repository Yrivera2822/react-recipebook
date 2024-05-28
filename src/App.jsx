import "./App.css";
import Navbar from "./components/Navbar";
import ListItem from "./components/ListItem";
import ItemDetails from "./pages/ItemDetails";
import dishData from "./data.json";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useState } from "react";
import EditDish from "./pages/EditDish";

// import sidebar from './components/Sidebar'

function App() {
  const[ dishes, setDishes ] = useState (dishData);        
  return (
   <div>
    <Sidebar />
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={ <Dashboard dishes={dishes} setDishes={setDishes} /> } />
          {/* <Route
            path="/recipes/:recipeID"
            element={<ListItem recipes={recipesData} />}
          /> */}

          <Route path="/ItemDetails/:dishId" element={<ItemDetails />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/notfound" element={<NotFound />}/>
          <Route path="/editdish" element={<EditDish />}/>
        </Routes>
        
        {/* <Footer /> */}
    </div>
  );
}

export default App;

// /ItemDetails/${dish.id}