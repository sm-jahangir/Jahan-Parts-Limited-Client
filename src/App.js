import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import Products from "./components/Dashboard/Products/Products";
import RequireAuth from "./components/Auth/RequireAuth";
import MyReview from "./components/Dashboard/MyReview/MyReview";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          }
        />
        <Route
          path="my-review"
          element={
            <RequireAuth>
              <MyReview />
            </RequireAuth>
          }
        />
      </Routes>
      <div className="extra__gap"></div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
