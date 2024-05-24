import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <div>
        <NavLink to="/">
          <p>
            <a href="#home">Home</a>
          </p>
        </NavLink>
        <NavLink to="/about">
          {" "}
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
