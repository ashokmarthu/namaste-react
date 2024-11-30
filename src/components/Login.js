import { signInWithGooglePopup } from "./Firebase";
import { setUserDetails } from "../reducers/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithGooglePopup();
      const user = res.user;
      dispatch(setUserDetails(user));
      localStorage.setItem("userDetails", JSON.stringify(user));
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };
 
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJhY2tncm91bmRzfGVufDB8fDB8fHww"
        alt="login-bg"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <button
        style={{
          position: "absolute",
          top: 300,
          left: 900,
          borderRadius: "4px",
          backgroundColor: "white",
          border: "none",
          cursor: "pointer",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
        }}
        onClick={signInWithGoogle}
      >
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
