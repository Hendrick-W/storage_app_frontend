import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
// import {getUserProfile} from "../store/actions/user"
import { Link } from "react-router-dom";
import {
  Button,
  NavDropdown,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faSignOutAlt,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

import logo from "./asset/logo.png";

const Header = (props) => {
  const token = localStorage.getItem("token");

  const textStyle = {
    fontSize: "15px",
    fontWeight: "700",
    textAlign: "center",
    color: "#445e6b",
    margin: "0",
  };
  const signoutIcon = (
    <FontAwesomeIcon icon={faSignOutAlt} style={{ color: "#fde84d" }} />
  );
  const settingIcon = (
    <FontAwesomeIcon icon={faTools} style={{ color: "#fde84d" }} />
  );
  const pic = (
    <FontAwesomeIcon
      icon={faUserCircle}
      size="2x"
      style={{ color: "#fde84d" }}
    />
  );
  const signOut = () => {
    localStorage.clear("token");
    window.location.reload();
  };

  return (
    <header>
      <div className="navbar-container w-100 shadowEffect">
        <div className="navbar">
          <Link
            to={`/new`}
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          >
            <img
              src={logo}
              alt="docpets logo"
              className="navbar-logo"
            ></img>

          </Link>
          <div className="navbar-login-right">

            <Link to={`/signup`} className="navbar-text">
              <h3 className="navbar-h3">Chat</h3>
            </Link>
            {token ? (
              <NavDropdown
                title={<>{pic} <span className="mx-2 my-0" style={{ fontWeight: "700", color: "#fde84d" }}>Hi, </span></>}
                className=" nav-dropdown"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="navItem">
                  <Row style={textStyle}></Row>
                  <Row style={textStyle}></Row>
                </NavDropdown.Item>
                <hr />
                <NavDropdown.Item
                  style={textStyle}
                  className="navItem"
                >
                  <div>
                    <Link
                      to="/user"
                      style={{ color: "#445E6B" }}
                    >
                      <i style={{ color: "#fde84d" }}>
                        {settingIcon}
                      </i>{" "}
                                            Profile
                                        </Link>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={textStyle}
                  className="navItem"
                >
                  <div onClick={signOut}>
                    <Link
                      to="/"
                      style={{ color: "#445E6B" }}
                    >
                      <i>{signoutIcon}</i> Sign out
                                        </Link>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link to="/signup">
                <Button
                  className="btn border-0 pr-3 pl-3 ml-2"
                  style={{
                    backgroundColor: "#c89f79",
                    color: "white",
                    margin: "1rem 1rem",
                    fontWeight: "700",
                  }}
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(NavBarLogin);
export default Header