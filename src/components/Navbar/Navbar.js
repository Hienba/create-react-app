import React, { useState } from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const cx = className.bind(styles);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className={cx(click ? "wrapper-active" : "wrapper")}>
      <nav className={cx("nav")}>
        <Link className={cx("nav-logo")} to="/">
          Brand
        </Link>
        <div className={cx("container")} onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={cx("nav-menu")}>
          <li className={cx("nav-items")}>
            <Link className={cx("nav-links")} to="/">
              Home
            </Link>
          </li>

          <li className={cx("nav-items")}>
            <Link className={cx("nav-links")} to="/main">
              Main
            </Link>
          </li>

          <li className={cx("nav-items")}>
            <Link className={cx("nav-links")} to="/">
              Services
            </Link>
          </li>

          <li className={cx("nav-items")}>
            <Link className={cx("nav-links")} to="/">
              Gallery
            </Link>
          </li>

          <li className={cx("nav-items")}>
            <Link className={cx("nav-links")} to="/">
              Feedback
            </Link>
          </li>
          <li className={cx("nav-items")}>
            <Link className={cx("nav-links")} to="/">
              Signin
            </Link>
          </li>
          <li className={cx("nav-items")}>
            <Link className={cx("nav-links")} to="/">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
      <div className={cx("content")}>
        <div>Responsive Navigation Menu Bar Design</div>
        <div>using only HTML [&] CSS</div>
      </div>
    </div>
  );
};
export default Navbar;
