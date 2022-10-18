import "./index.css";
import Logo from "../Logo";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => (
  <div className="nav-bar">
    <div className="logo">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <div className="nav-routes">
      <Link to="about">
        <h4>What We Do</h4>
      </Link>
      <Link to="team">
        <h4>Team</h4>
      </Link>
      <Link to="analyze">
        <h4>Analyze</h4>
      </Link>
    </div>
  </div>
);

export default NavBar;
