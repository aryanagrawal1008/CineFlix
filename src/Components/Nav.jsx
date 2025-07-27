import { useState } from "react";
import { Link } from "react-router-dom";
import  popcornIcon from "../assets/popcorn.svg";
import Banner from "./Banner";

const Nav = () => {
  const [active, setActive] = useState(0);
  const handleClick = (index) => {
    setActive(index);
  };
return (
  <>
    <div className="container" bis_skin_checked="1">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to={"/"}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            src={popcornIcon}
            alt="logo?"
            className="bi me-2"
            width="40"
            height="32"
            aria-hidden="true"
          />

          <span className="fs-4">CineFlix</span>
        </Link>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to={"/"}
              className={`nav-link ${active === 0 ? "active" : ""}`}
              onClick={() => handleClick(0)}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/watchlater"}
              className={`nav-link ${active === 1 ? "active" : ""}`}
              onClick={() => handleClick(1)}
            >
              Watch Later
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              About us
            </a>
          </li>
        </ul>
      </header>
    </div>
   
  </>
);
};
export default Nav;
