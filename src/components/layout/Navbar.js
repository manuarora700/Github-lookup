import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    // <nav className="nav bg-primary">
    //   <h1>
    //     <i className={icon} /> {title}
    //   </h1>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //   </ul>
    // </nav>
    <div className="margin-custom">
      <nav className="nav">
        <Link to="/" className="nav-logo is-active" active-color="orange">
          Github Lookup
        </Link>
        <Link to="/" className="nav-item left" active-color="green">
          Home
        </Link>
        <Link
          to="/about"
          className="nav-item"
          active-color="rebeccapurple left"
        >
          About
        </Link>
        <a
          href="https://www.github.com/manuarora700/Github-lookup"
          className="nav-item"
          active-color="rebeccapurple left"
        >
          View Source
        </a>
        <span className="nav-indicator"></span>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
