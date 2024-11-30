import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Login from "./Login";
import Cart from "./Cart";
import About from "./About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUserDetails } from "../reducers/userSlice";

const AppLayout = () => {
  const [loading, setLoading] = useState(true);
  const details = useSelector((store) => store.user.userDetails);
  const dispatch = useDispatch();
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  useEffect(() => {
    if (!details && userDetails) {
      dispatch(setUserDetails(userDetails));
    }
    setLoading(false);
  }, [details, userDetails, dispatch]);
  if (loading) {
    // You can show a loading spinner or placeholder while loading
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            details && details.stsTokenManager.accessToken ? (
              <>
                <Header />
                <Body />
                <Footer />
              </>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppLayout;
