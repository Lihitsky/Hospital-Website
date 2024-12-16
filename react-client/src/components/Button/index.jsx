import { Link } from "react-router-dom";
import "./styles.scss";

export const Button = ({ text, href, style, type = "primary" }) => {
  return (
    <Link to={href}>
      <button className={`button ${type}`} style={style} type="submit">
        {text}
      </button>
    </Link>
  );
};
