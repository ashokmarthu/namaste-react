import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
export const ProtectedRoute = ({ children }) => {
  const userDetails = useSelector((store) => store.user.userDetails);
  console.log(userDetails,"fff")
  let navigate = useNavigate();
  if (!userDetails) {
    navigate("/login");
  }
  return children;
};
