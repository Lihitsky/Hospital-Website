import "./styles.scss";

export const Button = ({ text, href, style, type = "primary" }) => {
  return (
    <button className={`button ${type}`} style={style} href={href}>
      {text}
    </button>
  );
};
