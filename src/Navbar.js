import { NavLink } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="Navlinks">
          <li>
            <NavLink exact to="/">
              Etusivu
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blogi</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Yhteystiedot</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
