import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "./Firebase";
import { setUserDetails } from "../reducers/userSlice";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const photoURL = useSelector((store) => store.user.userDetails.photoURL);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(setUserDetails(null));
      localStorage.removeItem("userDetails");
      navigate("/");
    } catch (err) {
      console.log("Logout unsuccessful", err);
    }
  };
  return (
    <div className="logout-fn">
      <img
        src={photoURL}
        width="30px"
        height="30px"
        alt="food-logo"
        style={{ borderRadius: "2px", objectFit: "cover" }}
      />
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
