import { Outlet } from "react-router-dom";
import NavBar from "../Home/NavBar";
import "./index.css";

const Layout = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="page"></div>
    </div>
  );
};

export default Layout;
