import "./App.css";
import Home from "./components/Home/home";
import Nav from "./components/Nav/Nav"
import Landing from "./components/Landing/landing";
import Create from "./components/Create/Create";
import DogDetail from "./components/Detail/Detail";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<DogDetail />} />
        <Route path="/createDog" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
