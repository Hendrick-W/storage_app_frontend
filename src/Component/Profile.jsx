import React, { useEffect } from "react";
import { Card, CardDeck, Button, Form } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { getUserProfile } from "../store/actions/user"
// import { baseUrl } from "../helpers/api"
function Userprofile() {

    // const dispatch = useDispatch() 
    // useEffect(() => {
    //     dispatch(getUserProfile())
    // }, []) 
    // const userProfile = useSelector( state => state.user)
    // console.log(userProfile, "ini data porpil")

       
    return (
        <>
            <CardDeck className="CardInfo"> 
                <Card>
                    <Card.Img variant="top" 
                    src= "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    className="Picture" />
                    <Card.Body classname="Mandor">
                        <Card.Title >  
                            <p>Yopi Bangke</p>                      
                            <p> 2020009069</p>
                            <p> Mandor Gudang</p>
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
                        placeholder="Yopi Bangke"
                        className="Formemail"
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="Gender">
                    <b>Jabatan</b>
                    <p>Pegawai Kasar</p>
                </Form.Group>
                <Form.Group controlId="FormEmail" className="Username">
                {" "}
                <b>Nomor Pegawai</b>
                    <Form.Control
                        type="number"
                        placeholder="2020009069"
                        className="Formemail"
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="FormEmail" className="Username">
                    <b>Password</b>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className="Formemail"
                    ></Form.Control>
                </Form.Group>
            </Card>
            </div>
            <Button 
                style={{
                        backgroundColor: "#c89f79",
                        color: "white",}}
                className="Simpan">
                Save Profile
            </Button>
        </>
    );
}
export default Userprofile;
