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
import Blog from "./components/Blog/Blog";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import Contact from "./components/Contact/Contact";
import Checkout from "./components/Products/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Products */}
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          }
        />
        {/* <Route path="/product-1" element={<ProductDetails />} /> */}

        <Route
          path="/product/:productId"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/checkout" element={<Checkout />} />

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
