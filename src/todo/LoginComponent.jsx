import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function LoginComponent() {
  const [username, setUsername] = useState("leekj");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleSubmit() {
    if (authContext.login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      setErrorMsg(true);
    }
  }

  return (
    <div className="Login">
      <h1>Time to Login!</h1>
      {errorMsg && (
        <div className="errorMessage">
          Authenticated Failed. Please check your credentials.
        </div>
      )}

      <div className="LoginForm">
        <div>
          <label htmlFor="username">User Name: </label>
          <input
            type="text"
            name="username"
            value={username}
            id="username"
            onChange={(evt) => {
              setUsername(evt.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            name="password"
            id=""
            onChange={(evt) => {
              setPassword(evt.target.value);
            }}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            login
          </button>
        </div>
      </div>
    </div>
  );
}