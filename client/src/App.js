import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Land from "./components/Land";
import { UserProvider } from "./UserContext";
// import ProtectedRoute from "./components/utils/ProtectedRoute";
import PrivateRoute from "./components/utils/ProtectedRoute";

function App() {
  const isAuthenticated = true;
  return (
    <Router>
      <UserProvider>
        {/* <SideBar /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Land />
              </PrivateRoute>
            }
          />{" "}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/test" element={<Home />}></Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
