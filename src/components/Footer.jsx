import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <h3>Nutrition hacks</h3>
          <p>Email:tastetheworl@gmail.com</p>
          <p>Phone:723-780-3903</p>
          <p>Address:787 Boulevard, Miami Gardens 00798</p>
        </div>
        <div className="footer-content">
          <h3>Quick Links</h3>
          <ul className="list">
            <li>
              <NavLink to="/">
                <a href="">Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <a href="">About</a>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <a href="">Contact</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-content ">
          <h3>Follow Us</h3>
          <ul className="social-media">
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="bottom-bar">
          <p>2024 Taste the World. All rights reserved</p>
      </div> */}
    </footer>
  );
}

export default Footer;
