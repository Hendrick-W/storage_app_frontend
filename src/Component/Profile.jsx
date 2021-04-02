import React from "react";
import { Card, CardDeck, Button, Form } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import "./Profile.css";
import { Link } from "react-router-dom";
function Userprofile() {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  const nomor_pegawai = localStorage.getItem("nomor_pegawai");
  const tanggal_lahir = localStorage.getItem("tanggal_lahir");
  return (
    <>
      <CardDeck className="CardInfo">
        <Card>
          <Card.Img variant="top"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            className="Picture" />
          <Card.Body className="Mandor">
            <Card.Title >
              <p>{name}</p>
              <p> {nomor_pegawai}</p>
              {role == 0 && <p>Admin</p>}
              {role == 1 && <p>Dept. Head</p>}
              {role == 2 && <p>Receptionist</p>}
              {role == 3 && <p>Storage</p>}
              {role == 4 && <p>Dispatch</p>}
            </Card.Title>

          </Card.Body>
        </Card>
      </CardDeck>

      <Card body className="Logout">
        {" "}
        <Link to="/">Log Out </Link>{" "}
      </Card>
      <div className="FormDataBase">
        <CardDeck className="Uploadfoto">
          <Card.Body>
            {" "}
            <b>Upload Foto</b>
          </Card.Body>
        </CardDeck>

        <Card className="Upload">
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        </Card>

        <Card className="Basicinformation">
          <Card.Body>
            {" "}
            <b>Basic Information</b>
          </Card.Body>
          <Form.Group controlId="FormEmail" className="Username">
            <b>Nama Pegawai</b>
            <Form.Control
              type="text"
              placeholder={name}
              className="Formemail"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="Gender">
            <b>Jabatan</b>
            {role == 0 && <p>Admin</p>}
            {role == 1 && <p>Dept. Head</p>}
            {role == 2 && <p>Receptionist</p>}
            {role == 3 && <p>Storage</p>}
            {role == 4 && <p>Dispatch</p>}
          </Form.Group>
          <Form.Group controlId="FormEmail" className="Username">
            {" "}
            <b>Nomor Pegawai</b>
            <Form.Control
              type="number"
              placeholder={nomor_pegawai}
              className="Formemail"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="FormEmail" className="Username">
            <b>Password</b>
            <Form.Control
              type="password"
              placeholder="*******"
              className="Formemail"
            ></Form.Control>
          </Form.Group>
        </Card>
      </div>
      <Button
        style={{
          backgroundColor: "#c89f79",
          color: "white",
        }}
        className="Simpan">
        Save Profile
      </Button>
    </>
  );
}
export default Userprofile;