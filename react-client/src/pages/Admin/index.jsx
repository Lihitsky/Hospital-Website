import { useSelector } from "react-redux";

import "./styles.scss";
import { Login } from "./Login";

export const Admin = ({ children, title }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return (
      <div className="container-small">
        <div className="admin-menu-wrapper">
          <div className="title">Авторизація</div>
          <div className="content">
            <Login />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-small">
      <div className="admin-menu-wrapper">
        <div className="title">{title}</div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
