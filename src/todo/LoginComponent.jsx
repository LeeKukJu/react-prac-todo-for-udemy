import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [username, setUsername] = useState("leekj");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();

  function handleSubmit() {
    if (username === "leekj" && password === "3546") {
      setSuccessMsg(true);
      setErrorMsg(false);
      navigate(`/welcome/${username}`);
    } else {
      setSuccessMsg(false);
      setErrorMsg(true);
    }
  }

  return (
    <div className="Login">
      <h1>Time to Login!</h1>
      {successMsg && (
        <div className="successMessage">Authenticated Successfully</div>
      )}
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
            lgoin
          </button>
        </div>
      </div>
    </div>
  );
}