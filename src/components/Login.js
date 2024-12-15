import { signInWithGooglePopup } from "./Firebase";
import { setUserDetails } from "../reducers/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = localStorage.getItem("userDetails");
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithGooglePopup();
      const user = res.user;
      dispatch(setUserDetails(user));
      localStorage.setItem("userDetails", JSON.stringify(user));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (userDetails) {
      dispatch(setUserDetails(JSON.parse(userDetails)));
      navigate("/");
    }
  }, [navigate, userDetails]);
  return (
    <div className="login">
      <img
        src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJhY2tncm91bmRzfGVufDB8fDB8fHww"
        alt="login-bg"
        className="login-bg"
      />
      <button className="login-btn" onClick={signInWithGoogle}>
        <img
          src="https://miro.medium.com/v2/resize:fit:1192/1*N_-g8XMglPH7AUSuOEywfw.png"
          alt="login-bg"
          style={{
            width: "300px",
            height: "auto",
            mixBlendMode: "normal",
          }}
        />
      </button>
    </div>
  );
};

export default Login;
