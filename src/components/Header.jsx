import { Link, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const toClose = location.pathname !== `${import.meta.env.VITE_EXPLORE_URL}`;

  return (
    <header
      className="bg-primary-solid d-flex justify-content-center align-items-center"
      style={{ height: "10vh" }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Logo />
            <Menu toClose={toClose} />
          </div>
        </nav>
      </div>
    </header>
  );
};

const Logo = () => {
  return (
    <Link
      className="navbar-brand fs-1"
      to={`${import.meta.env.VITE_HOME_URL}`}
      style={{
        fontFamily: "gagalin-regular",
        lineHeight: "1",
        cursor: "pointer",
      }}
    >
      <span style={{ color: "var(--primary-color-brown)" }}>Andorra</span>{" "}
      <span style={{ color: "#ff3131" }}>Eats</span>
    </Link>
  );
};

const Menu = ({ toClose }) => {
  return (
    <div className="justify-content-end">
      {!toClose ? <SearchIcon /> : <CloseIcon />}
    </div>
  );
};

const SearchIcon = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search");
  };
  return (
    <button
      className="btn btn-light btn-sm shadow-lg d-flex align-items-center justify-content-center rounded-circle"
      onClick={handleClick}
      style={{
        aspectRatio: "1/1",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="rgb(96, 49, 0)"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
    </button>
  );
};

const CloseIcon = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(`${import.meta.env.VITE_HOME_URL}`);
  };
  return (
    <button
      type="button"
      className="btn-close"
      aria-label="Close"
      onClick={handleClose}
    ></button>
  );
};
export default Navbar;
