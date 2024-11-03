import "./styles.scss";

// Types: header, dropdown, footer, common

export const Link = ({ text, href, type = "common" }) => {
  return (
    <a className={`link ${type}`} href={href}>
      {text}
    </a>
  );
};
