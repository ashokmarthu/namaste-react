import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Login from "./Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
const AppLayout = () => {
  const details = useSelector((store) => store.user.userDetails);
  console.log(details, "details");
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
      </Routes>
    </BrowserRouter>
  );
};

export default AppLayout;
