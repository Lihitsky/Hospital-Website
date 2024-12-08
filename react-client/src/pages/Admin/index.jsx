import "./styles.scss";

export const Admin = ({ children, title }) => {
  return (
    <div className="container-small">
      <div className="admin-menu-wrapper">
        <div className="title">{title}</div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
