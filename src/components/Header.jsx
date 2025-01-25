import { Link, useLocation, useNavigate } from "react-router";
import Logo from "./Logo";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const toClose = location.pathname !== `${import.meta.env.VITE_EXPLORE_URL}`;

  const handleClose = () => {
    navigate("/explore");
  };

  return (
    <header className="bg-primary-solid">
      <nav className="container d-flex py-3 align-items-center">
        <div className="flex-fill">
          <Logo />
        </div>
        {toClose ? (
          <div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
        ) : (
          <div>
            <Link
              className="btn btn-light shadow-lg text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: "3rem",
                height: "3rem",
                fontSize: "2rem",
              }}
              role="button"
              to={"/search"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="rgb(96, 49, 0)"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
