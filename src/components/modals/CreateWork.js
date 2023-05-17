import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { createWork } from "../../http/workAPI";

const CreateWork = ({ show, onHide }) => {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addWork = () => {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('author', author)
    formData.append('description', description)
    createWork(formData).then(data => onHide())
  }

  
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Додати статтю
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={author} onChange={e => setAuthor(e.target.value)} className="mt-3" placeholder={"Enter author"}></Form.Control>
          <Form.Control value={title} onChange={e => setTitle(e.target.value)} className="mt-3" placeholder={"Enter title"}></Form.Control>
          <Form.Control value={description} onChange={e => setDescription(e.target.value)} className="mt-3" placeholder={"Enter description"}></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрити
        </Button>
        <Button variant={"outline-success"} onClick={addWork}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateWork;
