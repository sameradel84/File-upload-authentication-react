import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/;
    // console.log(passwordRegex.test(password));
    // if (!passwordRegex.test(password)) {
    //   setPasswordError(
    //     "password must be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number "
    //   );
    //   return;
    // } else {
    //   setPasswordError("");
    // }
    // Define the password regex

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        { email, password },
        { withCredentials: true }
      );
      setMessage(response.data.message);

      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      if (response.status === 200) {
        navigate("/welcome");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        {passwordError && <p style={{ color: "red" }}>{passwordError} </p>}
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default Login;
