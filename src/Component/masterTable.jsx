import React, { useState, useRef, useEffect } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";


function MasterTable() {
  const [kode_barang, setKode_barang] = useState('');
  const [nama_barang, setNama_barang] = useState('');
  const [kategori, setKategori] = useState('');
  
return (
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Product Registration</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Input Kode Barang</p>
    <Form.Control
    className="product-code-form"
    type="number"
    name="text"
    onChange={(e) =>
      setKode_barang(e)
    }
    placeholder="Ex : 0012352358"
    />
    <p>Input Nama Barang</p>
    <Form.Control
    className="product-name-form"
    type="text"
    name="text"
    onChange={(e) =>
      setNama_barang(e)
    }
    placeholder="Ex : Mesin Cuci"
    />
    <p>Input Kategori Barang</p>
    <Form.Control
    className="product-category-form"
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

export default MasterTable