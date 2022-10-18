import NavBar from "./components/Home/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/NavBar";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
