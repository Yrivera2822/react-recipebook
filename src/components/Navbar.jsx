
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <input
        className="search-bar"
        type="text"
        placeholder="Search your favorite food"
      />
      <div className="access">
        <button className="log-in">Sign In</button>
        <button className="log-in" type="submit">
          Log in
        </button>
        <NavLink to="/">
          <button className="logo-btn">
            <img className="taste-image" src="./src/assets/taste.png" alt="" />
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
