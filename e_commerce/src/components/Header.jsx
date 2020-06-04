import React, { memo } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

import Logo from "../assets/BisoLogo.jpeg";

function areEqual(prevProps, nextProps) {}

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Biso Logo" />
          </Link>
        </div>

        <div className="callToActions">
          <ul>
            <li>
              <Link to="/auth">Registration</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default memo(Header, areEqual);
