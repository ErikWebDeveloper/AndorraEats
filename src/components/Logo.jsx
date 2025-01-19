import { Link } from "react-router";

const Logo = ({ emoji = "" }) => {
  return (
    <Link to={"/"} className="text-decoration-none">
    <h1
      className="display-1"
      style={{ fontFamily: "gagalin-regular", lineHeight: "1", cursor: "pointer" }}
    >
      {emoji} <span style={{ color: "var(--primary-color-brown)" }}>Andorra</span>{" "}
      <span style={{ color: "#ff3131" }}>Eats</span>
    </h1>
    </Link>
  );
};

export default Logo;
