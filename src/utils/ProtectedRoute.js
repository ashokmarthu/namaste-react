import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store.user.userDetails);

  useEffect(() => {
    if (!userDetails) {
      navigate("/login");
    }
  }, [userDetails, navigate]);

  if (userDetails) {
    return children;
  }

  return null;
};
