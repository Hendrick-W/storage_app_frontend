import { useState, useRef } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import logo from "./asset/logo.png";

function ModalRegister() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm();
  const [nip, setNip] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [roles, setRoles] = useState();
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
    // e.preventDefault();
    // const data = {
    //   email: email,
    //   password: password,
    // };
    // if (!email) {
    //   alert("Email is Required");
    // } else if (!password) {
    //   alert("Password is Required");
    // } else {
    //   axios
    //     .post("https://wareapplaravel.herokuapp.com/api/login", data)
    //     .then((res) => {
    //       console.log(res.data);
    //       localStorage.setItem("token", res.data.result.token);
    //       localStorage.setItem("id", res.data.result.user.id);
    //       alert(res.data.message);
    //       window.location.href = "/";
    //     })
    //     .catch((err) => alert(err));
    // }
  };

  const alertText = {
    color: "red",
    textAlign: "center",
  };
  const inputIconSize = {
    width: "15px",
  };

  const container = useRef(null)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
        </Button>

      <Modal show={show} onHide={handleClose} animation={false} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
          <img
            src={logo}
            alt="docpets logo"
            className="navbar-logo"
          ></img>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <InputGroup size="sm">
                <Form.Control
                  className="signin-column-form"
                  type="text"
                  name="text"
                  onChange={(e) =>
                    setNip(e.target.value)
                  }
                  placeholder="Nomor Induk Pegawai"
                  ref={register({ required: true })}
                />
              </InputGroup>
              {errors.email &&
                errors.email.type === "required" && (
                  <p style={alertText}>Nomor Induk Pegawai required</p>
                )}
            </Form.Group>

            <Form.Group>
              <InputGroup size="sm">
                <Form.Control
                  className="signin-column-form"
                  type="text"
                  name="text"
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Nama Pegawai"
                  ref={register({ required: true })}
                />
              </InputGroup>
              {errors.email &&
                errors.email.type === "required" && (
                  <p style={alertText}>Name required</p>
                )}
            </Form.Group>

            <Form.Group>
              <InputGroup size="sm">
                <Form.Control
                  className="signin-column-form"
                  type="text"
                  name="text"
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                  placeholder="Tanggal Lahir (YYYY-MM-DD)"
                  ref={register({ required: true })}
                />
              </InputGroup>
              {errors.email &&
                errors.email.type === "required" && (
                  <p style={alertText}>Date required</p>
                )}
            </Form.Group>

            <Form.Group>
              <InputGroup size="sm">
                <Form.Control
                  className="signin-column-form"
                  type="text"
                  name="text"
                  onChange={(e) =>
                    setRoles(e.target.value)
                  }
                  placeholder="Role Pegawai"
                  ref={register({ required: true })}
                />
              </InputGroup>
              {errors.email &&
                errors.email.type === "required" && (
                  <p style={alertText}>Role required</p>
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

            <Link to="/profile">
              <Button
                type="submit"
                onClick={onSubmit}
                className="btn btn-block-signin w-100"
              >
                Submit
                              </Button>
            </Link>

          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ModalRegister;