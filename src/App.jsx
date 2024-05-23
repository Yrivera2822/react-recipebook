import "./App.css";
import Navbar from "./components/Navbar";
import ListItem from "./components/ListItem";
import ItemDetails from "./pages/ItemDetails";
import dishData from "./data.json";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
// import sidebar from './components/Sidebar'

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
          {/* <Route
            path="/recipes/:recipeID"
            element={<ListItem recipes={recipesData} />}
          /> */}

          <Route path="/ItemDetails/:dishId" element={<ItemDetails />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
    </div>
  );
}

export default App;

// /ItemDetails/${dish.id}