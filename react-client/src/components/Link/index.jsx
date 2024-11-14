import { Link as RouterLink } from "react-router-dom";
import "./styles.scss";

// Types: header, dropdown, footer, common

export const Link = ({ text, href, type = "common" }) => {
  return (
    <RouterLink className={`link ${type}`} to={href}>
      {text}
    </RouterLink>
  );
};
