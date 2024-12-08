import { Link as RouterLink } from "react-router-dom";
import "./styles.scss";

export const Link = ({ text, href, type = "common", onClick = null }) => {
  return (
    <RouterLink
      className={`link ${type}`}
      to={href}
      onClick={onClick ? (e) => onClick(e) : undefined}
    >
      {text}
    </RouterLink>
  );
};
