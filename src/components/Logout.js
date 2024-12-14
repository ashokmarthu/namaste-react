import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "./Firebase";
import { setUserDetails } from "../reducers/userSlice";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(setUserDetails(null));
      localStorage.removeItem("userDetails");
      navigate("/login");
    } catch (err) {
      console.log("Logout unsuccessful", err);
    }
  };
  useEffect(() => {
    handleLogout();
  }, []);

  return <div>Redirecting to Login......</div>;
};

export default Logout;
