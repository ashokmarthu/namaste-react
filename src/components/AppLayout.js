import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Login from "./Login";
import Cart from "./Cart";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./RestaurantMenu";
import { ProtectedRoute } from "../utils/ProtectedRoute";
import Logout from "./Logout";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../reducers/userSlice";

const Home = () => {
  return (
    <>
      <Body />
      <Footer />
    </>
  );
};
const AppLayout = () => {
  const userDetails = localStorage.getItem("userDetails");
  const dispatch = useDispatch();
  if (userDetails) {
    dispatch(setUserDetails(JSON.parse(userDetails)));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="logout" element={<Logout />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Header />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="restaurants/:resId" element={<RestaurantMenu />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppLayout;
