import React, { useState, useRef, useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { loginAction } from "../store/actions/auth";
import { connect } from "react-redux";
import lockIcon from "./asset/lock.svg";
import mailIcon from "./asset/mail.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import lottie from 'lottie-web';
import "./home.scss";

const FormSignIn = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const eye = <FontAwesomeIcon icon={faEye} />;
  const token = localStorage.getItem("token");
  let role = localStorage.getItem("role");

  const togglePasswordVisibility = () => {
      setShowPassword(showPassword ? false : true);
  };
  const onSubmit = (e) => {
      e.preventDefault();
      const data = {
          email: email,
          password: password,
      };
      if (!email) {
          alert("Email is Required");
      } else if (!password) {
          alert("Password is Required");
      } else {
          axios
              .post("https://wareapplaravel.herokuapp.com/api/login", data)
              .then((res) => {
                  console.log(res.data);
                  localStorage.setItem("token", res.data.result.token);
                  localStorage.setItem("id", res.data.result.user.id);
                  alert(res.data.message);
                  window.location.href = "/";
              })
              .catch((err) => alert(err));
      }
  };

  const alertText = {
      color: "red",
      textAlign: "center",
  };
  const inputIconSize = {
      width: "15px",
  };

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('./13396-storage.json')
    })
  }, [])

  return (
    <>
    <div className="Animation" ref={container} />
      <div className="signin-form-container">
          <div className="item-right">
              <div
                  className="form-containers"
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1500"
                  data-aos-easing="ease-out"
              >
                  <div className="signin-form">
                      <h2 className="signin-text">Welcome Back</h2>
                      <h6 className="signin-text">
                          Login To Begin The Journey
                      </h6>
                      <Form onSubmit={handleSubmit(onSubmit)}>
                          <Form.Group>
                              <InputGroup size="sm">
                                  <Form.Control
                                      className="signin-column-form"
                                      type="text"
                                      name="text"
                                      onChange={(e) =>
                                          setEmail(e.target.value)
                                      }
                                      placeholder="Your Id"
                                      ref={register({ required: true })}
                                  />
                              </InputGroup>
                              {errors.email &&
                                  errors.email.type === "required" && (
                                      <p style={alertText}>Email required</p>
                                  )}
                          </Form.Group>

                          <Form.Group>
                              <InputGroup size="sm">
                                  <Form.Control
                                      className="signin-column-form"
                                      type={
                                          showPassword ? "text" : "password"
                                      }
                                      name="password"
                                      balue={password}
                                      onChange={(e) =>
                                          setPassword(e.target.value)
                                      }
                                      placeholder="Password"
                                      ref={register({
                                          required: true,
                                          minLength: 8,
                                          maxLength: 32,
                                      })}
                                  />
                                  <i onClick={togglePasswordVisibility}>
                                      {eye}
                                  </i>{" "}
                              </InputGroup>
                              {errors.password &&
                                  errors.password.type === "required" && (
                                      <p style={alertText}>
                                          Password required
                                      </p>
                                  )}
                              {errors.password &&
                                  errors.password.type === "minLength" && (
                                      <p style={alertText}>
                                          Password required min length of 8
                                          characters
                                      </p>
                                  )}
                              {errors.password &&
                                  errors.password.type === "maxLength" && (
                                      <p style={alertText}>
                                          Password required max length of 32
                                          characters
                                      </p>
                                  )}
                          </Form.Group>

                          <Link to="/user">
                              <Button
                                  type="submit"
                                  onClick={onSubmit}
                                  className="btn btn-block-signin w-100"
                              >
                                  Sign In
                              </Button>
                          </Link>
                          <h6 className="signin-text-down">
                              Don't have an account? Please
                              <Link to="/signup" className="signup-text-link">
                                  {" "}
                                  Sign Up
                              </Link>
                          </h6>
                      </Form>
                  </div>
              </div>
          </div>
      </div>
      </>
  );
};

export default FormSignIn;

