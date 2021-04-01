import React, { useEffect, useState } from "react";
import Homes from "../Component/Profile";
import Header from "../Component/Header";
import Navbar from "../Component/Navbar";
import axios from "axios";

function Profile() {
  const [loading, setLoading] = useState(true);
  const onCheckingToken = () => {
    const token = localStorage.getItem("token");
    if (token != 'undefined' && token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      axios
        .get("https://wareapplaravel.herokuapp.com/api/get_user", config)
        .then((res) => {
          if (res.data.status == true) {
            localStorage.setItem("token", token);
            localStorage.setItem("name", res.data.user.nama);
            localStorage.setItem("role", res.data.user.role_id);
            setLoading(false);
          } else {
            window.location.href = "/"
          }
        })
        .catch((err) => {
          window.location.href = "/"
        });
    } else {
      window.location.href = "/";
    }
  }
  useEffect(() => {
    onCheckingToken();
  }, [])
  if (loading == true) {
    return null;
  }
  return (
    <div >
      <Navbar />
      <Header />
      <Homes />
    </div>
  );
}

export default Profile;