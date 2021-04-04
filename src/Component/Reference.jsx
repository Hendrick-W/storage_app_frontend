import React, { useEffect, useState } from 'react'
import axios from "axios";
import MasterTable from './masterTable';
import './DeptHead.scss';

function Reference() {
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
        .get("https://wareapplaravel.herokuapp.com/api/reference_storage", config)
        .then((res) => {
          if (res.data.status === true) {
            // console.log(res)
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
  const renderTableData = (data) => {
    return data.map((item, index) => {
      const { nama_barang, kode_barang, kategori } = item
      return (
        <tr key={kode_barang}>
          <td>{kode_barang}</td>
          <td>{nama_barang}</td>
          <td>{kategori}</td>
        </tr>
      )
    })
  }
  const renderTableHeader = () => {
    const header = ["Kode Barang", "Nama Barang", "Kategori"]
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  if (list.length == 0) {
    return null
  }

  return (
    <div>
      <h1 id='title'>References Items</h1>
      <MasterTable show={show} handleShowClose={handleShowClose} />
      <table id='students'>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData(list)}
        </tbody>
      </table>
    </div>
  )
}

export default Reference
