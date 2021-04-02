import React, { useEffect, useState } from 'react'
import axios from "axios";
import ModalRegister from './ModalRegister';
import './Dispatch.scss';

function Dispatch() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const handleShowClose = () => setShow(!show);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== 'undefined' && token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
      axios
        .get("https://wareapplaravel.herokuapp.com/api/get_all_user", config)
        .then((res) => {
          if (res.data.status === true) {
            const filteredResult = res.data.data.filter(result => result.role_id == 4)
            setList(filteredResult);
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
  const renderTableData = (data) => {
    return data.map((employee, index) => {
      const { nomor_pegawai, nama, tanggal_lahir, role_id } = employee
      return (
        <tr key={nomor_pegawai}>
          <td>{nomor_pegawai}</td>
          <td>{nama}</td>
          <td>{tanggal_lahir}</td>
          <td>Dispatch</td>
        </tr>
      )
    })
  }
  const renderTableHeader = () => {
    const header = ["Nomor Pegawai", "Nama", "Tanggal Lahir", "Jabatan"]
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }
  return (
    <div>
      <h1 id='title'>Employees in Dispatch</h1>
      <ModalRegister show={show} handleShowClose={handleShowClose} role="dispatch" />
      <table id='students'>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {list.length != 0 && renderTableData(list)}
        </tbody>
      </table>
    </div>
  )
}

export default Dispatch
