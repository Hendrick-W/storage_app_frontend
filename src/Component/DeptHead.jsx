import React, { useEffect, useState } from 'react'
import axios from "axios";

function DeptHead() {
  const token = localStorage.getItem("token");
  const [list, setList] = useState([]);
  useEffect(() => {
    if (token !== 'undefined' && token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      axios
        .get("https://wareapplaravel.herokuapp.com/api/get_all_user", config)
        .then((res) => {
          if (res.data.status === true) {
            console.log(res)
            setList(res.data.data);
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
  }, [])
  return (
    <div>

    </div>
  )
}

export default DeptHead
