import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [show, setShow] = useState(true);
  return (
    <div className="sidebar">
      <div className="link-container">
        <NavLink to="/">
          <p>
            <a href="#home">Home</a>
          </p>
        </NavLink>
        <NavLink to="/about">
          
          <p>
            <a href="#about">About</a>
          </p>
        </NavLink>
        <p>
          <a href="#contact">Contact</a>
        </p>
      </div>
    </div>
  );
}
export default Sidebar;

// const [show, setShow] = useState(true);
 
//   return (
//     <div className="App">
//       <button onClick={() => setShow(!show)}>
//         { show ? "Hide" : "Show"}
//       </button>
//       {show && <Counter />}
//     </div>
//   );