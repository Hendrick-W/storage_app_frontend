import React, { useState, useRef, useEffect } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import axios from 'axios'

function MasterTable({ show, handleShowClose }) {
  const [kode_barang, setKode_barang] = useState('');
  const [nama_barang, setNama_barang] = useState('');
  const [kategori, setKategori] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = {
      nama_barang: nama_barang,
      kode_barang: kode_barang,
      kategori: kategori
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    if (!nama_barang) {
      alert("Nama Barang is Required");
    } else if (!kode_barang) {
      alert("Kode Barang is Required");
    } else {
      axios
        .post("https://wareapplaravel.herokuapp.com/api/reference_storage", data, config)
        .then((res) => {
          window.location.href = `/reference_items`;
        })
        .catch((err) => alert(err));
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShowClose}>
        Add Reference Items
      </Button>
      <Modal show={show} onHide={handleShowClose} animation={false} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title>Product Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Input Kode Barang</p>
          <Form.Control
            className="product-code-form"
            type="text"
            name="text"
            onChange={(e) =>
              setKode_barang(e.target.value)
            }
            placeholder="Ex : 0012352358"
          />
          <p>Input Nama Barang</p>
          <Form.Control
            className="product-name-form"
            type="text"
            name="text"
            onChange={(e) =>
              setNama_barang(e.target.value)
            }
            placeholder="Ex : Mesin Cuci"
          />
          <p>Input Kategori Barang</p>
          <Form.Control
            className="product-category-form"
            type="text"
            name="text"
            onChange={(e) =>
              setKategori(e.target.value)
            }
            placeholder="Ex : Elektronik"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary" onClick={onSubmit}>Save Product</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MasterTable