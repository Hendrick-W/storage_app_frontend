import React, { UseState, useRef, useEffect } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";


function masterTable() {
  const [kode_barang, setKode_barang] = UseState();
  const [nama_barang, setNama_barang] = UseState();
  const [kategori, setKategori] = UseState();
  
return (
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Product Registration</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Input Kode Barang</p>
    <Form.Control
    className="signin-column-form"
    type="text"
    name="text"
    onChange={(e) =>
      setKode_barang(e)
    }
    placeholder="Ex : 0012352358"
    />
    <p>Input Nama Barang</p>
    <Form.Control
    className="signin-column-form"
    type="text"
    name="text"
    onChange={(e) =>
      setNama_barang(e)
    }
    placeholder="Ex : Mesin Cuci"
    />
    <p>Input Kategori Barang</p>
    <Form.Control
    className="signin-column-form"
    type="text"
    name="text"
    onChange={(e) =>
      setKategori(e)
    }
    placeholder="Ex : Elektronik"
    />
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">Save Product</Button>
  </Modal.Footer>
</Modal.Dialog>
    );
  }

export default masterTable