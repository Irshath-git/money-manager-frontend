import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Portal from "./Portal";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tracker from "./pages/Income Tracker/Tracker";
import Register from "./pages/Login/Register";

function App() {
  return (
    <div className="App w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tracker" element={<Tracker />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
