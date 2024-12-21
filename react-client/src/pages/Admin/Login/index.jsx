import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../../store/authReducer";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(loginThunk({ username, password }))
        .unwrap()
        .then(() => {
          navigate("/admin");
        });
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginTop: "30px" }}>
          <label htmlFor="username">Логин</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button
          className="button primary"
          style={{ width: "100%", marginTop: "25px" }}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Загрузка..." : "Увійти"}
        </button>
      </form>
    </div>
  );
};
